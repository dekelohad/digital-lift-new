import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { BadgeCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Process - How Digital Lift Works | Contractor Marketing",
  description: "See how Digital Lift works with contractors in 5 simple steps: Strategy Call, Onboarding, Build & Setup, Launch, and Ongoing Support. Transparent process from start to finish.",
};

export default function OurProcessPage() {
  const steps = [
    {
      number: 1,
      title: 'Strategy Call',
      description: 'We start with a short call to understand your business, answer your questions, and confirm we are the right fit to work together.',
      details: [
        "Understand your business needs",
        "Answer all your questions",
        "Confirm we're the right fit",
        "No pressure, just honest conversation"
      ]
    },
    {
      number: 2,
      title: 'Onboarding',
      description: 'We collect the details we need and get your account set up properly from day one.',
      details: [
        "Collect business information",
        "Set up your account",
        "Gather necessary details",
        "Prepare for build phase"
      ]
    },
    {
      number: 3,
      title: 'Build and Setup',
      description: 'We design your website and configure all marketing systems to match your business goals.',
      details: [
        "Design your website",
        "Configure marketing systems",
        "Match your business goals",
        "Set up all integrations"
      ]
    },
    {
      number: 4,
      title: 'Launch',
      description: 'Your website goes live and all systems are activated and ready to generate leads.',
      details: [
        "Website goes live",
        "All systems activated",
        "Ready to generate leads",
        "Everything is operational"
      ]
    },
    {
      number: 5,
      title: 'Ongoing Support',
      description: 'We stay involved, provide ongoing support, and help optimize your system as your business grows.',
      details: [
        "Ongoing support provided",
        "System optimization",
        "Help as you grow",
        "Long-term partnership"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Our Process
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              What Working With Digital Lift Looks Like
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl shadow-md flex-shrink-0">
                    {step.number}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    {step.title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <BadgeCheck className="text-blue-600 mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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

