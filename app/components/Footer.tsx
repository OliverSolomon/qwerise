// Footer component with organization details and legal information
// Provides essential information and maintains professional appearance

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Q We Rise Network</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A feminist, Kenyan-based organization advancing gender equity, mental wellness, 
              and sexual and reproductive health rights for ITGNC and LBQ communities.
            </p>
            <p className="text-gray-400 text-xs">
              Founded in 2023 • Nairobi, Kenya
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/q_we_rise_network?igsh=MXVtZjhucHVxdTZ1bA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <a 
                  href="mailto:info@qwerise.org"
                  className="hover:text-white transition-colors"
                >
                  info@qwerise.org
                </a>
              </p>
              <p>
                <a 
                  href="tel:+2547 14254097"
                  className="hover:text-white transition-colors"
                >
                  +254 727 776 506
                </a>
              </p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Q We Rise Network. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Website under development. For immediate assistance, please contact us directly.
          </p>
        </div>
      </div>
    </footer>
  );
}
