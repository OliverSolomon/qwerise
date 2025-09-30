// Header component with logo and navigation
// Provides accessible navigation and branding

import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-purple-200 dark:border-purple-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/Q We Rise Transparent logo.png"
              alt="Q We Rise Network Logo - A feminist organization advancing rights for ITGNC and LBQ communities"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
              priority
            />
            <div>
              <h1 className="text-lg font-bold text-purple-900 dark:text-purple-100">
                Q We Rise Network
              </h1>
              <p className="text-xs text-purple-600 dark:text-purple-300 hidden sm:block">
                Feminist • Kenyan • ITGNC & LBQ Rights
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6" aria-label="Main navigation">
            <a 
              href="#about" 
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 transition-colors"
            >
              Contact
            </a>
            <a 
              href="https://www.instagram.com/q_we_rise_network?igsh=MXVtZjhucHVxdTZ1bA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 transition-colors"
              aria-label="Follow us on Instagram (opens in new tab)"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
