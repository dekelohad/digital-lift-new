import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

export default function OurWorkPage() {
  const projects = [
    {
      title: "Contractor Website Example 1",
      description: "A complete website redesign that increased leads by 300%",
      image: "project-1",
      trade: "Roofing"
    },
    {
      title: "Contractor Website Example 2",
      description: "Mobile-optimized site with integrated SMS lead capture",
      image: "project-2",
      trade: "Plumbing"
    },
    {
      title: "Contractor Website Example 3",
      description: "SEO-optimized site ranking #1 for local searches",
      image: "project-3",
      trade: "HVAC"
    },
    {
      title: "Contractor Website Example 4",
      description: "Complete marketing system with automated follow-ups",
      image: "project-4",
      trade: "Landscaping"
    },
    {
      title: "Contractor Website Example 5",
      description: "5-star review funnel generating consistent positive reviews",
      image: "project-5",
      trade: "Electrician"
    },
    {
      title: "Contractor Website Example 6",
      description: "Multi-location business with unified inbox system",
      image: "project-6",
      trade: "General Contractor"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              See how we've helped contractors grow their businesses with our marketing systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">{project.image}</span>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.trade}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to see your business featured here?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Let's work together to create a marketing system that grows your business.
          </p>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Book A Call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

