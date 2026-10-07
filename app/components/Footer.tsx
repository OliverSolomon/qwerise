// Footer component with organization details and legal information
// Content comes from Sanity (General, Contact and Social settings)

import { FacebookIcon, InstagramIcon, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Doc } from "@/sanity/lib/content";

export default function Footer({ general, contact, social }: { general: Doc; contact: Doc; social: Doc }) {
  const currentYear = new Date().getFullYear();
  const quickLinks: { label: string; href: string }[] = general.navLinks ?? [];

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
            <p className="text-gray-400 text-sm leading-relaxed">{general.footerBlurb}</p>
            <div className="flex space-x-4 pt-4">
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#FF6B35] transition-colors" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
              )}
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#1877F2] transition-colors" aria-label="Facebook">
                  <FacebookIcon size={20} />
                </a>
              )}
              {social.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#1DA1F2] transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#0077b5] transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#E0AAFF]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-[#FF6B35] text-xs">{String(i + 1).padStart(2, "0")}</span> {link.label}
                  </Link>
                </li>
              ))}
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
                  <a href={`mailto:${contact.email}`} className="text-white hover:text-[#00B4A6] transition-colors break-all">{contact.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#00B4A6] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</span>
                  <a href={`tel:${contact.phoneLink}`} className="text-white hover:text-[#00B4A6] transition-colors">{contact.phone}</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / Get Involved */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#FF6B35]">{general.getInvolvedTitle}</h3>
            <p className="text-gray-400 text-sm mb-6">{general.getInvolvedText}</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-[#FF6B35] hover:bg-[#e05a2b] text-white font-bold rounded-lg transition-colors w-full text-center">
              {general.getInvolvedButton}
            </Link>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {currentYear} {general.siteName}. All rights reserved.
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
