import { defineField, defineType } from "sanity";
import { COLORS, ICONS, choice, img, list, rich, section, str, txt, url } from "../helpers";

const media = (name: string, title: string, description?: string) =>
  defineField({
    name, title, description, type: "file",
    options: { accept: "video/mp4,video/webm,.mp4,.webm" },
  });

const photos = (name: string, title: string, max?: number) =>
  defineField({
    name, title, type: "array", of: [{ type: "image", options: { hotspot: true } }],
    validation: max ? (r) => r.max(max) : undefined,
  });

const valueItem = [
  str("title", "Title"),
  txt("body", "Text", undefined, { rows: 2 }),
  choice("icon", "Icon", ICONS),
  choice("color", "Colour", COLORS),
];

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    section("hero", "1 · Hero", [
      str("title", "Headline"), str("subtitle", "Sub-headline (pink)"), txt("intro", "Intro text"),
      str("buttonLabel", "Button text"), url("buttonLink", "Button link"), img("image", "Picture"),
    ]),
    section("about", "2 · About us", [
      str("line1", "Heading line 1 (bold)"), str("line2", "Heading line 2"), str("script", "Heading script word"),
      txt("body", "Text", undefined, { rows: 6 }), str("buttonLabel", "Button text"),
      img("imageMain", "Large picture"), img("imageAccent", "Small tall picture"),
    ]),
    section("qgt", "3 · Queers Got Talent", [
      str("headingScript", "Heading (script)"), str("headingMain", "Heading (bold)"),
      txt("intro", "Intro"), txt("quote", "Quote"),
      media("video", "Highlights video", "Upload an MP4 (H.264). Aim for under 60 MB."),
      img("poster", "Video cover picture"),
    ]),
    section("marquee", "4 · Scrolling photo strip", [
      photos("images", "Photos"), str("buttonLabel", "Button text"), url("buttonLink", "Button link"),
    ]),
    section("reachOut", "5 · Reach out", [str("title", "Heading"), txt("body", "Text", undefined, { rows: 5 }), str("buttonLabel", "Button text")]),
    section("resourceCenter", "6 · Resource centre", [str("title", "Heading"), str("titleScript", "Script part of heading"), str("subtitle", "Sub-text"), str("buttonLabel", "Button text")]),
    section("focus", "7 · Focus areas", [str("title", "Heading"), list("items", "Areas", valueItem), str("buttonLabel", "Button text")]),
    section("vision", "8 · Vision", [str("title", "Heading"), txt("body", "Text")]),
    section("approach", "9 · Approach", [str("title", "Heading"), txt("body", "Text")]),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    section("header", "Page heading", [str("title", "Heading"), str("titleHighlight", "Highlighted part")]),
    section("story", "Our story", [str("badge", "Small label"), str("title", "Heading"), str("titleHighlight", "Highlighted word"), rich("body", "Text", "Use the Quote style for the highlighted paragraph.")]),
    section("mission", "Mission", [str("title", "Heading"), rich("body", "Text")]),
    section("vision", "Vision", [str("title", "Heading"), rich("body", "Text")]),
    section("values", "Core values", [str("title", "Heading"), str("titleHighlight", "Highlighted word"), list("items", "Values", valueItem)]),
    section("impact", "Impact", [str("badge", "Small label"), str("title", "Heading"), rich("body", "Text"), str("buttonLabel", "Button text"), url("buttonLink", "Button link")]),
    section("getInvolved", "Get involved", [str("title", "Heading"), str("titleHighlight", "Highlighted word"), txt("intro", "Intro")]),
    list("polaroids", "Polaroid photos (large screens)", [img("image", "Photo"), str("caption", "Caption")]),
  ],
  preview: { prepare: () => ({ title: "About page" }) },
});

