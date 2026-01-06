import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import VideoPlayer from '@/components/VideoPlayer';
import { Inbox } from 'lucide-react';

export const metadata: Metadata = {
  title: "All-in-One Inbox - Unified Customer Communication | Digital Lift",
  description: "Manage Facebook messages, Instagram DMs, text messages, and emails from one unified inbox. Faster responses, better organization, and nothing gets missed.",
};

export default function AllInOneInboxPage() {
  const stats = [
    {
      percentage: "70%",
      description: "of contractors respond faster when using a single inbox."
    },
    {
      percentage: "61%",
      description: "feel less overwhelmed managing customer messages in one place."
    },
    {
      percentage: "83%",
      description: "become more organized by centralizing communication."
    }
  ];


  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              All in One Inbox for Faster Responses
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
            <VideoPlayer videoSrc="/features/unified-inbox.mp4" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            What Is the All in One Inbox?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            The all in one inbox brings every customer message into one simple dashboard so nothing gets missed and responses stay fast.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white text-gray-900 p-8 md:p-10 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                    <Inbox className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">4 in 1 Unified Inbox</h3>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    Manage Facebook messages, Instagram DMs, text messages, and emails from one inbox. This keeps your communication organized, improves response times, and makes it easy to prioritize leads without switching between platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Want to schedule a time to talk?"
        description="See everything we do to help you grow your business so you can implement it yourself or let us do it for you."
      />

      {/* Video Testimonials Carousel */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Don't take our word for it
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Hear directly from contractors who use our systems
          </p>
          <TestimonialCarousel />
        </div>
      </section> */}

      <Footer />
    </main>
  );
}

