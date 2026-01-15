// Footer component with organization details and legal information
// Provides essential information and maintains professional appearance

import { FacebookIcon, InstagramIcon, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A2E] text-white pt-20 pb-10 border-t-8 border-[#7B2CBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1">
                <Image
                  src="/Q We Rise Transparent logo.png"
                  alt="Q We Rise Network Logo"
                  width={50}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold leading-tight">Q WE RISE <br /><span className="text-[#00B4A6]">NETWORK</span></h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advancing gender equity, mental wellness, and SRHR for ITGNC and LBQ communities in Kenya through a feminist, rights-based approach.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/q_we_rise_network" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#FF6B35] transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.facebook.com/QWeRiseNetwork" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#1877F2] transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="https://twitter.com/QWeRiseNetwork" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#1DA1F2] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0077b5] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#E0AAFF]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FF6B35] text-xs">01</span> Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FF6B35] text-xs">02</span> About Us</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FF6B35] text-xs">03</span> Our Programs</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FF6B35] text-xs">04</span> Gallery</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FF6B35] text-xs">05</span> Resources</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#00B4A6]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#00B4A6] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Email</span>
                  <a href="mailto: Info@qwerise.org" className="text-white hover:text-[#00B4A6] transition-colors break-all"> Info@qwerise.org</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#00B4A6] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</span>
                  <a href="tel:+254727776506" className="text-white hover:text-[#00B4A6] transition-colors">+254 727 776 506</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / Get Involved */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#FF6B35]">Get Involved</h3>
            <p className="text-gray-400 text-sm mb-6">
              Join our network and be part of the change. We welcome volunteers, partners, and allies.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-[#FF6B35] hover:bg-[#e05a2b] text-white font-bold rounded-lg transition-colors w-full text-center">
              Partner With Us
            </Link>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {currentYear} Q We Rise Network. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
