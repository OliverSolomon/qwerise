// Contact section with contact information and email signup
// Provides ways for visitors to connect with the organization

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Stay Connected
          </h2>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
            We're building something powerful. Join our community and be the first to know when we launch.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-300 text-sm">✉</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a 
                      href="mailto:andy@qwerise.org"
                      className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-medium"
                    >
                      andy@qwerise.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-300 text-sm">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <a 
                      href="tel:+254727776506"
                      className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-medium"
                    >
                      +254 727 776 506
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-300 text-sm">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="text-purple-600 dark:text-purple-300 font-medium">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Signup */}
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Stay Updated
              </h3>
              
              <form className="space-y-4" aria-label="Email signup form">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="your.email@example.com"
                    aria-describedby="email-privacy"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
                >
                  Join Our Community
                </button>
                
                <p id="email-privacy" className="text-xs text-gray-600 dark:text-gray-400">
                  We respect your privacy. Your email will only be used to send updates about our work and events.
                </p>
              </form>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Follow Our Journey
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/q_we_rise_network?igsh=MXVtZjhucHVxdTZ1bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 transition-colors"
                aria-label="Follow us on Instagram (opens in new tab)"
              >
                <span className="sr-only">Instagram</span>
                <span className="text-2xl">📷</span>
              </a>
              <a
                href="https://www.facebook.com/QWeRiseNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 transition-colors"
                aria-label="Follow us on Facebook (opens in new tab)"
              >
                <span className="sr-only">Facebook</span>
                <span className="text-2xl">📘</span>
              </a>
              <a
                href="https://twitter.com/QWeRiseNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 transition-colors"
                aria-label="Follow us on Twitter (opens in new tab)"
              >
                <span className="sr-only">Twitter</span>
                <span className="text-2xl">🐦</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
