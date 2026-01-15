
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { Target, Eye, Sparkles, Palette, Handshake, Layers, Shield, Unlock, Camera, Mail, Phone, Instagram } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FFF5F1] overflow-x-hidden">
            <Header />

            <main className="relative pt-24 pb-20">

                {/* Floating Background Elements - Balanced Distribution */}
                <div className="absolute top-20 -left-10 w-64 md:w-96 opacity-90 rotate-12 pointer-events-none z-0 mix-blend-multiply">
                    <Image src="/queer artwork/ribbon swirl.webp" alt="decoration" width={400} height={400} className="drop-shadow-2xl" />
                </div>

                {/* Moved this one down to balance */}
                <div className="absolute top-[800px] -right-20 w-72 md:w-[25rem] opacity-60 -rotate-12 pointer-events-none z-0">
                    <Image src="/queer artwork/lgbtqia.webp" alt="decoration" width={500} height={500} className="drop-shadow-2xl" />
                </div>

                {/* Real Photo scattered - Polaroid 1 */}
                <div className="absolute top-[500px] -left-12 w-64 p-4 bg-white shadow-2xl rotate-6 hidden xl:block z-10 transform hover:scale-110 hover:rotate-3 transition-all duration-300 border-2 border-gray-100">
                    <div className="relative h-64 w-full bg-gray-100">
                        <Image src="/queers-got-talent/DSC_0023.jpg" alt="Event photo" fill className="object-cover filter contrast-110" />
                    </div>
                    <p className="font-script text-center mt-2 text-gray-500 text-lg rotate-[-2deg]">Joy!</p>
                </div>

                {/* Real Photo scattered - Polaroid 2 */}
                <div className="absolute top-[250px] -right-12 w-72 p-4 bg-white shadow-2xl -rotate-3 hidden xl:block z-10 transform hover:scale-110 hover:-rotate-1 transition-all duration-300 border-2 border-gray-100">
                    <div className="relative h-72 w-full bg-gray-100">
                        <Image src="/queers-got-talent/5H0A0008.jpg" alt="Event photo" fill className="object-cover filter contrast-110" />
                    </div>
                    <p className="font-script text-center mt-2 text-gray-500 text-lg rotate-[1deg]">Community</p>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Header Section */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute -top-16 -left-20 w-32 h-32 hidden md:block rotate-[-15deg]">
                            <Image src="/queer artwork/let me be perfectly queer.webp" alt="sticker" width={150} height={150} className="drop-shadow-lg scale-125" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A2E] mb-6">
                            Who <span className="font-script text-[#7B2CBF]">We Are</span>
                        </h1>

                        <div className="absolute -bottom-10 -right-20 w-40 h-40 hidden md:block rotate-[20deg] animate-pulse-slow">
                            <Image src="/queer artwork/queer all year.webp" alt="sticker" width={180} height={180} className="drop-shadow-lg" />
                        </div>
                    </div>

                    {/* About Content */}
                    <section className="relative group mb-24">
                        <div className="absolute -left-4 -top-4 w-full h-full bg-[#E0AAFF]/30 rounded-3xl rotate-[-1deg] transition-transform group-hover:rotate-[-2deg] -z-10"></div>

                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-purple-100 flex flex-col md:flex-row gap-10 items-start relative">
                            {/* Replaced sex.webp with drag pose.webp as a fallback/alternative graphic for this spot, or just removed if simpler. User said "remove teh sex image". I'll remove it entirely/replace with something else. */}
                            {/* Adding a different sticker here for balance if needed, or leaving empty. */}
                            <div className="absolute -right-8 -top-8 w-32 rotate-[15deg] z-20 hidden md:block">
                                <Image src="/queer artwork/quuer and queen.webp" alt="sticker" width={120} height={120} className="drop-shadow-md" />
                            </div>

                            <div className="w-full">
                                <div className="inline-block px-4 py-1 bg-[#E0AAFF] text-[#1A1A2E] font-bold rounded-full text-sm mb-4">
                                    OUR STORY
                                </div>
                                <h2 className="text-4xl font-bold mb-6 text-[#1A1A2E]">About <span className="text-[#7B2CBF]">Us</span></h2>

                                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Q We Rise Network is a Feminist, Kenyan-based organization founded in 2023 by young Intersex, Transgender, Non-Binary, and Lesbian, Bisexual, & Queer (ITGNC & LBQ) individuals who have experienced the deep harms of structural violence, discriminatory laws, and social exclusion.
                                    </p>
                                    <p className="border-l-4 border-[#7B2CBF] pl-6 italic text-gray-600 bg-purple-50/50 py-2 rounded-r-lg">
                                        Grounded in principles of bodily autonomy, collective liberation, and healing justice, our aim is to advance gender equity, mental wellness, and access to comprehensive sexual and reproductive health and rights (SRHR).
                                    </p>
                                    <p>
                                        We center communal care as a radical act of resistance and resilience using art, music, film, and sports as culturally rooted tools for expression, healing, and civic education.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission & Vision Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-24 relative">
                        <div className="relative group">
                            <div className="absolute -left-4 -top-4 w-full h-full bg-[#FF6B35]/20 rounded-3xl rotate-[2deg] transition-transform group-hover:rotate-[3deg] -z-10"></div>
                            <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-[#FF6B35] h-full hover:-translate-y-2 transition-transform duration-300">
                                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <Target className="w-8 h-8 text-[#FF6B35]" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-[#1A1A2E]">Mission</h3>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    To empower ITGNC and LBQ individuals through <strong>Rights-Based Advocacy</strong>, inclusive <strong>SRHR Education</strong>, <strong>Economic Justice</strong>, and <strong>Creative Expression</strong> that centers healing and communal care.
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -right-4 -bottom-4 w-full h-full bg-[#7B2CBF]/20 rounded-3xl rotate-[-2deg] transition-transform group-hover:rotate-[-3deg] -z-10"></div>
                            <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-[#7B2CBF] h-full hover:-translate-y-2 transition-transform duration-300">
                                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <Eye className="w-8 h-8 text-[#7B2CBF]" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-[#1A1A2E]">Vision</h3>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    To create a world where ITGNC and LBQ individuals are valued, respected, and empowered to live in their full, authentic selves free from oppression and held in communities rooted in care, dignity and justice.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Core Values - Removed Scaling Animation */}
                    <section className="mb-24 relative">
                        <div className="absolute -left-24 bottom-20 w-48 rotate-[-15deg] hidden xl:block z-0">
                            <Image src="/queer artwork/they them.webp" alt="sticker" width={200} height={200} className="drop-shadow-xl" />
                        </div>

                        <h2 className="text-5xl font-bold text-center mb-16 text-[#1A1A2E]">
                            Core <span className="font-script text-[#00B4A6]">Values</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                            {[
                                { icon: <Sparkles className="w-8 h-8" />, title: 'Radical joy', desc: 'Embracing joy as defiance and healing.', color: 'purple' },
                                { icon: <Palette className="w-8 h-8" />, title: 'Creativity', desc: 'Art and storytelling as tools for change.', color: 'orange' },
                                { icon: <Handshake className="w-8 h-8" />, title: 'Accountability', desc: 'Commitment to transparency and ethics.', color: 'teal' },
                                { icon: <Layers className="w-8 h-8" />, title: 'Intersectionality', desc: 'Centering those most impacted by systems of power.', color: 'purple' },
                                { icon: <Shield className="w-8 h-8" />, title: 'Bodily autonomy', desc: 'Rights to body, identity, and life free from violence.', color: 'orange' },
                                { icon: <Unlock className="w-8 h-8" />, title: 'Liberation', desc: 'None of us are free until all of us are free.', color: 'teal' }
                            ].map((item, i) => (
                                // Removed group-hover:scale-105
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col gap-4 group cursor-default">
                                    <div className={`text-4xl bg-${item.color}-50 p-4 rounded-2xl w-fit group-hover:rotate-12 transition-transform text-${item.color === 'teal' ? '[#00B4A6]' : item.color === 'purple' ? '[#7B2CBF]' : '[#FF6B35]'}`}>{item.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#1A1A2E] mb-2">{item.title}</h4>
                                        <p className="text-gray-600 leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Impact */}
                    <section className="relative group">
                        <div className="absolute -right-4 -top-4 w-full h-full bg-gradient-to-bl from-[#00B4A6]/20 to-[#7B2CBF]/20 rounded-3xl rotate-[1deg] transition-transform group-hover:rotate-[2deg] -z-10"></div>

                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-teal-100 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-[#00B4A6]/5 rounded-br-full"></div>

                            <div className="relative z-10 w-full">
                                <div className="inline-block px-4 py-1 bg-[#00B4A6] text-white font-bold rounded-full text-sm mb-6">
                                    IMPACT
                                </div>
                                <h2 className="text-4xl font-bold text-[#1A1A2E] mb-6">Approaches & Impact</h2>
                                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Over the past two years, Q We Rise Network has made transformative strides, reaching over <strong>300 individuals</strong> directly. Our community centered approaches have facilitated safe space dialogues and creative expression events tailored for ITGNC and LBQ youth.
                                    </p>
                                    <p>
                                        Impactful partnerships with organizations like <strong className="text-[#FF6B35]">HIVOS</strong> and <strong className="text-[#7B2CBF]">Feminists in Kenya</strong> marks a bold step in reimagining the fight against femicide through a non-binary feminist lens.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <a href="https://www.instagram.com/q_we_rise_network" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3 bg-[#1A1A2E] text-white font-bold rounded-xl hover:bg-[#333] transition-colors shadow-lg">
                                        <Camera className="w-6 h-6" /> Follow the Impact on Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Get Involved - Redesigned to Light Theme */}
                    <div className="mt-24 text-center pb-8">
                        <div className="relative group max-w-4xl mx-auto">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF6B35] via-[#7B2CBF] to-[#00B4A6] rounded-[3rem] opacity-20 blur-xl"></div>

                            <div className="bg-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-gray-100">

                                <div className="relative z-10">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A2E]">Get <span className="font-script text-[#00B4A6]">Involved</span></h2>
                                    <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
                                        Whether you want to collaborate, volunteer, or just say hi — we'd love to hear from you.
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-6 text-left">
                                        <a href="mailto: Info@qwerise.org" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-2xl transition-all hover:-translate-y-1 border border-gray-200 flex flex-col items-center text-center gap-3 group">
                                            <div className="group-hover:scale-110 transition-transform">
                                                <Mail className="w-8 h-8 text-[#7B2CBF]" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Us</span>
                                            <span className="font-semibold text-[#7B2CBF] break-all"> Info@qwerise.org</span>
                                        </a>
                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col items-center text-center gap-3">
                                            <Phone className="w-8 h-8 text-[#1A1A2E]" />
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call Us</span>
                                            <span className="font-semibold text-[#1A1A2E]">+254 727 776 506</span>
                                        </div>
                                        <a href="https://instagram.com/q_we_rise_network" target="_blank" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-2xl transition-all hover:-translate-y-1 border border-gray-200 flex flex-col items-center text-center gap-3 group">
                                            <div className="group-hover:scale-110 transition-transform">
                                                <Instagram className="w-8 h-8 text-[#E0AAFF]" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Socials</span>
                                            <span className="font-semibold text-[#E0AAFF]">@QWeRiseNetwork</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
