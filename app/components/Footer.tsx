// Footer component with organization details and legal information
// Provides essential information and maintains professional appearance

import { FacebookIcon, InstagramIcon, XIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#00B4A6] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Organization Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/Q We Rise Transparent logo.png"
                alt="Q We Rise Network Logo"
                width={50}
                height={50}
                className="w-12 h-12 object-contain filter brightness-0 invert"
              />
              <h3 className="text-xl font-bold">Q WE RISE NETWORK</h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Q We Rise Network is a feminist, Kenyan-based organization advancing gender equity, mental wellness, 
              and sexual and reproductive health rights for ITGNC and LBQ communities.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" className="text-white/90 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:info@qwerise.org" className="text-white/90 hover:text-white transition-colors">
                  Get in Touch
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/90 hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/90 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" className="text-white/90 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/90 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="border-t border-white/20 pt-8 flex justify-between items-center">
          <div className="text-sm text-white/80">
            © 2026 Q We Rise Network. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/q_we_rise_network?igsh=MXVtZjhucHVxdTZ1bA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Follow us on Instagram (opens in new tab)"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon size={24} />
            </a>
            <a
              href="https://www.facebook.com/QWeRiseNetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Follow us on Facebook (opens in new tab)"
            >
              <span className="sr-only">Facebook</span>
              <FacebookIcon size={24} />
            </a>
            <a
              href="https://twitter.com/QWeRiseNetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Follow us on Twitter (opens in new tab)"
            >
              <span className="sr-only">Twitter</span>
              <XIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
