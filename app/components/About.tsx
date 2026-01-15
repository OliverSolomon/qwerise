// About section with organization details
// Provides context about the NGO's work and values

import Image from "next/image";
import QueersGotTalentVideo from "./QueersGotTalentVideo";
import NewsletterSection from "./NewsletterSection";
import { Stethoscope, Megaphone, Coins, BookOpen, Heart, Palette, Moon, Sun } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-0">
      {/* "Be the One" section with light gray background - Two column layout */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Floating images */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Photo Frame 1 - Top right (tilted slightly) */}
              <div className="absolute top-0 right-0 sm:top-4 sm:right-4 w-40 h-52 sm:w-56 sm:h-72 bg-white rounded-lg p-2 shadow-2xl transform rotate-[6deg] z-30">
                <div className="w-full h-full rounded-md overflow-hidden">
                  <Image
                    src="/queer artwork/queer portrait.webp"
                    alt="Portrait from queer artwork"
                    width={224}
                    height={288}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Photo Frame 2 - Bottom right (tilted, overlapping) */}
              <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-40 h-52 sm:w-56 sm:h-72 bg-white rounded-lg p-2 shadow-2xl transform rotate-[-5deg] z-20">
                <div className="w-full h-full rounded-md overflow-hidden">
                  <Image
                    src="/queer artwork/proud being me.webp"
                    alt="Portrait from queer artwork"
                    width={224}
                    height={288}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Photo Frame 3 - Bottom left (partially visible, tilted) */}
              <div className="absolute bottom-0 left-0 w-40 h-52 sm:w-56 sm:h-72 bg-white rounded-lg p-2 shadow-2xl transform rotate-[8deg] z-10 overflow-hidden">
                <div className="w-full h-full rounded-md overflow-hidden">
                  <Image
                    src="/queer artwork/lgbtqueer.webp"
                    alt="Portrait from queer artwork"
                    width={224}
                    height={288}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right column - Text content */}
            <div>
              {/* Main heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A2E] mb-6 leading-tight">
                <span className="font-bold">Q We Rise Network</span>
                <br />
                <span className="font-normal">here for you</span>
                <br />
                <span className="font-script text-5xl sm:text-6xl lg:text-7xl italic">About Us</span>
              </h2>

              {/* Supporting text */}
              <p className="text-lg text-gray-800 mb-10 leading-relaxed">
                We are a Feminist, Kenyan-based organization founded in 2023 by young Intersex, Transgender, Non-Binary,
                and Lesbian, Bisexual, & Queer (ITGNC & LBQ) individuals who have experienced the deep harms of structural violence. Grounded in principles of bodily autonomy,
                collective liberation, and healing justice, our aim is to advance gender equity, mental wellness, and access to
                comprehensive sexual and reproductive health and rights (SRHR) for ITGNC and LBQ communities.
              </p>

              {/* Call to action button */}
              <div>
                <a
                  href="/about"
                  className="inline-block px-8 py-4 bg-[#00B4A6] hover:bg-[#009688] text-white font-bold rounded-lg transition-colors text-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">
            Q We Rise Network is here for you, <span className="font-script text-5xl sm:text-6xl">day or night</span>.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a feminist, Kenyan-based organization founded in 2023 by young Intersex, Transgender, Non-Binary,
            and Lesbian, Bisexual, & Queer (ITGNC & LBQ) individuals. Grounded in principles of bodily autonomy,
            collective liberation, and healing justice, we advance gender equity, mental wellness, and access to
            comprehensive sexual and reproductive health and rights (SRHR) for ITGNC and LBQ communities.
          </p>
        </div>
      </div> */}

      <QueersGotTalentVideo />


      {/* "Reach out" section with illustration */}
      <div className="bg-[#E0AAFF] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center justify-center">
              {/* Illustration placeholder */}
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
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">
                Reach out to our team.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you would like to experience the events and the activities follow the link to our Social media Page, at the moment Our website is down but we are working on it to be active soon.
                Contact us anytime you need support. If you are having a difficult day, or feeling alone,
                we&apos;re here to listen and help.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-[#7B2CBF] hover:bg-[#6A1BB0] text-white font-bold rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resource center section */}
      <div className="bg-[#7B2CBF] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Explore our <span className="font-script">Resource Center</span>
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Search our topics, learn more, and find answers.
          </p>

          <a
            href="/resources"
            className="inline-block px-10 py-4 bg-white text-[#7B2CBF] font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg text-lg"
          >
            Visit Resource Page
          </a>
        </div>
      </div>

      {/* Our Focus Areas */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-12 text-center">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'SRHR Education', icon: <Stethoscope className="w-10 h-10" />, color: '#FF6B35', desc: 'Providing community education on SRHR and bodily autonomy.' },
              { title: 'Advocacy & Awareness', icon: <Megaphone className="w-10 h-10" />, color: '#7B2CBF', desc: 'Advancing rights, visibility, and dignity through intersectional advocacy.' },
              { title: 'Economic Justice', icon: <Coins className="w-10 h-10" />, color: '#00B4A6', desc: 'Building financial independence and nurturing talent through skills-based programs.' },
              { title: 'Storytelling', icon: <BookOpen className="w-10 h-10" />, color: '#E0AAFF', desc: 'Using art and narrative to reclaim our history, celebrate our present, and envision our future.' },
              { title: 'Holistic Wellbeing', icon: <Heart className="w-10 h-10" />, color: '#FF9F1C', desc: 'Creating safe spaces for mental, emotional, spiritual, and physical wellbeing.' },
              { title: 'Creative Expression', icon: <Palette className="w-10 h-10" />, color: '#2EC4B6', desc: 'Using art, music, film, and sports as tools for expression, healing, and civic education.' }
            ].map((item, index) => (
              <div key={index} className="relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white p-8 rounded-2xl md:rounded-[2rem] shadow-lg border border-gray-100 h-full flex flex-col items-start relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
                  <div className="mb-4 p-3 bg-gray-50 rounded-2xl shadow-sm relative z-10" style={{ color: item.color }}>{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 relative z-10" style={{ color: item.color }}>{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/programs" className="inline-block px-10 py-4 bg-[#FF6B35] text-white font-bold rounded-full hover:bg-[#e05a2b] transition-all hover:scale-105 shadow-lg text-lg">
              View All Programs
            </a>
          </div>
        </div>
      </div>

      {/* Vision and Approach */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E0AAFF] p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a world where ITGNC and LBQ individuals are valued, respected, and
                empowered to live in their full, authentic selves free from oppression and held
                in communities rooted in care, dignity and justice.
              </p>
            </div>

            <div className="bg-[#FF6B35] p-8 rounded-lg text-white">
              <h3 className="text-3xl font-bold mb-4">
                Our Approach
              </h3>
              <p className="text-lg leading-relaxed">
                We center communal care as a radical act of resistance and resilience using art,
                music, film, and sports as culturally rooted tools for expression, healing, and civic education.
                Our work is anchored in intersectional feminist values.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <NewsletterSection />
    </section>
  );
}
