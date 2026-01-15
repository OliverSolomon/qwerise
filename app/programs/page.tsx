
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-[#FFF5F1] overflow-x-hidden">
            <Header />

            <main className="relative pt-24 pb-20">

                {/* Decorative Background Elements */}
                {/* Decorative Background Elements - Bold */}
                <div className="hidden md:block absolute top-32 -left-12 w-64 opacity-80 rotate-12 pointer-events-none mix-blend-multiply z-0">
                    <Image src="/queer artwork/ribbon swirl.webp" alt="decoration" width={400} height={400} className="drop-shadow-xl" />
                </div>
                <div className="hidden md:block absolute top-20 -right-12 w-80 opacity-60 -rotate-6 pointer-events-none z-0">
                    <Image src="/queer artwork/lgbtqia.webp" alt="decoration" width={500} height={500} className="drop-shadow-xl" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Header */}
                    <div className="text-center mb-20 relative">
                        <div className="absolute -top-6 right-10 md:right-32 w-20 md:w-28 rotate-12 animate-bounce-slow">
                            <Image src="/queer artwork/proud being me.webp" alt="sticker" width={120} height={120} className="drop-shadow-lg" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A2E]">
                            Our <span className="font-script text-[#FF6B35]">Programs</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
                            Empowering our community through advocacy, education, economic justice, and storytelling.
                        </p>
                    </div>

                    <div className="space-y-24">

                        {/* Advocacy */}
                        <section className="relative group">
                            <div className="absolute -left-4 -top-4 w-full h-full bg-[#E0AAFF]/30 rounded-2xl md:rounded-3xl rotate-[-2deg] transition-transform group-hover:rotate-[-3deg] -z-10"></div>

                            <div className="bg-white p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-xl border border-purple-100 flex flex-col lg:flex-row gap-10 items-center">
                                <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-inner rotate-1">
                                    <Image src="/queer artwork/drag pose.webp" alt="Advocacy" fill className="object-cover" />

                                    {/* Polaroid overlay style */}
                                    <div className="absolute bottom-4 right-4 bg-white p-2 pb-8 shadow-lg rotate-[-5deg] w-32 hidden sm:block">
                                        <div className="relative h-24 w-full bg-gray-200 overflow-hidden">
                                            <Image src="/queers-got-talent/5H0A0008.jpg" alt="Real photo" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="inline-block px-4 py-1 bg-[#E0AAFF] text-[#1A1A2E] font-bold rounded-full text-sm">
                                        ADVOCACY & AWARENESS
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
                                        Amplifying Voices, <span className="text-[#7B2CBF]">Demanding Change</span>
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Q We Rise Network is committed to advancing the rights, visibility, and dignity of ITGNC and LBQ individuals through intersectional advocacy and inclusive community programs. We work in solidarity with civil society, grassroots movements, and key stakeholders to ensure our voices are centered in decision-making spaces.
                                    </p>
                                    <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-[#7B2CBF]">
                                        <h3 className="font-bold text-[#1A1A2E] mb-2">📢 Intersex Sports Program</h3>
                                        <p className="text-gray-600">
                                            A community-informed initiative that uses sports to challenge stigma, promote inclusion, and empower intersex individuals, particularly in Nairobi’s informal settlements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Economic Empowerment */}
                        <section className="relative group">
                            <div className="absolute -right-4 -top-4 w-full h-full bg-[#00B4A6]/20 rounded-3xl rotate-[2deg] transition-transform group-hover:rotate-[3deg] -z-10"></div>

                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-teal-100 flex flex-col lg:flex-row-reverse gap-10 items-center">
                                <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-inner rotate-[-1deg]">
                                    <Image src="/queer artwork/omar-lille Design inspiration.webp" alt="Economic Empowerment" fill className="object-cover" />

                                    {/* Polaroid overlay */}
                                    <div className="absolute top-4 left-4 bg-white p-2 pb-8 shadow-lg rotate-[8deg] w-32 hidden sm:block">
                                        <div className="relative h-24 w-full bg-gray-200 overflow-hidden">
                                            <Image src="/queers-got-talent/5H0A0192.jpg" alt="Real photo" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="inline-block px-4 py-1 bg-[#00B4A6] text-white font-bold rounded-full text-sm">
                                        ECONOMIC JUSTICE
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
                                        Building Skills, <span className="text-[#00B4A6]">Creating Futures</span>
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We are committed to the economic empowerment of ITGNC and LBQ individuals through creative, skills-based programs that build financial independence and nurture talent.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex gap-4 items-start">
                                            <div className="bg-[#00B4A6]/20 p-2 rounded-lg text-xl">👜</div>
                                            <div>
                                                <h3 className="font-bold text-[#1A1A2E]">Leather Craft Training</h3>
                                                <p className="text-gray-600 text-sm">Equipping women, girls, intersex, transgender, and non-binary persons with practical skills in leatherwork.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="bg-[#00B4A6]/20 p-2 rounded-lg text-xl">🎧</div>
                                            <div>
                                                <h3 className="font-bold text-[#1A1A2E]">DJ Training Program</h3>
                                                <p className="text-gray-600 text-sm">Opening doors for ITGNC and LBQ youth in the music and entertainment industry via the Q We Rise Podcast Studio.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SRHR */}
                        <section className="relative group">
                            <div className="absolute -left-4 -bottom-4 w-full h-full bg-[#FF6B35]/20 rounded-2xl md:rounded-3xl rotate-[1deg] transition-transform group-hover:rotate-0 -z-10"></div>

                            <div className="bg-white p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-xl border border-orange-100 flex flex-col lg:flex-row gap-10 items-center">
                                <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-inner rotate-1">
                                    <Image src="/queer artwork/queer portrait.webp" alt="SRHR" fill className="object-cover" />
                                </div>

                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="inline-block px-4 py-1 bg-[#FF6B35] text-white font-bold rounded-full text-sm">
                                        HEALTH & RIGHTS
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
                                        Bodily Autonomy & <span className="text-[#FF6B35]">Care</span>
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Focusing on dismantling systemic barriers to essential healthcare. Our community and human rights-centered approach strengthens personal agency.
                                    </p>
                                    <ul className="grid gap-3">
                                        {['Community education on SRHR', 'Safe space dialogues', 'Referral pathways to affirming services'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg">
                                                <span className="text-[#FF6B35] font-bold">✓</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Storytelling - Light Theme */}
                        <section className="relative group">
                            <div className="absolute -right-4 -bottom-4 w-full h-full bg-gradient-to-br from-[#7B2CBF]/20 to-[#FF6B35]/20 rounded-2xl md:rounded-3xl rotate-[-2deg] transition-transform group-hover:rotate-[-1deg] -z-10"></div>

                            <div className="bg-white p-8 md:p-16 rounded-2xl md:rounded-[2.5rem] shadow-xl border-2 border-purple-50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2CBF]/5 rounded-bl-full"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B35]/5 rounded-tr-full"></div>

                                <div className="relative z-10 text-center mb-12">
                                    <div className="inline-block px-4 py-1 bg-[#7B2CBF] text-white font-bold rounded-full text-sm mb-4">
                                        CULTURE & ART
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-6">
                                        Storytelling & <span className="font-script text-[#7B2CBF]">Documenting</span>
                                    </h2>
                                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                                        Using art and narrative to reclaim our history, celebrate our present, and envision our future.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-[#7B2CBF] hover:-translate-y-2 transition-transform group/card">
                                        <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3 group-hover/card:text-[#7B2CBF] transition-colors">Queers Got Talent</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            An annual program offering a safe, affirming space for expression, aiming to grow beyond Kenya into broader African and global platforms.
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-[#FF6B35] hover:-translate-y-2 transition-transform group/card">
                                        <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3 group-hover/card:text-[#FF6B35] transition-colors">The Art of EveryBody</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            A celebration of queer identity and body diversity through art exhibitions, film screenings, and performances.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
