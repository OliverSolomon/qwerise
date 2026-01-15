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
      {/* Single orange navigation bar */}
      <div className="bg-[#FF6B35] text-white shadow-md">
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
                <span className="text-sm font-bold uppercase leading-tight group-hover:text-white/90">Q We</span>
                <span className="text-lg font-bold uppercase leading-tight group-hover:text-white/90">Rise Network</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-colors hover:text-[#1A1A2E] ${isActive(link.href) ? 'text-[#1A1A2E]' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#1A1A2E] text-white font-bold rounded-lg hover:bg-[#2A2A3E] transition-all transform hover:scale-105 shadow-md text-sm border-2 border-transparent hover:border-[#7B2CBF] ml-4"
              >
                Donate
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
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
          <div className="md:hidden bg-[#FF6B35] border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${isActive(link.href) ? 'bg-[#1A1A2E] text-white' : 'text-white hover:bg-white/10 hover:text-white'}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center mt-4 px-5 py-3 bg-[#1A1A2E] text-white font-bold rounded-lg hover:bg-[#2A2A3E] transition-all shadow-md text-base"
                onClick={closeMenu}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
