
import Accordion from "../components/Accordion";
import Image from "next/image";
import { BookOpen, Ambulance } from "lucide-react";
import { getDoc } from "@/sanity/lib/content";

export default async function ResourcesPage() {
    const [page, contact] = await Promise.all([getDoc("resourcesPage"), getDoc("contactSettings")]);
    const { header, educational, emergency, faq } = page;
    const faqs = (faq.items ?? []).map((i: { question: string; answer: string }) => ({ question: i.question, answer: i.answer }));
    return (
        <div className="min-h-screen bg-[#FFF5F1] overflow-x-hidden">

            <main className="relative pt-24 pb-20">

                {/* Decorative Background Elements */}
                <div className="hidden md:block absolute top-32 -left-12 w-64 opacity-80 rotate-12 pointer-events-none mix-blend-multiply z-0">
                    <Image src="/queer artwork/ribbon swirl.webp" alt="decoration" width={400} height={400} className="drop-shadow-xl" />
                </div>
                <div className="hidden md:block absolute top-20 -right-12 w-80 opacity-60 -rotate-6 pointer-events-none z-0">
                    <Image src="/queer artwork/lgbtqia.webp" alt="decoration" width={500} height={500} className="drop-shadow-xl" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="text-center mb-20 relative">
                        <div className="absolute -top-6 right-10 md:right-32 w-20 md:w-28 rotate-12 animate-bounce-slow">
                            <Image src="/queer artwork/proud being me.webp" alt="sticker" width={120} height={120} className="drop-shadow-lg" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A2E]">
                            {header.title} <span className="font-script text-[#7B2CBF]">{header.titleHighlight}</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
                            {header.intro}
                        </p>
                    </div>

                    {/* Resources Cards */}
                    <div className="grid md:grid-cols-2 gap-12 mb-24">
                        {/* Educational Materials */}
                        <div className="relative group">
                            <div className="absolute -left-4 -top-4 w-full h-full bg-[#FF6B35]/20 rounded-2xl md:rounded-3xl rotate-[-2deg] transition-transform group-hover:rotate-[-3deg] -z-10"></div>

                            <div className="bg-white p-10 rounded-2xl md:rounded-3xl shadow-xl border border-orange-100 flex flex-col h-full items-start relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-bl-full"></div>

                                <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm relative z-10">
                                    <BookOpen className="w-10 h-10 text-[#FF6B35]" />
                                </div>

                                <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4 relative z-10">{educational.title}</h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-1 relative z-10">
                                    {educational.body}
                                </p>
                                <button className="inline-block px-6 py-3 bg-gray-100 text-gray-400 font-bold rounded-xl cursor-not-allowed relative z-10">{educational.buttonLabel}</button>
                            </div>
                        </div>

                        {/* Emergency Support */}
                        <div className="relative group">
                            <div className="absolute -right-4 -top-4 w-full h-full bg-[#00B4A6]/20 rounded-2xl md:rounded-3xl rotate-[2deg] transition-transform group-hover:rotate-[3deg] -z-10"></div>

                            <div className="bg-white p-10 rounded-2xl md:rounded-3xl shadow-xl border border-teal-100 flex flex-col h-full items-start relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-[#00B4A6]/10 rounded-br-full"></div>

                                <div className="bg-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm relative z-10">
                                    <Ambulance className="w-10 h-10 text-[#00B4A6]" />
                                </div>

                                <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4 relative z-10">{emergency.title}</h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-1 relative z-10">
                                    {emergency.body}
                                </p>
                                <a href={`mailto:${contact.email}`} className="inline-block px-6 py-3 bg-[#00B4A6] text-white font-bold rounded-xl hover:bg-[#009688] transition-colors shadow-md relative z-10">{emergency.buttonLabel}</a>
                            </div>
                        </div>
                    </div>

                    {/* FAQs Section - Styled like Storytelling Section */}
                    <section className="relative group">
                        <div className="absolute -right-4 -bottom-4 w-full h-full bg-gradient-to-br from-[#7B2CBF]/20 to-[#FF6B35]/20 rounded-2xl md:rounded-3xl rotate-[-1deg] transition-transform group-hover:rotate-0 -z-10"></div>

                        <div className="bg-white p-8 md:p-16 rounded-2xl md:rounded-[2.5rem] shadow-xl border-2 border-purple-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2CBF]/5 rounded-bl-full"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B35]/5 rounded-tr-full"></div>

                            <div className="relative z-10 max-w-4xl mx-auto">
                                <div className="text-center mb-12">
                                    <div className="inline-block px-4 py-1 bg-[#7B2CBF] text-white font-bold rounded-full text-sm mb-4">
                                        {faq.badge}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-6">
                                        {faq.title} <span className="font-script text-[#7B2CBF]">{faq.titleHighlight}</span>
                                    </h2>
                                </div>

                                <Accordion items={faqs} />

                                <div className="text-center mt-12 bg-purple-50 p-8 rounded-2xl border border-purple-100">
                                    <h3 className="text-xl font-bold text-[#7B2CBF] mb-2">{faq.stillTitle}</h3>
                                    <p className="text-gray-600 mb-6">{faq.stillBody}</p>
                                    <a href="/contact" className="inline-block px-8 py-3 bg-[#1A1A2E] text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
                                        {faq.stillButton}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main >
        </div >
    );
}
