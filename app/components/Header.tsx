// Header component with logo and navigation
// Provides accessible navigation and branding

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Single orange navigation bar */}
      <div className="bg-[#FF6B35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo on the left */}
            <div className="flex items-center space-x-3">
              <Image
                src="/Q We Rise Transparent logo.png"
                alt="Q We Rise Network Logo - A feminist organization advancing rights for ITGNC and LBQ communities"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
                priority
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase leading-tight">Q We</span>
                <span className="text-lg font-bold uppercase leading-tight">Rise Network</span>
              </div>
            </div>

            {/* Search and action buttons on the right */}
            <div className="flex items-center space-x-4">

              {/* Action buttons */}
              <a href="#about" className="hover:text-white/80 transition-colors flex items-center gap-1 text-sm font-medium">
                About Us
              </a>
              <a href="#contact" className="hover:text-white/80 transition-colors flex items-center gap-1 text-sm font-medium">
                Get involved
              </a>
              <a href="#contact" className="hover:text-white/80 transition-colors flex items-center gap-1 text-sm font-medium">
                Resources
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-[#1A1A2E] text-white font-semibold rounded-lg hover:bg-[#2A2A3E] transition-colors text-sm"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
