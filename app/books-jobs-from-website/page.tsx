import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import VideoPlayer from '@/components/VideoPlayer';
import { Globe, MessageSquare, Calendar, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "Website Booking System - Turn Visitors Into Jobs | Digital Lift",
  description: "Your website now books jobs for you. Website visitors get instant responses and can book appointments directly without picking up the phone.",
};

export default function BooksJobsFromWebsitePage() {
  const stats = [
    {
      percentage: "90%",
      description: "of leads prefer to book appointments immediately when ready."
    },
    {
      percentage: "3x",
      description: "more bookings when visitors can schedule directly from your website."
    },
    {
      percentage: "24/7",
      description: "availability means your website books jobs even when you're sleeping."
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Turn Website Visitors Into Jobs",
      description: "Your website now captures and books leads automatically. Visitors get instant responses and can book appointments directly without picking up the phone. No more lost opportunities from people who don't want to call."
    },
    {
      icon: MessageSquare,
      title: "Instant Responses Keep Leads Engaged",
      description: "When someone visits your website, they get an immediate response. The system answers questions, qualifies leads, and guides them to book an appointment while they're still on your site."
    },
    {
      icon: Calendar,
      title: "Books Appointments Directly",
      description: "Qualified leads can book appointments right there on your website. No phone call needed. No waiting. They pick a time, and it's automatically added to your calendar."
    },
    {
      icon: Zap,
      title: "Works 24/7 Automatically",
      description: "Your website never sleeps. It captures leads and books jobs around the clock, even when you're on a job site or unavailable. Every visitor is a potential booking opportunity."
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
              Your Website Now Books Jobs For You
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-green-600 mb-3 sm:mb-4">
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
            <VideoPlayer videoSrc="/features/website-booking.mp4" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 px-4">
            What Is Website Booking?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto">
            Your website now captures leads and books appointments automatically. Visitors get instant responses, can ask questions, and book jobs directly from your website without ever picking up the phone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white text-gray-900 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
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
