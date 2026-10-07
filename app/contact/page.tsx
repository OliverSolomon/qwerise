
import Image from "next/image";
import { Mail, Phone, Instagram, Heart } from "lucide-react";
import NewsletterSection from "../components/NewsletterSection";
import RichText from "../components/RichText";
import { getDoc } from "@/sanity/lib/content";

export default async function ContactPage() {
    const [page, contact, social, general] = await Promise.all([getDoc("contactPage"), getDoc("contactSettings"), getDoc("socialSettings"), getDoc("generalSettings")]);
    return (
        <div className="min-h-screen bg-[#FFF5F1] overflow-x-hidden">

            <main className="relative pt-24 pb-20">

                {/* Background Art */}
                <div className="hidden md:block absolute top-32 -left-12 w-64 opacity-80 rotate-12 pointer-events-none mix-blend-multiply z-0">
                    <Image src="/queer artwork/ribbon swirl.webp" alt="decoration" width={400} height={400} className="drop-shadow-xl" />
                </div>
                <div className="hidden md:block absolute top-20 -right-12 w-80 opacity-60 -rotate-6 pointer-events-none z-0">
                    <Image src="/queer artwork/lgbtqia.webp" alt="decoration" width={500} height={500} className="drop-shadow-xl" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Header */}
                    <div className="text-center mb-20 relative">
                        <div className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-32 w-20 md:w-28 -rotate-12 animate-bounce-slow">
                            <Image src="/queer artwork/phone.webp" alt="sticker" width={120} height={120} className="drop-shadow-lg" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A2E]">
                            {page.header.title} <span className="font-script text-[#FF6B35]">{page.header.titleHighlight}</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
                            {page.header.intro}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 mb-20 relative z-10">
                        {/* Email Card */}
                        <div className="relative group">
                            <div className="absolute -left-3 -top-3 w-full h-full bg-[#7B2CBF]/20 rounded-2xl md:rounded-3xl rotate-[-2deg] transition-transform group-hover:rotate-[-3deg] -z-10"></div>
                            <a href={`mailto:${contact.email}`} className="bg-white p-10 rounded-2xl md:rounded-3xl shadow-xl border-t-8 border-[#7B2CBF] hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center h-full">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <Mail className="w-10 h-10 text-[#7B2CBF]" />
                                </div>
                                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">{page.emailCard.title}</h2>
                                <p className="text-gray-600 mb-4">{page.emailCard.body}</p>
                                <span className="text-[#7B2CBF] font-bold text-lg break-all">{contact.email}</span>
                            </a>
                        </div>

                        {/* Phone Card */}
                        <div className="relative group">
                            <div className="absolute -right-3 -top-3 w-full h-full bg-[#FF6B35]/20 rounded-2xl md:rounded-3xl rotate-[2deg] transition-transform group-hover:rotate-[3deg] -z-10"></div>
                            <div className="bg-white p-10 rounded-2xl md:rounded-3xl shadow-xl border-t-8 border-[#FF6B35] hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center h-full">
                                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform">
                                    <Phone className="w-10 h-10 text-[#FF6B35]" />
                                </div>
                                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">{page.phoneCard.title}</h2>
                                <p className="text-gray-600 mb-4">{contact.phoneHours}</p>
                                <span className="text-[#FF6B35] font-bold text-lg">{contact.phone}</span>
                            </div>
                        </div>

                        {/* Socials Card */}
                        <div className="relative group">
                            <div className="absolute -left-3 -bottom-3 w-full h-full bg-[#00B4A6]/20 rounded-2xl md:rounded-3xl rotate-1 transition-transform group-hover:rotate-2 -z-10"></div>
                            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="bg-white p-10 rounded-2xl md:rounded-3xl shadow-xl border-t-8 border-[#00B4A6] hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center h-full">
                                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Instagram className="w-10 h-10 text-[#00B4A6]" />
                                </div>
                                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">{page.socialCard.title}</h2>
                                <p className="text-gray-600 mb-4">{page.socialCard.body}</p>
                                <span className="text-[#00B4A6] font-bold text-lg">{page.socialCard.linkLabel}</span>
                            </a>
                        </div>
                    </div>


                    {/* Newsletter Section */}
                    <div className="mb-24">
                        <NewsletterSection {...general.newsletter} />
                    </div>

                    {/* Location / Message */}
                    <div className="bg-white p-6 md:p-12 rounded-2xl md:rounded-[3rem] shadow-xl border-2 border-gray-100 relative overflow-hidden text-center">
                        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-[#E0AAFF]/20 rounded-full blur-3xl"></div>
                        <div className="absolute -right-10 -top-10 w-48 h-48 bg-[#FF6B35]/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-6">{page.visit.title}</h2>
                            <RichText value={page.visit.body} className="text-xl text-gray-700 leading-relaxed" strongClassName="text-[#7B2CBF]" />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
