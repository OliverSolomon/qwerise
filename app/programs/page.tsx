
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-[#FFF5F1] overflow-x-hidden">
            <Header />

            {/* Hero Section - Similar to Homepage */}
            <section className="relative bg-[#FFF5F1] min-h-[500px] overflow-hidden pt-24">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#1A3A5C]/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left side - Text content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-block px-4 py-1 bg-[#7B2CBF] text-white font-bold rounded-full text-sm mb-4">
                                OUR PROGRAMS
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] mb-6 leading-tight">
                                Empowering{" "}
                                <span className="font-script text-4xl sm:text-5xl lg:text-6xl block mt-2 text-[#7B2CBF]">
                                    our community.
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg text-[#4A5568] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Through advocacy, education, economic justice, and storytelling, we create spaces for ITGNC and LBQ individuals to thrive.
                            </p>
                        </div>

                        {/* Right side - Stacked skewed photos */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md h-[400px]">
                                {/* Back photo - queer portrait */}
                                <div className="absolute top-0 left-0 w-64 h-80 rotate-[-8deg] z-10 group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CBF] to-[#FF6B35] rounded-2xl rotate-[3deg] -z-10 shadow-xl"></div>
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/queer artwork/queer portrait.webp"
                                            alt="Queer portrait"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Front photo - community event */}
                                <div className="absolute top-20 right-0 w-64 h-80 rotate-[6deg] z-20 group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00B4A6] to-[#7B2CBF] rounded-2xl rotate-[-3deg] -z-10 shadow-xl"></div>
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/queers-got-talent/DSC_0023.jpg"
                                            alt="Community celebration"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="relative pb-20 font-inter">

                {/* Decorative Background Elements */}
                <div className="hidden md:block absolute top-32 -left-12 w-64 opacity-80 rotate-12 pointer-events-none mix-blend-multiply z-0">
                    <Image src="/queer artwork/proud being me.webp" alt="decoration" width={400} height={400} className="drop-shadow-xl" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="space-y-32">

                        {/* Queers Got Talent - Third Edition */}
                        <section className="relative group">
                            {/* Fun Shadow Background */}
                            <div className="absolute -top-4 -bottom-4 left-6 -right-6 bg-gradient-to-br from-[#7B2CBF]/20 to-[#FF6B35]/20 rounded-3xl rotate-[2deg] transition-transform group-hover:rotate-[3deg] -z-10"></div>

                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-purple-50 overflow-hidden">
                                <div className="grid lg:grid-cols-12 gap-12 items-center">
                                    <div className="lg:col-span-12 space-y-6 text-center max-w-4xl mx-auto">
                                        <div className="inline-block px-4 py-1 bg-[#7B2CBF] text-white font-bold rounded-full text-sm mb-2">
                                            STORYTELLING & DOCUMENTING
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E]">
                                            Queers Got Talent: <span className="text-[#7B2CBF]">Third Edition</span>
                                        </h2>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Queers Got Talent is an annual program by Q We Rise, launched in 2023 with the support of Hivos under the Free to Be Me initiative.
                                            The event offers a safe, affirming space for expression and aims to grow beyond Kenya into broader African and global platforms.
                                            This third edition continues our legacy of celebrating queer brilliance.
                                        </p>
                                    </div>

                                    {/* Predominant Video Recap */}
                                    <div className="lg:col-span-12 relative">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video group/video">
                                            <video
                                                src="/qgt-highlights-compressed.mp4"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                                poster="/queers-got-talent/trophy.bmp"
                                            />
                                            <div className="absolute inset-0 bg-transparent pointer-events-none border-[12px] border-white/5 rounded-3xl"></div>
                                        </div>
                                        {/* Trophy Image as a decorative sticker/card overlap */}
                                        <div className="absolute -bottom-8 -right-8 w-40 h-40 hidden md:block rotate-12 transition-transform group-hover:rotate-[15deg]">
                                            <div className="relative w-full h-full p-2 bg-white shadow-2xl rounded-2xl transform rotate-3">
                                                <Image src="/queers-got-talent/trophy.bmp" alt="QGT Trophy" fill className="object-cover rounded-xl" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* View Gallery Button */}
                                    <div className="lg:col-span-12 text-center">
                                        <Link
                                            href="/gallery"
                                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#7B2CBF] text-white font-bold rounded-full hover:bg-[#6B1FAF] transition-all transform hover:scale-105 shadow-lg text-base"
                                        >
                                            View Gallery
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Intersex Awareness Section */}
                        <div className="space-y-24">
                            <div className="text-center">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">Intersex <span className="text-[#00B4A6]">Awareness</span></h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Initiatives focused on visibility, health rights, and advocacy for intersex individuals.</p>
                            </div>

                            {/* Awareness Day */}
                            <section className="relative group">
                                <div className="absolute inset-0 bg-[#FFD700]/10 rounded-3xl rotate-[-2deg] -z-10 group-hover:rotate-[-3deg] transition-transform"></div>
                                <div className="bg-white p-8 rounded-3xl shadow-lg border border-yellow-50 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                                        <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                                            <Image src="/queer-gallery-events/IMG_4411.jpg" alt="Awareness Day" fill className="object-cover" />
                                        </div>
                                        <div className="relative h-48 rounded-2xl overflow-hidden shadow-md translate-y-6">
                                            <Image src="/queer-gallery-events/IMG_3746.jpg" alt="Awareness Day" fill className="object-cover" />
                                        </div>
                                        <div className="relative h-48 col-span-2 rounded-2xl overflow-hidden shadow-md -translate-y-2">
                                            <Image src="/queer-gallery-events/IMG_4300.jpg" alt="Awareness Day" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 space-y-4">
                                        <div className="inline-block px-3 py-1 bg-yellow-400 text-white font-bold rounded-full text-xs uppercase">Awareness Day</div>
                                        <h3 className="text-2xl font-bold text-[#1A1A2E]">Yellow and Purple <span className="text-yellow-500">Solidarity</span></h3>
                                        <p className="text-gray-700">Celebrating Intersex Awareness Day with vibrant community gatherings, centering our unique experiences and demands for human rights.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Access to Health & Awareness Outreach */}
                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Access to Health */}
                                <section className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-[#7B2CBF] relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#7B2CBF]/5 rounded-bl-full"></div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#1A1A2E]">Health Access Program</h3>
                                    <p className="text-gray-700 mb-6">Focusing on dismantling systemic barriers to essential healthcare for intersex individuals. We work to ensure access to affirming, informed, and non-coercive medical care.</p>
                                    <div className="relative h-48 rounded-2xl overflow-hidden">
                                        <Image src="/queer artwork/ribbon swirl.webp" alt="Health Program" fill className="object-cover" />
                                    </div>
                                </section>

                                {/* Awareness Outreach */}
                                <section className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-[#00B4A6] relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#00B4A6]/5 rounded-bl-full"></div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#1A1A2E]">Awareness Outreach</h3>
                                    <p className="text-gray-700 mb-6">Connecting with communities in informal settlements through grassroots organizing and education. Our outreach teams work to challenge stigma at the local level.</p>
                                    <div className="grid grid-cols-3 gap-2 h-48">
                                        <div className="relative rounded-xl overflow-hidden">
                                            <Image src="/queer-gallery-events/CRMCD-14.jpg" alt="Outreach" fill className="object-cover" />
                                        </div>
                                        <div className="relative rounded-xl overflow-hidden">
                                            <Image src="/queer artwork/lgbtqueer.webp" alt="LGBTQ" fill className="object-cover" />
                                        </div>
                                        <div className="relative rounded-xl overflow-hidden">
                                            <Image src="/queer-gallery-events/CRMCD-16.jpg" alt="Outreach" fill className="object-cover" />
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Mental Health - Separate Section */}
                            <section className="relative group">
                                <div className="absolute -left-4 -top-4 w-full h-full bg-[#00B4A6]/15 rounded-3xl rotate-[-1deg] -z-10 group-hover:rotate-[-2deg] transition-transform"></div>
                                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-teal-50 flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        <div className="inline-block px-4 py-1 bg-[#00B4A6] text-white font-bold rounded-full text-sm">WELLBEING</div>
                                        <h3 className="text-3xl font-bold text-[#1A1A2E]">Mental Health & <span className="text-[#00B4A6]">Wellbeing</span></h3>
                                        <p className="text-gray-700 leading-relaxed">Centering healing justice through community picnics and peer-led support circles. We believe healing happens in community. Our holistic approach addresses the mental, emotional, and spiritual wellbeing of ITGNC and LBQ individuals.</p>
                                    </div>
                                    <div className="w-full lg:w-1/2 relative h-80 rounded-3xl overflow-hidden shadow-2xl rotate-2 group-hover:rotate-0 transition-transform">
                                        <Image src="/queer-gallery-events/Scanned_20251014-2119-01.jpg" alt="Mental Health Picnic" fill className="object-cover" />
                                    </div>
                                </div>
                            </section>

                            {/* The Art of Every-Body - Separate Section */}
                            <section className="relative group">
                                <div className="absolute -right-4 -bottom-4 w-full h-full bg-gradient-to-br from-[#7B2CBF]/15 to-[#FF6B35]/15 rounded-3xl rotate-[1deg] -z-10 group-hover:rotate-[2deg] transition-transform"></div>
                                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-purple-50 flex flex-col lg:flex-row-reverse gap-12 items-center">
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        <div className="inline-block px-4 py-1 bg-[#7B2CBF] text-white font-bold rounded-full text-sm">CULTURE & ART</div>
                                        <h3 className="text-3xl font-bold text-[#1A1A2E]">The Art of <span className="text-[#7B2CBF]">Every-Body</span></h3>
                                        <p className="text-gray-700 leading-relaxed italic">Creating awareness about our bodies—ITGNC, Trans, and Intersex bodies—using art as a tool for political dialogue and body acceptance. First launched in August 2024 in partnership with visual artist queer_hemut, featuring art exhibitions, film screenings, and performances.</p>
                                    </div>
                                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 h-80">
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl rotate-[-2deg]">
                                            <Image src="/queer artwork/omar-lille Design inspiration.webp" alt="Art of Every-Body" fill className="object-cover" />
                                        </div>
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl rotate-[2deg] translate-y-4">
                                            <Image src="/queer-gallery-events/WIN03024.jpg" alt="Art Exhibition" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Empowerment Projects - Redesigned to match light theme */}
                            <section className="relative group">
                                {/* Fun Shadow Background - Matching the rest of the page */}
                                <div className="absolute -top-4 -bottom-4 left-6 -right-6 bg-gradient-to-br from-[#FF6B35]/20 to-[#7B2CBF]/20 rounded-[2.5rem] rotate-[1deg] transition-transform group-hover:rotate-[2deg] -z-10"></div>

                                <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-orange-50 relative overflow-hidden">
                                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                                        {/* Content Column */}
                                        <div className="space-y-8">
                                            <div>
                                                <div className="inline-block px-4 py-1 bg-[#FF6B35] text-white font-bold rounded-full text-sm mb-4">
                                                    ECONOMIC JUSTICE
                                                </div>
                                                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
                                                    Empowerment <span className="text-[#FF6B35]">Projects</span>
                                                </h2>
                                                <div className="inline-block px-6 py-2 border-2 border-[#FF6B35] text-[#FF6B35] font-bold rounded-full text-sm animate-pulse mb-6">
                                                    COMING SOON
                                                </div>
                                                <p className="text-xl text-gray-700 leading-relaxed">
                                                    We are building sustainable futures through creative skill-sharing and professional development for our community.
                                                </p>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="flex gap-4 items-start bg-orange-50/50 p-6 rounded-2xl border border-orange-100/50 hover:bg-orange-50 transition-colors group/skill">
                                                    <div className="text-3xl filter drop-shadow-sm group-hover/skill:scale-110 transition-transform">👜</div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Leather Craft Training</h3>
                                                        <p className="text-gray-600">Equipping our community with practical skills in leatherwork and entrepreneurship to foster independence.</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4 items-start bg-purple-50/50 p-6 rounded-2xl border border-purple-100/50 hover:bg-purple-50 transition-colors group/skill">
                                                    <div className="text-3xl filter drop-shadow-sm group-hover/skill:scale-110 transition-transform">🎧</div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">DJ & Podcast Training</h3>
                                                        <p className="text-gray-600">Professional training in music production and storytelling via the Q We Rise Podcast Studio.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Highlight Image Column - Styled as a "Sticker" */}
                                        <div className="relative flex justify-center lg:justify-end">
                                            <div className="relative w-full max-w-sm group/image">
                                                {/* Decorative element behind the photo */}
                                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFD700]/20 rounded-full blur-2xl animate-pulse"></div>

                                                {/* The "Sticker/Polaroid" container */}
                                                <div className="relative p-3 bg-white shadow-2xl rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0 border-8 border-white">
                                                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                                                        <Image
                                                            src="/queer artwork/queer ladder.webp"
                                                            alt="Queer Ladder - Empowerment"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    {/* Handwritten style caption if we had a font, otherwise just a nice border */}
                                                    <div className="pt-6 pb-2 text-center">
                                                        <span className="font-script text-2xl text-[#7B2CBF]">Rise Together</span>
                                                    </div>
                                                </div>

                                                {/* Extra decorative artwork overlapping */}
                                                <div className="absolute -bottom-8 -right-8 w-32 h-32 rotate-[-12deg] drop-shadow-xl transition-transform group-hover:rotate-0">
                                                    <Image src="/queer artwork/quuer and queen.webp" alt="artwork" width={150} height={150} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
