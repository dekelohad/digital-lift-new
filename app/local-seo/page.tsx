import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, TrendingUp, Target, MapPin } from 'lucide-react';

export default function LocalSEOPage() {
  const stats = [
    {
      percentage: "76%",
      description: "of local searches result in a phone call or visit"
    },
    {
      percentage: "46%",
      description: "of all Google searches are local"
    },
    {
      percentage: "88%",
      description: "of consumers who search for a local business on mobile call or visit within 24 hours"
    }
  ];

  const features = [
    {
      icon: Search,
      title: "Higher Quality Leads",
      description: "Organic traffic means customers who want your service and are ready to talk, not random leads that never answer the phone."
    },
    {
      icon: Target,
      title: "Stop Paying for Unqualified Leads",
      description: "Quality matters more than volume. We focus on attracting the right customers instead of wasting your budget on low intent leads."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Organic Growth",
      description: "Build a long term lead system that works for you every month without paying for every click."
    },
    {
      icon: MapPin,
      title: "Local Visibility",
      description: "Get found by customers in your area when they search for your services on Google."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Local SEO That Brings Qualified Leads
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              There are no overnight rankings. Real local SEO takes time, but when done right, it consistently brings customers who are actively searching for your services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-4">
                  {stat.percentage}
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              See a short demo below
            </h2>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-video flex items-center justify-center shadow-2xl border-2 border-gray-300 overflow-hidden relative">
              <div className="absolute inset-0 bg-white m-4 rounded-lg shadow-inner">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xl font-bold text-gray-900">Google Search</div>
                    <Search className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Your Business Name</p>
                        <p className="text-sm text-gray-600">123 Main St, Your City</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                          <span className="text-sm text-gray-600 ml-2">4.9 (127 reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer group">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            SEO Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white text-gray-900 p-8 md:p-10 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-10 h-10 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Want to schedule a time to talk?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl">
                See everything we do to help you grow your business so you can implement it yourself or let us do it for you.
              </p>
              <button className="bg-blue-600 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Book A Call
              </button>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl relative">
                <Search className="w-32 h-32 text-white" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-300 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-400 rounded-full opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

