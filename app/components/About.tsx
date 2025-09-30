// About section with organization details
// Provides context about the NGO's work and values

export default function About() {
  return (
    <section id="about" className="py-16 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Our Work
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Q We Rise Network is a feminist, Kenyan-based organization founded in 2023 by young 
              Intersex, Transgender, Non-Binary, and Lesbian, Bisexual, & Queer (ITGNC & LBQ) 
              individuals who have experienced structural violence, discriminatory laws, and social exclusion.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Grounded in principles of bodily autonomy, collective liberation, and healing justice, 
              we advance gender equity, mental wellness, and access to comprehensive sexual and 
              reproductive health and rights (SRHR) for ITGNC and LBQ communities.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To create a world where ITGNC and LBQ individuals are valued, respected, and 
                  empowered to live in their full, authentic selves free from oppression and held 
                  in communities rooted in care, dignity and justice.
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100 mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We center communal care as a radical act of resistance and resilience using art, 
                  music, film, and sports as culturally rooted tools for expression, healing, and civic education.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Our Focus Areas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">SRHR Education</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Advocacy & Awareness</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Economic Justice</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Storytelling</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Holistic Wellbeing</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Creative Expression</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
