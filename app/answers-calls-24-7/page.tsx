import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import VideoPlayer from '@/components/VideoPlayer';
import { Phone, Clock, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "AI Receptionist - Never Miss a Call | Digital Lift",
  description: "Your AI receptionist answers every call 24/7, even when you're on a job site. Qualifies leads, answers questions, and books appointments automatically.",
};

export default function AnswersCalls247Page() {
  const stats = [
    {
      percentage: "100%",
      description: "call answer rate with AI assistant handling every inquiry."
    },
    {
      percentage: "3x",
      description: "more bookings when leads can schedule directly without waiting."
    },
    {
      percentage: "24/7",
      description: "availability means you never miss a call, even after hours."
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "Never Miss Another Call",
      description: "Your AI receptionist answers every call instantly, even when you're on a job site or unavailable. No more missed opportunities or lost leads to competitors."
    },
    {
      icon: Shield,
      title: "Qualifies Every Lead",
      description: "The AI asks the right questions to determine if they're a serious prospect ready to book. You only get notified about qualified leads, not tire-kickers."
    },
    {
      icon: Clock,
      title: "Works Around the Clock",
      description: "Your system works 24/7, answering calls even after hours, on weekends, and holidays. Your business never sleeps, so you never lose a lead."
    },
    {
      icon: Zap,
      title: "Books Appointments Automatically",
      description: "Qualified leads can book appointments directly into your calendar. No back-and-forth texts, no missed scheduling opportunities. Jobs land in your calendar automatically."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Feature Banner */}
      <section className="py-8 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <p className="text-lg md:text-xl font-semibold mb-4">
              This feature is included in our booking system
            </p>
            <a href="/how-it-works">
              <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg">
                See How It Books Jobs
              </button>
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              AI Receptionist That Never Misses a Call
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
            <VideoPlayer videoSrc="https://storage.googleapis.com/msgsndr/iWW5drc0VzO1HbkHCeUo/media/69516980e889d30b74b62c04.mp4" />
            
            {/* Try It Yourself Section */}
            <div className="mt-12 sm:mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 md:p-10 border-2 border-blue-200">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Try It Yourself
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Want to see how our AI receptionist works in real-time? Visit our demo website and try calling the number that appears on the screen, or interact with our smart chatbot to experience firsthand how it can make your life simpler.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="https://plumberoncall247.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Visit Demo Website
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Call the number on the website or chat with our AI to see it in action
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 px-4">
            What Is AI Receptionist?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto">
            AI Receptionist uses intelligent AI to answer every call professionally, qualify leads, and book appointments directly into your calendar. Never miss a call or lose a booking opportunity, even when you're unavailable.
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

      <CTA
        title="Want to schedule a time to talk?"
        description="See everything we do to help you grow your business so you can implement it yourself or let us do it for you."
      />

      {/* Video Testimonials Carousel */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Don't take our word for it
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Hear directly from contractors who use our systems
          </p>
          <TestimonialCarousel />
        </div>
      </section>

      <Footer />
    </main>
  );
}
