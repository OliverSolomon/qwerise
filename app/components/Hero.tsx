// Hero section with main message and call-to-action
// Features the organization's mission and development status

import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/Q We Rise Transparent logo.png"
              alt="Q We Rise Network Logo - A feminist organization advancing rights for ITGNC and LBQ communities"
              width={120}
              height={120}
              className="mx-auto w-24 h-24 sm:w-32 sm:h-32 object-contain"
              priority
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Q We Rise Network
          </h1>

          {/* Development status badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
            Website Under Development
          </div>

          {/* Mission statement */}
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering ITGNC and LBQ individuals through rights-based advocacy, 
            inclusive SRHR education, economic justice, and creative expression 
            that centers healing and communal care.
          </p>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@qwerise.org"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
              aria-label="Contact us via email"
            >
              Get in Touch
            </a>
            <a
              href="https://www.instagram.com/q_we_rise_network?igsh=MXVtZjhucHVxdTZ1bA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
              aria-label="Follow us on Instagram (opens in new tab)"
            >
              Follow Our Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
