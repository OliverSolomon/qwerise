import Image from "next/image";
import Link from "next/link";
import { fileUrl, getDoc } from "@/sanity/lib/content";
import { imgAlt, imgUrl } from "@/sanity/lib/image";
import ScrollVideo from "../../components/ScrollVideo";
import RichText from "../../components/RichText";

export default async function ProgramsPage() {
    const p = await getDoc("programsPage");
    const { hero, qgt, intersex, awarenessDay, srhr, empowerment, wellbeing, art, economic } = p;
    const videoUrl = await fileUrl(qgt.video);
    const [day1, day2, day3] = awarenessDay.images ?? [];

    return (
        <div className="min-h-screen bg-[#FFF5F1] overflow-x-hidden">

            {/* Hero Section - Similar to Homepage */}
            <section className="relative bg-[#FFF5F1] min-h-[500px] overflow-hidden pt-24">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#1A3A5C]/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-block px-4 py-1 bg-[#7B2CBF] text-white font-bold rounded-full text-sm mb-4">
                                {hero.badge}
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] mb-6 leading-tight">
                                {hero.title}{" "}
                                <span className="font-script text-4xl sm:text-5xl lg:text-6xl block mt-2 text-[#EC4899]">
                                    {hero.titleScript}
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg text-[#4A5568] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">{hero.intro}</p>
                        </div>

                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-xl group">
                                <div className="absolute -top-4 -bottom-4 left-6 -right-6 bg-gradient-to-br from-[#EC4899]/20 to-[#FF6B35]/20 rounded-3xl rotate-[2deg] transition-transform group-hover:rotate-[3deg] -z-10"></div>

                                <div className="relative aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                                    <Image
                                        src={imgUrl(hero.image)}
                                        alt={imgAlt(hero.image)}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-105 duration-500"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="relative pb-20 font-inter">

                <div className="hidden md:block absolute top-32 -left-12 w-64 opacity-80 rotate-12 pointer-events-none mix-blend-multiply z-0">
                    <Image src="/queer artwork/proud being me.webp" alt="decoration" width={400} height={400} className="drop-shadow-xl" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="space-y-32">

                        {/* Queers Got Talent */}
                        <section className="relative group">
                            <div className="absolute -top-4 -bottom-4 left-6 -right-6 bg-gradient-to-br from-[#7B2CBF]/20 to-[#FF6B35]/20 rounded-3xl rotate-[2deg] transition-transform group-hover:rotate-[3deg] -z-10"></div>

                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-purple-50 overflow-hidden">
                                <div className="grid lg:grid-cols-12 gap-12 items-center">
                                    <div className="lg:col-span-12 relative order-first lg:order-none mb-4">
                                        {videoUrl && (
                                            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video group/video">
                                                <ScrollVideo
                                                    src={videoUrl}
                                                    className="w-full h-full object-cover"
                                                    poster={imgUrl(qgt.poster, 1200) || undefined}
                                                />
                                                <div className="absolute inset-0 bg-transparent pointer-events-none border-[12px] border-white/5 rounded-3xl"></div>
                                            </div>
                                        )}
                                        <div className="absolute -bottom-8 -right-8 w-40 h-40 hidden md:block rotate-12 transition-transform group-hover:rotate-[15deg] z-20">
                                            <div className="relative w-full h-full p-2 bg-white shadow-2xl rounded-2xl transform rotate-3">
                                                <Image src={imgUrl(qgt.poster, 600)} alt={imgAlt(qgt.poster, "Queers Got Talent Trophy")} fill className="object-cover rounded-xl" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-12 space-y-6 text-center max-w-4xl mx-auto mt-8">
                                        <div className="inline-block px-4 py-1 bg-[#7B2CBF] text-white font-bold rounded-full text-sm mb-2">
                                            {qgt.badge}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E]">
                                            {qgt.title} <span className="text-[#EC4899]">{qgt.titleHighlight}</span>
                                        </h2>
                                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-left max-w-3xl mx-auto">
                                            <RichText value={qgt.body} />
                                        </div>
                                    </div>

                                    <div className="lg:col-span-12 text-center">
                                        <Link
                                            href={qgt.buttonLink || "#"}
                                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#7B2CBF] text-white font-bold rounded-full hover:bg-[#6B1FAF] transition-all transform hover:scale-105 shadow-lg text-base"
                                        >
                                            {qgt.buttonLabel}
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
                                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-6">{intersex.title} <span className="text-[#00B4A6]">{intersex.titleHighlight}</span></h2>
                                <div className="text-lg text-gray-700 max-w-3xl mx-auto space-y-4">
                                    <RichText value={intersex.body} />
                                </div>
                            </div>

                            {/* Awareness Day */}
                            <section className="relative group">
                                <div className="absolute inset-0 bg-[#FFD700]/10 rounded-3xl rotate-[-2deg] -z-10 group-hover:rotate-[-3deg] transition-transform"></div>
                                <div className="bg-white p-8 rounded-3xl shadow-lg border border-yellow-50 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                                        {day1 && (
                                            <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                                                <Image src={imgUrl(day1, 800)} alt={imgAlt(day1, "Awareness Day")} fill className="object-cover" />
                                            </div>
                                        )}
                                        {day2 && (
                                            <div className="relative h-48 rounded-2xl overflow-hidden shadow-md translate-y-6">
                                                <Image src={imgUrl(day2, 800)} alt={imgAlt(day2, "Awareness Day")} fill className="object-cover" />
                                            </div>
                                        )}
                                        {day3 && (
                                            <div className="relative h-48 col-span-2 rounded-2xl overflow-hidden shadow-md -translate-y-2">
                                                <Image src={imgUrl(day3, 1200)} alt={imgAlt(day3, "Awareness Day")} fill className="object-cover" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 space-y-4">
                                        <div className="inline-block px-3 py-1 bg-yellow-400 text-white font-bold rounded-full text-xs uppercase">{awarenessDay.badge}</div>
                                        <h3 className="text-2xl font-bold text-[#1A1A2E]">{awarenessDay.title} <span className="text-yellow-500">{awarenessDay.titleHighlight}</span></h3>
                                        <p className="text-gray-700">{awarenessDay.body}</p>
                                        <p className="text-gray-600 text-sm">{awarenessDay.body2}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Access to Health & Empowerment */}
                            <div className="grid md:grid-cols-2 gap-12">
                                <section className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-[#7B2CBF] relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#7B2CBF]/5 rounded-bl-full"></div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#1A1A2E]">{srhr.title}</h3>
                                    <p className="text-gray-700 mb-6">{srhr.body}</p>
                                    <div className="relative h-48 rounded-2xl overflow-hidden">
                                        <Image src={imgUrl(srhr.image, 1000)} alt={imgAlt(srhr.image, "Health Program")} fill className="object-cover" />
                                    </div>
                                </section>

                                <section className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-[#FF6B35] relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35]/5 rounded-bl-full"></div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#1A1A2E]">{empowerment.title}</h3>
                                    <p className="text-gray-700 mb-6">{empowerment.body}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 italic text-sm text-gray-600">
                                            &quot;{empowerment.quote}&quot;
                                        </div>
                                        <div className="relative rounded-xl overflow-hidden shadow-sm">
                                            <Image src={imgUrl(empowerment.image, 800)} alt={imgAlt(empowerment.image, "Leadership")} fill className="object-cover" />
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Mental Health */}
                            <section className="relative group">
                                <div className="absolute -left-4 -top-4 w-full h-full bg-[#00B4A6]/15 rounded-3xl rotate-[-1deg] -z-10 group-hover:rotate-[-2deg] transition-transform"></div>
                                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-teal-50 flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        <div className="inline-block px-4 py-1 bg-[#00B4A6] text-white font-bold rounded-full text-sm">{wellbeing.badge}</div>
                                        <h3 className="text-3xl font-bold text-[#1A1A2E]">{wellbeing.title} <span className="text-[#00B4A6]">{wellbeing.titleHighlight}</span></h3>
                                        <p className="text-gray-700 leading-relaxed">{wellbeing.body}</p>
                                    </div>
                                    <div className="w-full lg:w-1/2 relative h-80 rounded-3xl overflow-hidden shadow-2xl rotate-2 group-hover:rotate-0 transition-transform">
                                        <Image src={imgUrl(wellbeing.image, 1200)} alt={imgAlt(wellbeing.image, "Mental Health Picnic")} fill className="object-cover" />
                                    </div>
                                </div>
                            </section>

                            {/* The Art of Every-Body */}
                            <section className="relative group">
                                <div className="absolute -right-4 -bottom-4 w-full h-full bg-gradient-to-br from-[#7B2CBF]/15 to-[#FF6B35]/15 rounded-3xl rotate-[1deg] -z-10 group-hover:rotate-[2deg] transition-transform"></div>
                                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-purple-50 flex flex-col lg:flex-row-reverse gap-12 items-center">
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        <div className="inline-block px-4 py-1 bg-[#7B2CBF] text-white font-bold rounded-full text-sm">{art.badge}</div>
                                        <h3 className="text-3xl font-bold text-[#1A1A2E]">{art.title} <span className="text-[#EC4899]">{art.titleHighlight}</span></h3>
                                        <p className="text-gray-700 leading-relaxed italic">{art.body}</p>
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-row gap-4 sm:gap-6 items-center">
                                        <div className="basis-[70%] relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/2] transition-transform hover:scale-[1.02] duration-300">
                                            <Image src={imgUrl(art.image, 1200)} alt={imgAlt(art.image, "Art of Every-Body")} fill className="object-cover" />
                                        </div>
                                        <div className="basis-[30%] relative rounded-2xl overflow-hidden shadow-xl aspect-[2/3] translate-y-6 transition-transform hover:translate-y-2 duration-300">
                                            <Image src={imgUrl(art.image2, 600)} alt={imgAlt(art.image2, "Art Exhibition")} fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Empowerment Projects */}
                            <section className="relative group">
                                <div className="absolute -top-4 -bottom-4 left-6 -right-6 bg-gradient-to-br from-[#FF6B35]/20 to-[#7B2CBF]/20 rounded-[2.5rem] rotate-[1deg] transition-transform group-hover:rotate-[2deg] -z-10"></div>

                                <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-orange-50 relative overflow-hidden">
                                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                                        <div className="space-y-8">
                                            <div>
                                                <div className="inline-block px-4 py-1 bg-[#FF6B35] text-white font-bold rounded-full text-sm mb-4">
                                                    {economic.badge}
                                                </div>
                                                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
                                                    {economic.title} <span className="text-[#FF6B35]">{economic.titleHighlight}</span>
                                                </h2>
                                                {economic.status && (
                                                    <div className="inline-block px-6 py-2 border-2 border-[#FF6B35] text-[#FF6B35] font-bold rounded-full text-sm animate-pulse mb-6">
                                                        {economic.status}
                                                    </div>
                                                )}
                                                <p className="text-xl text-gray-700 leading-relaxed">{economic.intro}</p>
                                            </div>

                                            <div className="space-y-6">
                                                {(economic.skills ?? []).map((skill: { _key: string; emoji: string; title: string; body: string }, i: number) => (
                                                    <div key={skill._key} className={`flex gap-4 items-start p-6 rounded-2xl border transition-colors group/skill ${i % 2 === 0 ? "bg-orange-50/50 border-orange-100/50 hover:bg-orange-50" : "bg-purple-50/50 border-purple-100/50 hover:bg-purple-50"}`}>
                                                        <div className="text-3xl filter drop-shadow-sm group-hover/skill:scale-110 transition-transform">{skill.emoji}</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">{skill.title}</h3>
                                                            <p className="text-gray-600">{skill.body}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="relative flex justify-center lg:justify-end">
                                            <div className="relative w-full max-w-sm group/image">
                                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFD700]/20 rounded-full blur-2xl animate-pulse"></div>

                                                <div className="relative p-3 bg-white shadow-2xl rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0 border-8 border-white">
                                                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                                                        <Image
                                                            src={imgUrl(economic.image, 1000)}
                                                            alt={imgAlt(economic.image, "Empowerment")}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="pt-6 pb-2 text-center">
                                                        <span className="font-script text-2xl text-[#7B2CBF]">{economic.caption}</span>
                                                    </div>
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
        </div>
    );
}
