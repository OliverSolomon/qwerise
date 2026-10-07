// One-off content migration: uploads the site's media to Sanity and creates the
// page + settings documents from the original hard-coded content.
// Usage: node scripts/seed.mjs   (needs SANITY_API_WRITE_TOKEN in .env.local)
import { createClient } from "@sanity/client";
import { createReadStream, readFileSync, existsSync } from "node:fs";
import { basename, join } from "node:path";
import { Readable } from "node:stream";

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8").split(/\r?\n/).filter((l) => l.includes("=")).map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1)])
);
const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-10-01",
  token: env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const cache = new Map();
let n = 0;
const key = () => `k${(n++).toString(36)}`;

async function uploadImage(path) {
  if (cache.has(path)) return cache.get(path);
  const file = join("public", path);
  if (!existsSync(file)) throw new Error(`Missing ${file}`);
  const asset = await client.assets.upload("image", createReadStream(file), { filename: basename(file) });
  console.log("uploaded", path);
  cache.set(path, asset._id);
  return asset._id;
}
const img = async (path, alt) => ({ _type: "image", asset: { _type: "reference", _ref: await uploadImage(path) }, ...(alt ? { alt } : {}) });
const imgs = async (paths) => { const out = []; for (const p of paths) out.push({ ...(await img(p)), _key: key() }); return out; };

