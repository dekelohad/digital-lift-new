import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Work - Contractor Website Examples | Digital Lift",
  description: "See examples of contractor websites and marketing systems we've built. Real results from roofing, plumbing, HVAC, landscaping, electrical, and general contractor clients.",
};

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
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Our Work
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              See how we've helped contractors grow their businesses with our marketing systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm sm:text-base">{project.image}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="mb-2">
                    <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                      {project.trade}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{project.description}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 text-sm sm:text-base">
                    View Project <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Ready to see your business featured here?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto opacity-95 px-4">
            Let's work together to create a marketing system that grows your business.
          </p>
          <button className="bg-white text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Book A Call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

