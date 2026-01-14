// About section with organization details
// Provides context about the NGO's work and values

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-0">
      {/* "Be the One" section with light gray background - Two column layout */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Floating images */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Photo Frame 1 - Top right (tilted slightly) */}
              <div className="absolute top-4 right-4 w-56 h-72 bg-white rounded-lg p-2 shadow-2xl transform rotate-[6deg] z-30">
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
              <div className="absolute bottom-12 right-12 w-56 h-72 bg-white rounded-lg p-2 shadow-2xl transform rotate-[-5deg] z-20">
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
              <div className="absolute bottom-0 left-0 w-56 h-72 bg-white rounded-lg p-2 shadow-2xl transform rotate-[8deg] z-10 overflow-hidden">
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
                We are a feminist, Kenyan-based organization founded in 2023 by young Intersex, Transgender, Non-Binary, 
                and Lesbian, Bisexual, & Queer (ITGNC & LBQ) individuals. Grounded in principles of bodily autonomy, 
                collective liberation, and healing justice, we advance gender equity, mental wellness, and access to 
                comprehensive sexual and reproductive health and rights (SRHR) for ITGNC and LBQ communities.
              </p>

              {/* Call to action button */}
              <div>
                <a
                  href="mailto:info@qwerise.org"
                  className="inline-block px-8 py-4 bg-[#00B4A6] hover:bg-[#009688] text-white font-bold rounded-lg transition-colors text-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "Q We Rise Network is here for you" section */}
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
                        <span className="text-2xl">🌙</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-[#7B2CBF] rounded-full flex items-center justify-center">
                        <span className="text-2xl">☀️</span>
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
                Contact us anytime you need support. If you are having a difficult day, or feeling alone, 
                we&apos;re here to listen and help.
              </p>
              <a
                href="mailto:info@qwerise.org"
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
            Learn and explore with Q We Rise Network&apos;s resource center.
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Search our topics, learn more, and find answers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#about"
              className="px-6 py-3 bg-white text-[#7B2CBF] font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore All Topics
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[#7B2CBF] font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Find Local Resources
            </a>
            <a
              href="#about"
              className="px-6 py-3 bg-white text-[#7B2CBF] font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Community Glossary
            </a>
          </div>
          <a
            href="#about"
            className="inline-block px-8 py-4 bg-white text-[#7B2CBF] font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            See More Topics
          </a>
        </div>
      </div>

      {/* Our Focus Areas */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-12 text-center">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#7B2CBF] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#7B2CBF] mb-4">SRHR Education</h3>
              <p className="text-gray-700">
                Comprehensive sexual and reproductive health and rights education tailored for ITGNC and LBQ communities.
              </p>
            </div>
            <div className="bg-white border-2 border-[#7B2CBF] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#7B2CBF] mb-4">Advocacy & Awareness</h3>
              <p className="text-gray-700">
                Fighting for policy change and raising awareness about the rights and needs of ITGNC and LBQ individuals.
              </p>
            </div>
            <div className="bg-white border-2 border-[#7B2CBF] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#7B2CBF] mb-4">Economic Justice</h3>
              <p className="text-gray-700">
                Creating economic opportunities and addressing financial barriers faced by our communities.
              </p>
            </div>
            <div className="bg-white border-2 border-[#7B2CBF] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#7B2CBF] mb-4">Storytelling</h3>
              <p className="text-gray-700">
                Amplifying voices and sharing stories that celebrate the diversity and resilience of our communities.
              </p>
            </div>
            <div className="bg-white border-2 border-[#7B2CBF] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#7B2CBF] mb-4">Holistic Wellbeing</h3>
              <p className="text-gray-700">
                Supporting mental wellness and overall health through culturally-rooted healing practices.
              </p>
            </div>
            <div className="bg-white border-2 border-[#7B2CBF] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#7B2CBF] mb-4">Creative Expression</h3>
              <p className="text-gray-700">
                Using art, music, film, and sports as tools for expression, healing, and civic education.
              </p>
            </div>
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
