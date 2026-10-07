// Home page sections below the hero. All text and images come from the Sanity "Home page" document.

import Image from "next/image";
import type { Doc } from "@/sanity/lib/content";
import { imgAlt, imgUrl } from "@/sanity/lib/image";
import QueersGotTalentVideo from "./QueersGotTalentVideo";
import NewsletterSection from "./NewsletterSection";
import { Moon, Sun } from "lucide-react";
import { brand, getIcon } from "./icons";

export default function About({ home, videoUrl, newsletter }: { home: Doc; videoUrl: string; newsletter: Doc }) {
  const { about, qgt, reachOut, resourceCenter, focus, vision, approach } = home;

  return (
    <section id="about" className="py-0">
      {/* "Be the One" section with light gray background - Two column layout */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Extra large landscape focus */}
            <div className="flex flex-row gap-2 sm:gap-4 items-center justify-center lg:justify-start w-full">
              <div className="basis-[80%] sm:basis-4/5 max-w-[650px] aspect-[3/2] bg-white rounded-lg p-2 sm:p-5 shadow-2xl z-20">
                <div className="w-full h-full rounded-md overflow-hidden relative">
                  <Image
                    src={imgUrl(about.imageMain)}
                    alt={imgAlt(about.imageMain)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 55vw"
                  />
                </div>
              </div>

              <div className="basis-[20%] sm:basis-1/5 max-w-[140px] aspect-[1/2] bg-white rounded-lg p-1 sm:p-1.5 shadow-xl z-10">
                <div className="w-full h-full rounded-md overflow-hidden relative">
                  <Image
                    src={imgUrl(about.imageAccent)}
                    alt={imgAlt(about.imageAccent)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 10vw"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right column - Text content */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A2E] mb-6 leading-tight">
                <span className="font-bold">{about.line1}</span>
                <br />
                <span className="font-normal">{about.line2}</span>
                <br />
                <span className="font-script text-5xl sm:text-6xl lg:text-7xl italic text-[#EC4899]">{about.script}</span>
              </h2>

              <p className="text-lg text-gray-800 mb-10 leading-relaxed">{about.body}</p>

              <div>
                <a
                  href="/about"
                  className="inline-block px-8 py-4 bg-[#00B4A6] hover:bg-[#009688] text-white font-bold rounded-lg transition-colors text-lg"
                >
                  {about.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QueersGotTalentVideo data={qgt} videoUrl={videoUrl} />

      {/* "Reach out" section with illustration */}
      <div className="bg-[#E0AAFF] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white rounded-lg p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center">
                        <Moon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-[#7B2CBF] rounded-full flex items-center justify-center">
                        <Sun className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">{reachOut.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{reachOut.body}</p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-[#7B2CBF] hover:bg-[#6A1BB0] text-white font-bold rounded-lg transition-colors"
              >
                {reachOut.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resource center section */}
      <div className="bg-[#7B2CBF] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {resourceCenter.title} <span className="font-script">{resourceCenter.titleScript}</span>
          </h2>
          <p className="text-xl mb-10 text-white/90">{resourceCenter.subtitle}</p>
          <a
            href="/resources"
            className="inline-block px-10 py-4 bg-white text-[#7B2CBF] font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg text-lg"
          >
            {resourceCenter.buttonLabel}
          </a>
        </div>
      </div>

      {/* Our Focus Areas */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-12 text-center">{focus.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {(focus.items ?? []).map((item: Doc) => {
              const Icon = getIcon(item.icon);
              const color = brand(item.color);
              return (
                <div key={item._key} className="relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-white p-8 rounded-2xl md:rounded-[2rem] shadow-lg border border-gray-100 h-full flex flex-col items-start relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
                    <div className="mb-4 p-3 bg-gray-50 rounded-2xl shadow-sm relative z-10" style={{ color }}><Icon className="w-10 h-10" /></div>
                    <h3 className="text-xl font-bold mb-3 relative z-10" style={{ color }}>{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm relative z-10">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a href="/programs" className="inline-block px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-full hover:bg-[#e05a2b] transition-all hover:scale-105 shadow-lg text-lg">
              {focus.buttonLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Vision and Approach */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E0AAFF] p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-[#1A1A2E] mb-4">{vision.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{vision.body}</p>
            </div>

            <div className="bg-[#FF6B35] p-8 rounded-lg text-white">
              <h3 className="text-3xl font-bold mb-4">{approach.title}</h3>
              <p className="text-lg leading-relaxed">{approach.body}</p>
            </div>
          </div>
        </div>
      </div>
      <NewsletterSection {...newsletter as { badge: string; title: string; titleHighlight: string; body: string }} />
    </section>
  );
}