export const programsPage = defineType({
  name: "programsPage",
  title: "Programs page",
  type: "document",
  fields: [
    section("hero", "Hero", [str("badge", "Small label"), str("title", "Heading"), str("titleScript", "Script heading"), txt("intro", "Intro"), img("image", "Picture")]),
    section("qgt", "Queers Got Talent", [
      media("video", "Recap video"), img("poster", "Video cover / trophy picture"),
      str("badge", "Small label"), str("title", "Heading"), str("titleHighlight", "Highlighted part"),
      rich("body", "Text"), str("buttonLabel", "Button text"), url("buttonLink", "Button link"),
    ]),
    section("intersex", "Intersex awareness (intro)", [str("title", "Heading"), str("titleHighlight", "Highlighted word"), rich("body", "Text")]),
    section("awarenessDay", "Intersex Awareness Day", [
      str("badge", "Small label"), str("title", "Heading"), str("titleHighlight", "Highlighted part"),
      txt("body", "Text"), txt("body2", "Smaller text"), photos("images", "3 photos", 3),
    ]),
    section("srhr", "SRHR access", [str("title", "Heading"), txt("body", "Text"), img("image", "Picture")]),
    section("empowerment", "Intersex empowerment", [str("title", "Heading"), txt("body", "Text"), str("quote", "Quote"), img("image", "Picture")]),
    section("wellbeing", "Mental health and wellbeing", [str("badge", "Small label"), str("title", "Heading"), str("titleHighlight", "Highlighted part"), txt("body", "Text"), img("image", "Picture")]),
    section("art", "The Art of Every-Body", [str("badge", "Small label"), str("title", "Heading"), str("titleHighlight", "Highlighted part"), txt("body", "Text"), img("image", "Wide picture"), img("image2", "Tall picture")]),
    section("economic", "Economic justice / Empowerment projects", [
      str("badge", "Small label"), str("title", "Heading"), str("titleHighlight", "Highlighted word"),
      str("status", "Status tag", "e.g. COMING SOON. Leave empty to hide."), txt("intro", "Intro"),
      list("skills", "Skills", [str("emoji", "Emoji"), str("title", "Title"), txt("body", "Text", undefined, { rows: 2 })]),
      img("image", "Picture"), str("caption", "Picture caption"),
    ]),
  ],
  preview: { prepare: () => ({ title: "Programs page" }) },
});

export const resourcesPage = defineType({
  name: "resourcesPage",
  title: "Resources page",
  type: "document",
  fields: [
    section("header", "Page heading", [str("title", "Heading"), str("titleHighlight", "Highlighted part"), txt("intro", "Intro")]),
    section("educational", "Educational materials card", [str("title", "Heading"), txt("body", "Text"), str("buttonLabel", "Button text")]),
    section("emergency", "Emergency support card", [str("title", "Heading"), txt("body", "Text"), str("buttonLabel", "Button text")]),
    section("faq", "FAQs", [
      str("badge", "Small label"), str("title", "Heading"), str("titleHighlight", "Highlighted word"),
      list("items", "Questions", [str("question", "Question"), txt("answer", "Answer")]),
      str("stillTitle", "Still-have-questions heading"), str("stillBody", "Still-have-questions text"), str("stillButton", "Button text"),
    ]),
  ],
  preview: { prepare: () => ({ title: "Resources page" }) },
});

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  fields: [
    section("header", "Page heading", [str("title", "Heading"), str("titleHighlight", "Highlighted word"), txt("intro", "Intro")]),
    section("emailCard", "Email card", [str("title", "Heading"), str("body", "Text")]),
    section("phoneCard", "Phone card", [str("title", "Heading")]),
    section("socialCard", "Social card", [str("title", "Heading"), str("body", "Text"), str("linkLabel", "Link label")]),
    section("visit", "Visit us", [str("title", "Heading"), rich("body", "Text")]),
  ],
  preview: { prepare: () => ({ title: "Contact page" }) },
});

export const galleryPage = defineType({
  name: "galleryPage",
  title: "Gallery page",
  type: "document",
  fields: [
    section("header", "Page heading", [str("title", "Heading"), str("titleHighlight", "Highlighted word"), txt("intro", "Intro")]),
    list("sections", "Photo albums", [
      str("badge", "Small label"), str("title", "Heading"), str("titleHighlight", "Highlighted part"), txt("description", "Description"),
      choice("color", "Colour", COLORS), photos("images", "Photos"),
    ]),
  ],
  preview: { prepare: () => ({ title: "Gallery page" }) },
});
