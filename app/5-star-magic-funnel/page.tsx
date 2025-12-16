import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, RefreshCw, MousePointerClick, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "5-Star Review Funnel - Automated Review System for Contractors | Digital Lift",
  description: "Automated 5-star review funnel that works on autopilot. Generate more positive reviews, send automated follow-ups, and protect your online reputation. One-click review requests included.",
};

export default function FiveStarMagicFunnelPage() {
  const stats = [
    {
      percentage: "97%",
      description: "of people read reviews before choosing a business."
    },
    {
      percentage: "72%",
      description: "use Google reviews to find local services."
    },
    {
      percentage: "2.7x",
      description: "more sales for businesses with more reviews."
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Generate More 5 Star Reviews",
      description: "Customers receive a custom review link. If they leave less than four stars, they are redirected to private feedback so issues can be resolved before becoming public."
    },
    {
      icon: RefreshCw,
      title: "Automated Follow Up Reminders",
      description: "We automatically send polite follow up messages over several weeks to remind customers to leave a review. The timing is spaced out to maximize responses without annoying them."
    },
    {
      icon: MousePointerClick,
      title: "One Click Review Requests",
      description: "Send a review request in seconds. Enter the customer's name and phone number and the system handles everything else."
    },
    {
      icon: Zap,
      title: "Contractor Review Injector",
      description: "Already have a list of past customers? We gradually request reviews from previous clients, helping you build a strong review profile over time."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              5 Star Review Funnel That Builds Trust Automatically
            </h1>
          </div>

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

          <div className="max-w-5xl mx-auto mb-12 sm:mb-20 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              See a short demo below
            </h2>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-video flex items-center justify-center shadow-2xl border-2 border-gray-300 overflow-hidden relative">
              <div className="absolute inset-0 bg-white m-4 rounded-lg shadow-inner">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xl font-bold text-gray-900">Review Request</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-600">How was your experience?</p>
                    <p className="text-gray-900 font-semibold mt-2">Leave us a 5-star review!</p>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 px-4">
            What Is the 5 Star Review Funnel?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            The 5 Star Review Funnel helps you collect more positive reviews while protecting your online reputation. Happy customers are guided to leave public reviews, while negative feedback is handled privately.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white text-gray-900 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-100 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600" />
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
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl relative">
                <Star className="w-24 h-24 sm:w-32 sm:h-32 text-white fill-white" />
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

