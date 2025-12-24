import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Digital Lift - Honest Marketing for Contractors",
  description: "Learn about Digital Lift's mission to provide honest, affordable marketing systems for contractors. We cut through the noise and give you practical tools that help you grow consistently.",
};

export default function AboutPage() {
  const team = [
    { name: "Jonathan", role: "Co-Founder & CEO", image: "/team/Jonathan.png" },
    { name: "David", role: "Co-Founder & COO", image: "/team/David.png" },
    { name: "Marcus", role: "Customer Success", image: "/team/Marcus.png" }
  ];

  const differences = [
    {
      title: "No Long-Term Contracts",
      description: "We earn your business every month. No lock-ins, no cancellation fees. Stay because you want to, not because you have to."
    },
    {
      title: "Built for Contractors",
      description: "We don't work with restaurants, dentists, or lawyers. We specialize in contractors because we understand your business."
    },
    {
      title: "Real Support, Real People",
      description: "When you call, a real person answers. No overseas call centers, no chatbots. Just our team ready to help."
    }
  ];

  const values = [
    {
      title: "Honest and Direct",
      description: "We tell you what works and what does not. No marketing jargon, no false promises, just clear strategies that deliver real results."
    },
    {
      title: "Fair and Sustainable Pricing",
      description: "Our goal is long term partnerships, not short term wins. We price our services so you can grow with us for years, not feel pressured to leave."
    },
    {
      title: "Simple and Practical Systems",
      description: "Everything we build is designed to be easy to use. No technical background required, just systems that make running your business simpler."
    },
    {
      title: "Focused on Real Results",
      description: "We do not promise miracles. We provide proven tools and support that help you consistently win more business when used the right way."
    }
  ];

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
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  We built DigitalLift because contractors lose jobs every day from missed calls.
                </p>
                <p>
                  Our mission is to stop that — using AI that answers, chats, and books automatically.
                </p>
                <p>
                  We don't sell marketing. We sell booked jobs.
                </p>
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
