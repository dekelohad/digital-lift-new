import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Phone, PhoneForwarded, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: "Business Phone for Contractors - Professional Phone Number | Digital Lift",
  description: "Get a dedicated business phone number with call tracking and insights. Separate business and personal calls, track every lead, and present a professional image to customers.",
};

export default function BusinessPhonePage() {
  const stats = [
    {
      percentage: "80%",
      description: "more calls to contractors with a business phone lead to jobs."
    },
    {
      percentage: "71%",
      description: "of customers are more likely to refer contractors who use a business phone number."
    },
    {
      percentage: "58%",
      description: "manage appointments more efficiently with a dedicated business phone."
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "Dedicated Business Phone Number",
      description: "Your customers call a professional business number that represents your company, not a personal line. Every call is tracked and logged so you can follow up quickly and stay organized."
    },
    {
      icon: PhoneForwarded,
      title: "Call Tracking and Insights",
      description: "Track every incoming call to understand where leads come from and how customers reach your business. This helps you measure marketing performance and improve how calls are handled."
    },
    {
      icon: PhoneCall,
      title: "Separate Business and Personal Calls",
      description: "Keep your personal number private while managing all business calls in one place. This creates clear boundaries, improves responsiveness, and presents a more professional image to customers."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Business Phone Built for Contractors
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
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
                    <div className="text-xl font-bold text-gray-900">Business Phone</div>
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <Phone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-900">Incoming Call</p>
                    <p className="text-gray-600 mt-2">(555) 123-4567</p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Why Do You Need a Business Phone?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            A business phone gives your company a professional presence, better call management, and clear separation between work and personal life.
          </p>
          
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

      <CTA
        title="Want to schedule a time to talk?"
        description="See everything we do to help you grow your business so you can implement it yourself or let us do it for you."
      />

      <Footer />
    </main>
  );
}

