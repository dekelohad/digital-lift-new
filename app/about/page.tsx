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
                  Marketing is not magic and there is no miracle solution. Any agency promising instant results is selling hype. Real growth comes from using the right systems consistently over time. That is what we build.
                </p>
                <p>
                  Digital Lift started after seeing too many contractors get burned by agencies that overpromised, overcharged, and underdelivered. Flashy reports, confusing jargon, and zero real impact on their business. We knew contractors deserved better.
                </p>
                <p>
                  So we built Digital Lift around simple, proven marketing systems that actually get used. No unnecessary complexity. No long term lock ins. Just tools designed to help contractors get found, respond faster, and win more jobs.
                </p>
                <p>
                  Our goal is not quick wins. Our goal is to keep you for the next 10 plus years. We believe the best way to do that is fair pricing, honest communication, and consistent results. If we charge reasonably and deliver real value, you will never have a reason to leave.
                </p>
                <p>
                  That is how we do business and that is what you can expect when you work with Digital Lift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 px-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We're not your typical marketing agency. Here's why contractors choose to work with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {differences.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl sm:text-5xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 sm:mb-14 px-4">
            Meet Your Team at Digital Lift
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-4">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-5 overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 112px, 128px"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-base text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-4">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{value.description}</p>
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
