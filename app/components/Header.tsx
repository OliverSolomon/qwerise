"use client";

// Header component with logo and navigation
// Provides accessible navigation and branding

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Resources", href: "/resources" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Light navigation bar matching reference design */}
      <div className="bg-gradient-to-r from-[#faf8f5] to-[#f5f3f0] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo on the left */}
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <Image
                src="/Q We Rise Transparent logo.png"
                alt="Q We Rise Network Logo - A feminist organization advancing rights for ITGNC and LBQ communities"
                width={50}
                height={50}
                className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
                priority
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase leading-tight text-[#1A1A2E] group-hover:text-[#FF6B35]">Q We</span>
                <span className="text-lg font-bold uppercase leading-tight text-[#1A1A2E] group-hover:text-[#FF6B35]">Rise Network</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-[#FF6B35] ${isActive(link.href) ? 'text-[#FF6B35]' : 'text-[#1A3A5C]'}`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                className="px-6 py-2.5 bg-[#FF6B35] text-white font-bold rounded-full hover:bg-[#E85A2A] transition-all transform hover:scale-105 shadow-md text-sm flex items-center gap-2 ml-4"
              >
                Donate
                <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-[#1A3A5C] hover:bg-[#1A3A5C]/10 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-[#faf8f5] to-[#f5f3f0] border-t border-[#1A3A5C]/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${isActive(link.href) ? 'bg-[#FF6B35] text-white' : 'text-[#1A3A5C] hover:bg-[#1A3A5C]/10'}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-3 bg-[#FF6B35] text-white font-bold rounded-full hover:bg-[#E85A2A] transition-all shadow-md text-base"
                onClick={closeMenu}
              >
                Donate
                <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
