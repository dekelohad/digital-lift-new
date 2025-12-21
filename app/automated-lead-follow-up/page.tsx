import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { FileText, MessageSquare, Phone, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Automated SMS Lead Follow-Up - Never Lose a Lead | Digital Lift",
  description: "Automated SMS lead follow-up that converts faster. Instant responses to quote forms, chat widgets, missed calls, and social media messages. Keep prospects engaged 24/7.",
};

export default function AutomatedLeadFollowUpPage() {
  const stats = [
    {
      percentage: "70%",
      description: "of people reply to SMS follow ups within 24 hours."
    },
    {
      percentage: "72%",
      description: "of contractors increase sales using automated follow up."
    },
    {
      percentage: "97%",
      description: "of SMS messages are read within 24 hours."
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "Website Quote Forms",
      description: "When a customer submits a quote request, they instantly receive a confirmation text that starts the conversation. You are notified immediately so you can follow up while interest is high."
    },
    {
      icon: MessageSquare,
      title: "Website Chat Widget",
      description: "Messages sent through your website chat trigger an automatic text response, letting the customer know their request was received and keeping the conversation moving."
    },
    {
      icon: Phone,
      title: "Missed Call Text Back",
      description: "If a customer misses your call, we send a text right away to let them know you tried to reach them and invite them to continue the conversation."
    },
    {
      icon: Share2,
      title: "Instagram and Facebook Auto Responder",
      description: "Messages from Facebook and Instagram receive an automatic reply, reassuring customers that you will get back to them quickly while alerting you to respond."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Automated SMS Lead Follow Up That Converts Faster
            </h1>
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
                    <div className="text-xl font-bold text-gray-900">Lead Follow-Up</div>
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500">Auto-response sent</p>
                      <p className="text-sm text-gray-900 mt-1">Thank you for your inquiry!</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500">Follow-up #1 (24h)</p>
                      <p className="text-sm text-gray-900 mt-1">Still interested? Let's chat!</p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            What Is Automated SMS Lead Follow Up?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Automated SMS lead follow up ensures every inquiry receives an immediate response, keeping prospects engaged while you focus on the job.
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

