"use client";

import { Mail, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(`Subscription successful! We've received your request.`);
                setEmail("");
            } else {
                toast.error(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("Failed to connect. Please check your internet connection.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#FFF5F1] py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <section id="newsletter" className="relative group">
                    <div className="absolute -left-4 -top-4 w-full h-full bg-gradient-to-tr from-[#7B2CBF]/20 to-[#FF6B35]/20 rounded-3xl rotate-[-1deg] transition-transform group-hover:rotate-[-2deg] -z-10"></div>

                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-purple-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2CBF]/5 rounded-bl-full"></div>

                        <div className="relative z-10 w-full text-center max-w-3xl mx-auto">
                            <div className="inline-block px-4 py-1 bg-[#7B2CBF] text-white font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
                                Newsletter
                            </div>
                            <h2 className="text-4xl font-bold text-[#1A1A2E] mb-6">Stay <span className="text-[#FF6B35]">Connected</span></h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                                Join our community newsletter to receive updates on our programs, upcoming events, and stories of impact.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-[#1A1A2E] outline-none focus:ring-2 focus:ring-[#7B2CBF] focus:border-transparent transition-all"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="px-8 py-4 bg-[#1A1A2E] text-white font-bold rounded-xl hover:bg-[#333] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        "Subscribe"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
