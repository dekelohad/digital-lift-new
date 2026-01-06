import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Target, TrendingUp, FileX, Users, DollarSign, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Digital Lift - Honest Marketing for Contractors",
  description: "Learn about Digital Lift's mission to provide honest, affordable marketing systems for contractors. We cut through the noise and give you practical tools that help you grow consistently.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              About Digital Lift
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We cut through the noise and give contractors practical marketing systems that help them grow consistently.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-4 sm:space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                  It started with a phone call that never got answered.
                </p>
                <p>
                  Our friend, a contractor running a successful business, was on a job site when a potential customer called. By the time he checked his phone, he had missed the call. No voicemail. No text back. Just a lost opportunity.
                </p>
                <p>
                  That same week, it happened again. And again. He was losing thousands of dollars in potential work simply because he couldn't answer every call while he was busy doing the actual work — fixing, building, and serving his customers.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 my-6 sm:my-8 rounded-r-lg">
                  <p className="text-gray-900 font-semibold mb-2">We realized this wasn't just his problem.</p>
                  <p className="text-gray-700">
                    It's every contractor's problem. You're out there doing the work, and when you're on a roof or under a sink, you can't answer the phone. But those missed calls? They're not just missed calls. <span className="font-semibold text-gray-900">They're missed paychecks. They're missed opportunities to grow your business.</span>
                  </p>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8">
                  So we built Digital Lift to solve that problem.
                </p>
                <p>
                  We don't sell marketing. <span className="font-semibold text-gray-900">We sell booked jobs.</span> Our AI answers every call, 24/7, even when you're busy. It qualifies leads, answers questions, and books appointments directly into your calendar.
                </p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900">
                  No missed opportunities. No lost revenue.
                </p>
                <p>
                  We built this because we saw real contractors losing real money. Now, we help contractors capture every opportunity, every time.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="max-w-6xl mx-auto px-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Why Choose Digital Lift?
            </h2>
            <p className="text-center text-gray-600 text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
              We built Digital Lift specifically for contractors who are tired of missing opportunities and want systems that actually work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  icon: Target,
                  title: "We Understand Your Business",
                  description: "We don't work with restaurants, dentists, or lawyers. We specialize exclusively in contractors because we know your challenges — missed calls during jobs, after-hours inquiries, and the need for instant responses. We built our systems specifically for how contractors actually work.",
                  color: "blue"
                },
                {
                  icon: TrendingUp,
                  title: "Real Results, Not Promises",
                  description: "We don't promise miracles or overnight success. We provide proven systems that capture missed calls, qualify leads, and book appointments automatically. Our contractors see real bookings from real leads — that's how we measure success.",
                  color: "green"
                },
                {
                  icon: FileX,
                  title: "No Long-Term Contracts",
                  description: "We earn your business every month. No lock-ins, no cancellation fees, no pressure. Stay because our systems are working for you, not because you're stuck in a contract. If we're not delivering value, you can leave anytime.",
                  color: "purple"
                },
                {
                  icon: Users,
                  title: "Real People, Real Support",
                  description: "When you call us, a real person answers. No overseas call centers, no chatbots, no runaround. Our team is here to help you succeed because your success is our success. We're in this together.",
                  color: "orange"
                },
                {
                  icon: DollarSign,
                  title: "Built for Growth, Priced for Longevity",
                  description: "We price our services so you can grow with us for years, not feel pressured to leave after a few months. Our goal is long-term partnerships where you're winning more jobs and we're helping you scale. Fair pricing that makes sense for your business.",
                  color: "indigo"
                },
                {
                  icon: Zap,
                  title: "Simple Systems That Actually Work",
                  description: "No technical background required. No complicated dashboards. Just systems that work in the background — answering calls, booking appointments, capturing leads — so you can focus on what you do best: the actual work.",
                  color: "yellow"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                const colorClasses = {
                  blue: "bg-blue-100 text-blue-600",
                  green: "bg-green-100 text-green-600",
                  purple: "bg-purple-100 text-purple-600",
                  orange: "bg-orange-100 text-orange-600",
                  indigo: "bg-indigo-100 text-indigo-600",
                  yellow: "bg-yellow-100 text-yellow-600"
                };
                
                return (
                  <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-1 group">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