async function uploadVideo(url) {
  console.log("downloading", url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Video download failed: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  console.log(`uploading video (${Math.round(buf.length / 1024 / 1024)} MB)`);
  const asset = await client.assets.upload("file", Readable.from(buf), { filename: "qgt-highlights.mp4", contentType: "video/mp4" });
  return { _type: "file", asset: { _type: "reference", _ref: asset._id } };
}

// "Some **bold** text" -> portable text spans. Each item is a string or { quote: string }.
function pt(items) {
  return items.map((item) => {
    const quote = typeof item === "object";
    const text = quote ? item.quote : item;
    const children = text.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((part) =>
      part.startsWith("**")
        ? { _type: "span", _key: key(), text: part.slice(2, -2), marks: ["strong"] }
        : { _type: "span", _key: key(), text: part, marks: [] }
    );
    return { _type: "block", _key: key(), style: quote ? "blockquote" : "normal", markDefs: [], children };
  });
}
const items = (arr) => arr.map((o) => ({ _key: key(), ...o }));

const qgtPaths = [
  "5H0A0008", "5H0A0192", "5H0A0324", "5H0A0516", "5H0A0620", "5H0A0748", "DSC_0023", "_MG_8154", "5H0A0198", "5H0A0328", "5H0A0336",
  "5H0A0531", "5H0A0534", "5H0A0603", "5H0A0678", "5H0A0689", "5H0A0752", "5H0A0777", "5H0A0805", "5H0A0829", "DSC_0070",
  "DSC_0086 (1)", "DSC_0095 (1)", "DSC_0175", "DSC_0267", "DSC_0924",
].map((f) => `/queers-got-talent/${f}.jpg`);
const eventPaths = [
  "CRMCD-14", "CRMCD-16", "IMG-20250224-WA0005(1)", "IMG-20250224-WA0006", "IMG-20250224-WA0008(1)", "IMG_3746", "IMG_3876", "IMG_4300",
  "IMG_4394", "IMG_4411", "IMG_4462", "IMG_4614 (1)", "Scanned_20251014-2119-01", "Scanned_20251014-2119-02", "Scanned_20251014-2119-03",
  "WIN03013", "WIN03024", "WIN03058",
].map((f) => `/queer-gallery-events/${f}.jpg`);

const video = await uploadVideo("https://cashcade.co.ke/video/qgt-highlights-compressed.mp4");
const trophy = "/queers-got-talent/trophy.png";
const art = (f) => `/queer artwork/new/${f}`;

const docs = [
  {
    _id: "generalSettings", _type: "generalSettings",
    siteName: "Q We Rise Network",
    seoTitle: "Q We Rise Network | Advancing Rights & Wellness for ITGNC & LBQ Communities",
    seoDescription: "Q We Rise Network is a feminist, Kenyan-based organization advancing gender equity, mental wellness, and sexual and reproductive health rights for ITGNC and LBQ communities.",
    keywords: "LGBTQ+, intersex, transgender, non-binary, lesbian, bisexual, queer, Kenya, feminist, SRHR, mental wellness, advocacy",
    socialDescription: "A feminist, Kenyan-based organization empowering ITGNC and LBQ individuals through rights-based advocacy, inclusive SRHR education, economic justice, and creative expression.",
    navLinks: items([
      { label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Programs", href: "/programs" },
      { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" },
    ]),
    donateLabel: "Donate", donateUrl: "https://www.mchanga.africa/fundraiser/114347",
    footerBlurb: "Advancing gender equity, mental wellness, and SRHR for ITGNC and LBQ communities in Kenya through a feminist, rights-based approach.",
    getInvolvedTitle: "Get Involved",
    getInvolvedText: "Join our network and be part of the change. We welcome volunteers, partners, and allies.",
    getInvolvedButton: "Partner With Us",
    newsletter: {
      badge: "Newsletter", title: "Stay", titleHighlight: "Connected",
      body: "Join our community newsletter to receive updates on our programs, upcoming events, and stories of impact.",
    },
  },
  {
    _id: "contactSettings", _type: "contactSettings",
    email: "info@qwerise.org", phone: "+254 727 776 506", phoneLink: "+254727776506",
    phoneHours: "Mon-Fri, 9am - 5pm EAT", emailNote: "For general inquiries and partnerships",
  },
  {
    _id: "socialSettings", _type: "socialSettings",
    instagram: "https://www.instagram.com/q_we_rise_network", instagramHandle: "@QWeRiseNetwork",
    facebook: "https://www.facebook.com/QWeRiseNetwork", twitter: "https://twitter.com/QWeRiseNetwork", linkedin: "",
  },
  {
    _id: "homePage", _type: "homePage",
    hero: {
      title: "Rising Together", subtitle: "for bodily autonomy, rights, and dignity.",
      intro: "Empowering ITGNC and LBQ individuals through rights-based advocacy, inclusive SRHR education, economic justice, and creative expression that centers healing and communal care.",
      buttonLabel: "See our programs", buttonLink: "/programs",
      image: await img(trophy, "Queers Got Talent Trophy - Celebrating LGBTQ+ talent and creativity"),
    },
    about: {
      line1: "Q We Rise Network", line2: "here for you", script: "About Us",
      body: "We are a Feminist, Kenyan-based organization founded in 2023 by young Intersex, Transgender, Non-Binary, and Lesbian, Bisexual, & Queer (ITGNC & LBQ) individuals who have experienced the deep harms of structural violence. Grounded in principles of bodily autonomy, collective liberation, and healing justice, our aim is to advance gender equity, mental wellness, and access to comprehensive sexual and reproductive health and rights (SRHR) for ITGNC and LBQ communities.",
      buttonLabel: "Learn More",
      imageMain: await img(art("queer-joy.jpeg"), "Queer Joy Artwork"),
      imageAccent: await img(art("trans1.jpeg"), "Trans Artwork"),
    },
    qgt: {
      headingScript: "Queers,", headingMain: "Got talent",
      intro: "Queers Got Talent is a bold platform celebrating the creativity, resilience, and expression of LGBTQI+ artists. It creates a safe, empowering space for queer and gender-diverse talent to connect, be visible, and access new opportunities.",
      quote: "In a time when anti-rights movements attempt to erase and misrepresent our identities as “un-African,” Queers Got Talent stands as resistance and proof: our queerness is valid, African, and deeply rooted in our history.",
      video, poster: await img(trophy, "Queers Got Talent trophy"),
    },
    marquee: { images: await imgs([...qgtPaths.slice(0, 8), ...eventPaths]), buttonLabel: "See Gallery", buttonLink: "/gallery" },
    reachOut: {
      title: "Reach out to our team.",
      body: "If you would like to experience the events and the activities follow the link to our Social media Page, at the moment Our website is down but we are working on it to be active soon. Contact us anytime you need support. If you are having a difficult day, or feeling alone, we're here to listen and help.",
      buttonLabel: "Contact Us",
    },
    resourceCenter: { title: "Explore our", titleScript: "Resource Center", subtitle: "Search our topics, learn more, and find answers.", buttonLabel: "Visit Resource Page" },
    focus: {
      title: "Our Focus Areas", buttonLabel: "View All Programs",
      items: items([
        { title: "SRHR Education", icon: "Stethoscope", color: "orange", body: "Providing community education on SRHR and bodily autonomy." },
        { title: "Advocacy & Awareness", icon: "Megaphone", color: "purple", body: "Advancing rights, visibility, and dignity through intersectional advocacy." },
        { title: "Economic Justice", icon: "Coins", color: "teal", body: "Building financial independence and nurturing talent through skills-based programs." },
        { title: "Storytelling", icon: "BookOpen", color: "lilac", body: "Using art and narrative to reclaim our history, celebrate our present, and envision our future." },
        { title: "Holistic Wellbeing", icon: "Heart", color: "amber", body: "Creating safe spaces for mental, emotional, spiritual, and physical wellbeing." },
        { title: "Creative Expression", icon: "Palette", color: "mint", body: "Using art, music, film, and sports as tools for expression, healing, and civic education." },
      ]),
    },
    vision: { title: "Our Vision", body: "To create a world where ITGNC and LBQ individuals are valued, respected, and empowered to live in their full, authentic selves free from oppression and held in communities rooted in care, dignity and justice." },
    approach: { title: "Our Approach", body: "We center communal care as a radical act of resistance and resilience using art, music, film, and sports as culturally rooted tools for expression, healing, and civic education. Our work is anchored in intersectional feminist values." },
  },
  {
    _id: "aboutPage", _type: "aboutPage",
    header: { title: "Who", titleHighlight: "We Are" },
    story: {
      badge: "OUR STORY", title: "About", titleHighlight: "Us",
      body: pt([
        "Q We Rise Network is a Feminist, Kenyan-based organization founded in 2023 by young Intersex, Transgender, Non-Binary, and Lesbian, Bisexual, & Queer (ITGNC & LBQ) individuals who have experienced the deep harms of structural violence, discriminatory laws, and social exclusion.",
        { quote: "Grounded in principles of bodily autonomy, collective liberation, and healing justice, our aim is to advance gender equity, mental wellness, and access to comprehensive sexual and reproductive health and rights (SRHR)." },
        "We center communal care as a radical act of resistance and resilience using art, music, film, and sports as culturally rooted tools for expression, healing, and civic education.",
      ]),
    },
    mission: { title: "Mission", body: pt(["To empower ITGNC and LBQ individuals through **Rights-Based Advocacy**, inclusive **SRHR Education**, **Economic Justice**, and **Creative Expression** that centers healing and communal care."]) },
    vision: { title: "Vision", body: pt(["To create a world where ITGNC and LBQ individuals are valued, respected, and empowered to live in their full, authentic selves free from oppression and held in communities rooted in care, dignity and justice."]) },
    values: {
      title: "Core", titleHighlight: "Values",
      items: items([
        { icon: "Sparkles", title: "Radical joy", body: "Embracing joy as defiance and healing.", color: "purple" },
        { icon: "Palette", title: "Creativity", body: "Art and storytelling as tools for change.", color: "orange" },
        { icon: "Handshake", title: "Accountability", body: "Commitment to transparency and ethics.", color: "teal" },
        { icon: "Layers", title: "Intersectionality", body: "Centering those most impacted by systems of power.", color: "purple" },
        { icon: "Shield", title: "Bodily autonomy", body: "Rights to body, identity, and life free from violence.", color: "orange" },
        { icon: "Unlock", title: "Liberation", body: "None of us are free until all of us are free.", color: "teal" },
      ]),
    },
    impact: {
      badge: "IMPACT", title: "Approaches & Impact",
      body: pt([
        "Over the past two years, Q We Rise Network has made transformative strides, reaching over **300 individuals** directly. Our community centered approaches have facilitated safe space dialogues and creative expression events tailored for ITGNC and LBQ youth.",
        "Impactful partnerships with organizations like **HIVOS** and **Feminists in Kenya** marks a bold step in reimagining the fight against femicide through a non-binary feminist lens.",
      ]),
      buttonLabel: "Follow the Impact on Instagram", buttonLink: "https://www.instagram.com/q_we_rise_network",
    },
    getInvolved: { title: "Get", titleHighlight: "Involved", intro: "Whether you want to collaborate, volunteer, or just say hi — we'd love to hear from you." },
    polaroids: items([
      { image: await img("/queers-got-talent/DSC_0023.jpg", "Event photo"), caption: "Joy!" },
      { image: await img("/queers-got-talent/5H0A0008.jpg", "Event photo"), caption: "Community" },
    ]),
  },
  {
    _id: "programsPage", _type: "programsPage",
    hero: {
      badge: "OUR PROGRAMS", title: "Empowering", titleScript: "our community.",
      intro: "Through advocacy, education, economic justice, and storytelling, we create spaces for ITGNC and LBQ individuals to thrive.",
      image: await img(art("activity.jpeg"), "Q We Rise Activity"),
    },
    qgt: {
      video, poster: await img(trophy, "Queers Got Talent Trophy"),
      badge: "STORYTELLING & DOCUMENTING", title: "Queers Got Talent:", titleHighlight: "Africanizing our Queer Cultures",
      body: pt([
        "**Queers Got Talent** is an annual arts and advocacy program that creates safe, visible, and empowering platforms for queer and gender-diverse artists in Kenya. Through performance, storytelling, and creative expression, Queers Got Talent challenges harmful stereotypes, counters anti-rights narratives, and amplifies the voices of marginalized communities.",
        "The **third edition** was held under the theme **“Africanizing our queer cultures,”** recognizing creativity as a powerful tool to counter anti-rights movements targeting LGBTQI+ and intersex persons in Kenya. This edition intentionally centered art as a form of political expression and community healing.",
        "Through music, spoken word, dance, visual art, and storytelling, we use our talents to reclaim spaces, affirm identity, and resist policies and ideologies that threaten bodily autonomy and human rights. Queers Got Talent continues to serve as both an artistic showcase and a movement-building space where talent meets activism, and visibility becomes power.",
      ]),
      buttonLabel: "View Gallery", buttonLink: "/gallery",
    },
    intersex: {
      title: "Intersex", titleHighlight: "Awareness",
      body: pt([
        "Our Intersex Programs are designed to increase visibility, promote bodily autonomy, and advocate for inclusive healthcare, mental well-being, and social justice for intersex persons. Rooted in lived experiences, our work challenges systemic harm while creating spaces for healing, empowerment, and leadership.",
        "We implement our programs across **grassroots, national, and global platforms**, using both online and offline approaches to ensure intersex voices are heard, protected, and amplified.",
      ]),
    },
    awarenessDay: {
      badge: "Awareness Day", title: "Intersex", titleHighlight: "Awareness Day",
      body: "Spotlighting intersex realities and demanding dignity. We focus on challenging stigma, myths, and harmful medical practices—including non-consensual interventions—by centering intersex voices through storytelling, advocacy, and community-led dialogue.",
      body2: "Through digital campaigns and grassroots outreach, we ensure intersex narratives are visible online and globally beyond single-day commemorations.",
      images: await imgs(["/queer-gallery-events/IMG_4411.jpg", "/queer-gallery-events/IMG_3746.jpg", "/queer-gallery-events/IMG_4300.jpg"]),
    },
    srhr: {
      title: "Inclusive access to SRHR services in Kenya",
      body: "We work to dismantle systemic barriers to equitable and ethical sexual and reproductive health services. We challenge non-consensual medical practices and promote access to respectful, informed, and rights-based SRHR for intersex, transgender, and gender non-conforming persons.",
      image: await img(art("srhr.jpeg"), "Health Program"),
    },
    empowerment: {
      title: "Intersex Empowerment",
      body: "Intentional opportunities for intersex persons including leadership support, skills-building, and economic empowerment. We focus on strengthening safe spaces that foster confidence, resilience, and collective power.",
      quote: "A future where intersex persons live with autonomy, dignity, and equal access.",
      image: await img("/queer-gallery-events/CRMCD-14.jpg", "Leadership"),
    },
    wellbeing: {
      badge: "WELLBEING", title: "Mental Health &", titleHighlight: "Wellbeing",
      body: "Centering healing justice through community picnics and peer-led support circles. We believe healing happens in community. Our holistic approach addresses the mental, emotional, and spiritual wellbeing of ITGNC and LBQ individuals.",
      image: await img("/queer-gallery-events/Scanned_20251014-2119-01.jpg", "Mental Health Picnic"),
    },
    art: {
      badge: "CULTURE & ART", title: "The Art of", titleHighlight: "Every-Body",
      body: "Creating awareness about our bodies—ITGNC, Trans, and Intersex bodies—using art as a tool for political dialogue and body acceptance. First launched in August 2024 in partnership with visual artist queer_hemut, featuring art exhibitions, film screenings, and performances.",
      image: await img(art("art-of-everybody.jpeg"), "Art of Every-Body"),
      image2: await img("/queer-gallery-events/WIN03024.jpg", "Art Exhibition"),
    },
    economic: {
      badge: "ECONOMIC JUSTICE", title: "Empowerment", titleHighlight: "Projects", status: "COMING SOON",
      intro: "We are building sustainable futures through hands-on skills training and economic empowerment programs.",
      skills: items([
        { emoji: "👜", title: "Leather Craft Training", body: "Equipping our community with practical skills in leatherwork and entrepreneurship to foster independence." },
        { emoji: "🎧", title: "DJ & Podcast Training", body: "Professional training in music production and storytelling via the Q We Rise Podcast Studio." },
      ]),
      image: await img(art("beeds2.jpeg"), "Queer Ladder - Empowerment"), caption: "Economic justice",
    },
  },
  {
    _id: "resourcesPage", _type: "resourcesPage",
    header: { title: "Resources &", titleHighlight: "FAQs", intro: "Find answers, learn more about our work, and access support." },
    educational: { title: "Educational Materials", body: "Access our curated guides on SRHR, legal rights, and digital security for LGBTQ+ individuals in Kenya. Knowledge is power.", buttonLabel: "Coming Soon" },
    emergency: { title: "Emergency Support", body: "Need urgent help? We can connect you with legal aid partners and emergency shelters. You are not alone.", buttonLabel: "Contact Support" },
    faq: {
      badge: "SUPPORT", title: "Frequently Asked", titleHighlight: "Questions",
      items: items([
        { question: "How can I join Q We Rise Network?", answer: "We welcome individuals from the ITGNC and LBQ communities to join our network. You can reach out to us via email at info@qwerise.org or follow our social media pages for calls for membership and volunteer opportunities." },
        { question: "Where are your offices located?", answer: "We are based in Nairobi, Kenya. For security and privacy reasons, we share our physical address only with confirmed visitors and community members. Please contact us to schedule a visit." },
        { question: "How can I support your work?", answer: "You can support us through donations, volunteering your skills, or partnering with us on our programs. Every contribution helps us advance our mission of collective liberation and healing justice." },
        { question: "Do you offer mental health support?", answer: "Yes, holistic wellbeing is one of our core focus areas. We organize peer-led support circles, healing justice sessions, and can provide referrals to affirming mental health professionals." },
        { question: "What is 'Queers Got Talent'?", answer: "Queers Got Talent is our annual flagship event that offers a safe, affirming stage for queer artists to showcase their talents in music, dance, poetry, and more. It celebrates our joy and resilience." },
      ]),
      stillTitle: "Still have questions?", stillBody: "We're here to help. Reach out to us directly.", stillButton: "Contact Us",
    },
  },
  {
    _id: "contactPage", _type: "contactPage",
    header: { title: "Get in", titleHighlight: "Touch", intro: "We'd love to hear from you. Reach out for collaborations, support, or just to say hello." },
    emailCard: { title: "Email Us", body: "For general inquiries and partnerships" },
    phoneCard: { title: "Call Us" },
    socialCard: { title: "Social Media", body: "Follow our journey @QWeRiseNetwork", linkLabel: "Instagram" },
    visit: { title: "Visit Us", body: pt(["We are based in **Nairobi, Kenya**. For the safety and privacy of our community members, we do not publish our exact physical address. Please contact us to schedule a visit."]) },
  },
  {
    _id: "galleryPage", _type: "galleryPage",
    header: { title: "Our", titleHighlight: "Gallery", intro: "Visual stories of our community, events, and moments of joy." },
    sections: items([
      { badge: "QUEERS GOT TALENT", title: "Celebrating Queer", titleHighlight: "Brilliance", description: "Photos from our annual talent showcase celebrating the creativity and expression of our community.", color: "purple", images: await imgs(qgtPaths) },
      { badge: "COMMUNITY EVENTS", title: "Moments of", titleHighlight: "Connection", description: "Snapshots from our community gatherings, wellness events, and advocacy activities.", color: "teal", images: await imgs(eventPaths) },
    ]),
  },
];

const tx = client.transaction();
docs.forEach((d) => tx.createOrReplace(d));
await tx.commit();
console.log(`Seeded ${docs.length} documents, ${cache.size} images.`);
