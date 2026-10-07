// Hero section with main message and call-to-action
// Features the organization's mission with Programs-style card

import Image from "next/image";
import type { Doc } from "@/sanity/lib/content";
import { imgAlt, imgUrl } from "@/sanity/lib/image";

export default function Hero({ data }: { data: Doc }) {
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
              {data.title}{" "}
              <span className="font-medium tracking-tight text-3xl sm:text-4xl lg:text-5xl block mt-3 text-[#EC4899]">
                {data.subtitle}
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#4A5568] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {data.intro}
            </p>

            {/* CTA Button - Blue pill shape with arrow */}
            <a
              href={data.buttonLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A3A5C] text-white font-bold rounded-full hover:bg-[#0F2A42] transition-all transform hover:scale-105 shadow-lg text-base"
            >
              {data.buttonLabel}
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
                src={imgUrl(data.image)}
                alt={imgAlt(data.image)}
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
