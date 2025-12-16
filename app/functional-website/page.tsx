import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Star, Smartphone, MessageSquare } from 'lucide-react';

export default function FunctionalWebsitePage() {
  const stats = [
    {
      percentage: "75%",
      description: "of people judge a company's credibility based on its website."
    },
    {
      percentage: "78%",
      description: "of small business owners say a website has helped grow their business."
    },
    {
      percentage: "67%",
      description: "of users trust businesses with a seamless website experience, leading to higher sales."
    }
  ];

  const features = [
    {
      icon: Search,
      title: "Get Found Online",
      description: "We build every website with search visibility in mind. Your site is properly indexed and optimized according to Google's best practices. We structure keywords, meta tags, headers, and page speed before launch so your business shows up when customers search locally. Content options are available to support long term growth."
    },
    {
      icon: Star,
      title: "Showcase Your Best Reviews",
      description: "Your reputation matters. We highlight your strongest reviews across your website to build trust instantly. Reviews are kept up to date and professionally presented so your business always puts its best foot forward."
    },
    {
      icon: Smartphone,
      title: "Mobile First Experience",
      description: "Most customers search for local services on their phone. We prioritize fast load times, clear calls to action, clickable phone numbers, and a smooth mobile experience that makes it easy to contact you."
    },
    {
      icon: MessageSquare,
      title: "Instant SMS Conversations",
      description: "Email back and forth slows down sales. Our websites are designed to start text conversations instantly. Quote forms and chat widgets capture phone numbers and send immediate confirmations so you can follow up directly, even if the visitor leaves your site."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Functional Websites That Build Trust and Drive Growth
            </h1>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-600 mb-3 sm:mb-4">
                  {stat.percentage}
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="max-w-5xl mx-auto mb-12 sm:mb-20 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              See a short demo below
            </h2>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-video flex items-center justify-center shadow-2xl border-2 border-gray-300 overflow-hidden relative">
              {/* Video placeholder with website preview */}
              <div className="absolute inset-0 bg-white m-4 rounded-lg shadow-inner">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xl font-bold text-gray-900">DIGITAL LIFT</div>
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                  </div>
                  <div className="bg-gray-100 h-32 rounded mb-4"></div>
                  <div className="text-center">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
                      GET A FREE QUOTE
                    </button>
                  </div>
                </div>
              </div>
              {/* Play button overlay */}
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

      {/* What is the functional website? Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            What Is a Functional Website?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            A functional website is not just about design. It is built to be found, earn trust, and turn visitors into real conversations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white text-gray-900 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">{feature.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 px-4">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Want to schedule a time to talk?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
                See everything we do to help you grow your business so you can implement it yourself or let us do it for you.
              </p>
              <button className="bg-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Book A Call
              </button>
            </div>
            <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl relative">
                <div className="text-7xl sm:text-9xl md:text-[12rem]">🤖</div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-amber-400 rounded-full opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

