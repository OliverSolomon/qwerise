
import Accordion from "../components/Accordion";
import Image from "next/image";
import { BookOpen, Ambulance, Mail } from "lucide-react";

const faqs = [
    {
        question: "How can I join Q We Rise Network?",
        answer: "We welcome individuals from the ITGNC and LBQ communities to join our network. You can reach out to us via email at  Info@qwerise.org or follow our social media pages for calls for membership and volunteer opportunities."
    },
    {
        question: "Where arc your offices located?",
        answer: "We are based in Nairobi, Kenya. For security and privacy reasons, we share our physical address only with confirmed visitors and community members. Please contact us to schedule a visit."
    },
    {
        question: "How can I support your work?",
        answer: "You can support us through donations, volunteering your skills, or partnering with us on our programs. Every contribution helps us advance our mission of collective liberation and healing justice."
    },
    {
        question: "Do you offer mental health support?",
        answer: "Yes, holistic wellbeing is one of our core focus areas. We organize peer-led support circles, healing justice sessions, and can provide referrals to affirming mental health professionals."
    },
    {
        question: "What is 'Queers Got Talent'?",
        answer: "Queers Got Talent is our annual flagship event that offers a safe, affirming stage for queer artists to showcase their talents in music, dance, poetry, and more. It celebrates our joy and resilience."
    }
];

export default function ResourcesPage() {
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
                            Resources & <span className="font-script text-[#7B2CBF]">FAQs</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
                            Find answers, learn more about our work, and access support.
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

                                <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4 relative z-10">Educational Materials</h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-1 relative z-10">
                                    Access our curated guides on SRHR, legal rights, and digital security for LGBTQ+ individuals in Kenya. Knowledge is power.
                                </p>
                                <button className="inline-block px-6 py-3 bg-gray-100 text-gray-400 font-bold rounded-xl cursor-not-allowed relative z-10">Coming Soon</button>
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

                                <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4 relative z-10">Emergency Support</h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-1 relative z-10">
                                    Need urgent help? We can connect you with legal aid partners and emergency shelters. You are not alone.
                                </p>
                                <a href="mailto: Info@qwerise.org" className="inline-block px-6 py-3 bg-[#00B4A6] text-white font-bold rounded-xl hover:bg-[#009688] transition-colors shadow-md relative z-10">Contact Support</a>
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
                                        SUPPORT
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-6">
                                        Frequently Asked <span className="font-script text-[#7B2CBF]">Questions</span>
                                    </h2>
                                </div>

                                <Accordion items={faqs} />

                                <div className="text-center mt-12 bg-purple-50 p-8 rounded-2xl border border-purple-100">
                                    <h3 className="text-xl font-bold text-[#7B2CBF] mb-2">Still have questions?</h3>
                                    <p className="text-gray-600 mb-6">We're here to help. Reach out to us directly.</p>
                                    <a href="/contact" className="inline-block px-8 py-3 bg-[#1A1A2E] text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
                                        Contact Us
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
