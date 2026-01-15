// Contact section with contact information and email signup
// Provides ways for visitors to connect with the organization

import { HandCoins, Handshake, Megaphone, Briefcase, Twitter, X, Facebook, FacebookIcon, InstagramIcon, XIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#7B2CBF] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join Q We Rise Network&apos;s mission for all ITGNC & LBQ lives.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Fundraise */}
          <div className="bg-white text-[#1A1A2E] p-6 rounded-2xl md:rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <HandCoins size={36} />
              <h3 className="text-xl font-bold ml-4 mb-3">Be a fundraiser.</h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Start your own fundraiser and invite friends, family, and social channels to raise money
              and awareness in support of our cause.
            </p>
            <a
              href="mailto:info@qwerise.org"
              className="inline-block px-4 py-2 bg-[#7B2CBF] text-white font-bold rounded hover:bg-[#6A1BB0] transition-colors text-sm"
            >
              Fundraise Now
            </a>
          </div>

          {/* Advocate */}
          <div className="bg-white text-[#1A1A2E] p-6 rounded-2xl md:rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center mb-4">
                <Megaphone size={36} />
              </div>
              <h3 className="text-xl font-bold ml-2 mb-3">Advocate for change.</h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              We&apos;re dedicated to advocating for ITGNC and LBQ young people. Join us and learn how you can help.
            </p>
            <a
              href="#about"
              className="inline-block px-4 py-2 bg-[#7B2CBF] text-white font-bold rounded hover:bg-[#6A1BB0] transition-colors text-sm"
            >
              Learn More
            </a>
          </div>

          {/* Volunteer */}
          <div className="bg-white text-[#1A1A2E] p-6 rounded-2xl md:rounded-lg shadow-lg">

            <div className="flex items-center justify-center mb-4">
              <Handshake size={36} />

              <h3 className="text-xl font-bold ml-2 mb-3">Volunteer your time.</h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Our volunteer support team is on the front lines of our mission. We rely on our volunteers
              to help us provide essential support.
            </p>
            <a
              href="mailto:info@qwerise.org"
              className="inline-block px-4 py-2 bg-[#7B2CBF] text-white font-bold rounded hover:bg-[#6A1BB0] transition-colors text-sm"
            >
              Volunteer Now
            </a>
          </div>

          {/* Work */}
          <div className="bg-white text-[#1A1A2E] p-6 rounded-2xl md:rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Briefcase size={36} />

              <h3 className="text-xl font-bold ml-2 mb-3">Work at Q We Rise Network.</h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              We are always looking for smart, passionate, and diverse people to join our team.
              Learn more about open roles and apply today!
            </p>
            <a
              href="mailto:info@qwerise.org"
              className="inline-block px-4 py-2 bg-[#7B2CBF] text-white font-bold rounded hover:bg-[#6A1BB0] transition-colors text-sm"
            >
              See Jobs
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white text-[#1A1A2E] p-8 rounded-2xl md:rounded-lg shadow-lg max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4"><MailIcon size={24} /></div>
              <p className="text-sm text-gray-600 mb-2">Email</p>
              <a
                href="mailto:info@qwerise.org"
                className="text-[#7B2CBF] hover:text-[#6A1BB0] font-medium"
              >
                info@qwerise.org
              </a>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4"><PhoneIcon size={24} /></div>
              <p className="text-sm text-gray-600 mb-2">Phone</p>
              <a
                href="tel:+254727776506"
                className="text-[#7B2CBF] hover:text-[#6A1BB0] font-medium"
              >
                +254 714 254 097
              </a>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4"><MapPinIcon size={24} /></div>
              <p className="text-sm text-gray-600 mb-2">Location</p>
              <p className="text-[#7B2CBF] font-medium">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white text-[#1A1A2E] p-8 rounded-2xl md:rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Join Our Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-4" aria-label="Email signup form">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-2xl md:rounded-lg focus:ring-2 focus:ring-[#7B2CBF] focus:border-[#7B2CBF] text-[#1A1A2E]"
              placeholder="Email Address"
              aria-describedby="email-privacy"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#7B2CBF] hover:bg-[#6A1BB0] text-white font-bold rounded-2xl md:rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p id="email-privacy" className="text-xs text-gray-600 mt-3 text-center">
            We respect your privacy. Your email will only be used to send updates about our work and events.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6">Follow Our Journey</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/q_we_rise_network?igsh=MXVtZjhucHVxdTZ1bA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E0AAFF] transition-colors text-2xl"
              aria-label="Follow us on Instagram (opens in new tab)"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon size={24} />
            </a>
            <a
              href="https://www.facebook.com/QWeRiseNetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E0AAFF] transition-colors text-2xl"
              aria-label="Follow us on Facebook (opens in new tab)"
            >
              <span className="sr-only">Facebook</span>
              <FacebookIcon size={24} />
            </a>
            <a
              href="https://twitter.com/QWeRiseNetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E0AAFF] transition-colors text-2xl"
              aria-label="Follow us on Twitter (opens in new tab)"
            >
              <span className="sr-only">Twitter</span>
              <XIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
