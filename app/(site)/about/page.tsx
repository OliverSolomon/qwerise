import Image from "next/image";
import { Target, Eye, Camera, Mail, Phone, Instagram } from "lucide-react";
import { getDoc } from "@/sanity/lib/content";
import { imgAlt, imgUrl } from "@/sanity/lib/image";
import RichText from "../../components/RichText";
import { brand, getIcon } from "../../components/icons";

export default async function AboutPage() {
    const [page, contact, social] = await Promise.all([getDoc("aboutPage"), getDoc("contactSettings"), getDoc("socialSettings")]);
    const { header, story, mission, vision, values, impact, getInvolved, polaroids } = page;
    const [polaroid1, polaroid2] = polaroids ?? [];

    return (
        <div className="min-h-screen bg-[#FFF5F1] overflow-x-hidden">

            <main className="relative pt-24 pb-20">

                {/* Floating Background Elements - Balanced Distribution */}
                <div className="absolute top-20 -left-10 w-64 md:w-96 opacity-90 rotate-12 pointer-events-none z-0 mix-blend-multiply">
                    <Image src="/queer artwork/ribbon swirl.webp" alt="decoration" width={400} height={400} className="drop-shadow-2xl" />
                </div>

                <div className="absolute top-[800px] -right-20 w-72 md:w-[25rem] opacity-60 -rotate-12 pointer-events-none z-0">
                    <Image src="/queer artwork/lgbtqia.webp" alt="decoration" width={500} height={500} className="drop-shadow-2xl" />
                </div>

                {/* Real Photo scattered - Polaroid 1 */}
                {polaroid1 && (
                    <div className="absolute top-[500px] -left-12 w-64 p-4 bg-white shadow-2xl rotate-6 hidden xl:block z-10 transform hover:scale-110 hover:rotate-3 transition-all duration-300 border-2 border-gray-100">
                        <div className="relative h-64 w-full bg-gray-100">
                            <Image src={imgUrl(polaroid1.image, 800)} alt={imgAlt(polaroid1.image, "Event photo")} fill className="object-cover filter contrast-110" />
                        </div>
                        <p className="font-script text-center mt-2 text-gray-500 text-lg rotate-[-2deg]">{polaroid1.caption}</p>
                    </div>
                )}

                {/* Real Photo scattered - Polaroid 2 */}
                {polaroid2 && (
                    <div className="absolute top-[250px] -right-12 w-72 p-4 bg-white shadow-2xl -rotate-3 hidden xl:block z-10 transform hover:scale-110 hover:-rotate-1 transition-all duration-300 border-2 border-gray-100">
                        <div className="relative h-72 w-full bg-gray-100">
                            <Image src={imgUrl(polaroid2.image, 800)} alt={imgAlt(polaroid2.image, "Event photo")} fill className="object-cover filter contrast-110" />
                        </div>
                        <p className="font-script text-center mt-2 text-gray-500 text-lg rotate-[1deg]">{polaroid2.caption}</p>
                    </div>
                )}

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Header Section */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute -top-16 -left-20 w-32 h-32 hidden md:block rotate-[-15deg]">
                            <Image src="/queer artwork/let me be perfectly queer.webp" alt="sticker" width={150} height={150} className="drop-shadow-lg scale-125" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A2E] mb-6">
                            {header.title} <span className="font-script text-[#7B2CBF]">{header.titleHighlight}</span>
                        </h1>

                        <div className="absolute -bottom-10 -right-20 w-40 h-40 hidden md:block rotate-[20deg] animate-pulse-slow">
                            <Image src="/queer artwork/queer all year.webp" alt="sticker" width={180} height={180} className="drop-shadow-lg" />
                        </div>
                    </div>

                    {/* About Content */}
                    <section className="relative group mb-24">
                        <div className="absolute -left-4 -top-4 w-full h-full bg-[#E0AAFF]/30 rounded-3xl rotate-[-1deg] transition-transform group-hover:rotate-[-2deg] -z-10"></div>

                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-purple-100 flex flex-col md:flex-row gap-10 items-start relative">
                            <div className="absolute -right-8 -top-8 w-32 rotate-[15deg] z-20 hidden md:block">
                                <Image src="/queer artwork/quuer and queen.webp" alt="sticker" width={120} height={120} className="drop-shadow-md" />
                            </div>

                            <div className="w-full">
                                <div className="inline-block px-4 py-1 bg-[#E0AAFF] text-[#1A1A2E] font-bold rounded-full text-sm mb-4">
                                    {story.badge}
                                </div>
                                <h2 className="text-4xl font-bold mb-6 text-[#1A1A2E]">{story.title} <span className="text-[#7B2CBF]">{story.titleHighlight}</span></h2>

                                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                    <RichText value={story.body} />
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
                                <h3 className="text-3xl font-bold mb-4 text-[#1A1A2E]">{mission.title}</h3>
                                <RichText value={mission.body} className="text-lg leading-relaxed text-gray-700" />
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -right-4 -bottom-4 w-full h-full bg-[#7B2CBF]/20 rounded-3xl rotate-[-2deg] transition-transform group-hover:rotate-[-3deg] -z-10"></div>
                            <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-[#7B2CBF] h-full hover:-translate-y-2 transition-transform duration-300">
                                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <Eye className="w-8 h-8 text-[#7B2CBF]" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-[#1A1A2E]">{vision.title}</h3>
                                <RichText value={vision.body} className="text-lg leading-relaxed text-gray-700" />
                            </div>
                        </div>
                    </div>

                    {/* Core Values */}
                    <section className="mb-24 relative">
                        <div className="absolute -left-24 bottom-20 w-48 rotate-[-15deg] hidden xl:block z-0">
                            <Image src="/queer artwork/they them.webp" alt="sticker" width={200} height={200} className="drop-shadow-xl" />
                        </div>

                        <h2 className="text-5xl font-bold text-center mb-16 text-[#1A1A2E]">
                            {values.title} <span className="font-script text-[#00B4A6]">{values.titleHighlight}</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                            {(values.items ?? []).map((item: { _key: string; icon: string; title: string; body: string; color: string }) => {
                                const Icon = getIcon(item.icon);
                                const color = brand(item.color);
                                return (
                                    <div key={item._key} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col gap-4 group cursor-default">
                                        <div className="text-4xl p-4 rounded-2xl w-fit group-hover:rotate-12 transition-transform" style={{ color, backgroundColor: `${color}12` }}><Icon className="w-8 h-8" /></div>
                                        <div>
                                            <h4 className="text-xl font-bold text-[#1A1A2E] mb-2">{item.title}</h4>
                                            <p className="text-gray-600 leading-snug">{item.body}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Impact */}
                    <section className="relative group">
                        <div className="absolute -right-4 -top-4 w-full h-full bg-gradient-to-bl from-[#00B4A6]/20 to-[#7B2CBF]/20 rounded-3xl rotate-[1deg] transition-transform group-hover:rotate-[2deg] -z-10"></div>

                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-teal-100 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-[#00B4A6]/5 rounded-br-full"></div>

                            <div className="relative z-10 w-full">
                                <div className="inline-block px-4 py-1 bg-[#00B4A6] text-white font-bold rounded-full text-sm mb-6">
                                    {impact.badge}
                                </div>
                                <h2 className="text-4xl font-bold text-[#1A1A2E] mb-6">{impact.title}</h2>
                                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                    <RichText value={impact.body} />
                                </div>
                                <div className="mt-8">
                                    <a href={impact.buttonLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3 bg-[#1A1A2E] text-white font-bold rounded-xl hover:bg-[#333] transition-colors shadow-lg">
                                        <Camera className="w-6 h-6" /> {impact.buttonLabel}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Get Involved */}
                    <div className="mt-24 text-center pb-8">
                        <div className="relative group max-w-4xl mx-auto">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF6B35] via-[#7B2CBF] to-[#00B4A6] rounded-[3rem] opacity-20 blur-xl"></div>

                            <div className="bg-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-gray-100">

                                <div className="relative z-10">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A2E]">{getInvolved.title} <span className="font-script text-[#00B4A6]">{getInvolved.titleHighlight}</span></h2>
                                    <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">{getInvolved.intro}</p>

                                    <div className="grid md:grid-cols-3 gap-6 text-left">
                                        <a href={`mailto:${contact.email}`} className="bg-gray-50 hover:bg-gray-100 p-6 rounded-2xl transition-all hover:-translate-y-1 border border-gray-200 flex flex-col items-center text-center gap-3 group">
                                            <div className="group-hover:scale-110 transition-transform">
                                                <Mail className="w-8 h-8 text-[#7B2CBF]" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Us</span>
                                            <span className="font-semibold text-[#7B2CBF] break-all">{contact.email}</span>
                                        </a>
                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col items-center text-center gap-3">
                                            <Phone className="w-8 h-8 text-[#1A1A2E]" />
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call Us</span>
                                            <span className="font-semibold text-[#1A1A2E]">{contact.phone}</span>
                                        </div>
                                        <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-2xl transition-all hover:-translate-y-1 border border-gray-200 flex flex-col items-center text-center gap-3 group">
                                            <div className="group-hover:scale-110 transition-transform">
                                                <Instagram className="w-8 h-8 text-[#E0AAFF]" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Socials</span>
                                            <span className="font-semibold text-[#E0AAFF]">{social.instagramHandle}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
