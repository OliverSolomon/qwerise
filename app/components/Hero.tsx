// Hero section with main message and call-to-action
// Features the organization's mission with Programs-style card

"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#FFF5F1] min-h-[600px] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#1A3A5C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] mb-6 leading-tight">
              You deserve a{" "}
              <span className="font-script text-4xl sm:text-5xl lg:text-6xl block mt-2 text-[#1A1A2E]">
                welcoming, loving world.
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#4A5568] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Empowering ITGNC and LBQ individuals through rights-based advocacy, inclusive SRHR education, economic justice, and creative expression that centers healing and communal care.
            </p>

            {/* CTA Button - Blue pill shape with arrow */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A3A5C] text-white font-bold rounded-full hover:bg-[#0F2A42] transition-all transform hover:scale-105 shadow-lg text-base"
            >
              Get in touch
              <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right side - Image with fun purple-maroon shadow background */}
          <div className="relative group flex justify-center lg:justify-end">
            {/* Skewed animated purple-maroon shadow background - overflows to the right */}
            <div className="absolute -top-2 -bottom-2 left-4 -right-4 bg-gradient-to-br from-[#C9A0DC] to-[#D4A5A5] rounded-2xl md:rounded-3xl rotate-[3deg] transition-transform group-hover:rotate-[5deg] shadow-lg"></div>

            {/* Image container - same size as background, sits on top */}
            <div className="relative w-full max-w-xl h-96 sm:h-[28rem] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/queers-got-talent/trophy.bmp"
                alt="Queers Got Talent Trophy - Celebrating LGBTQ+ talent and creativity"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
