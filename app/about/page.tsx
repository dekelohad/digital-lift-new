import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Digital Lift - Honest Marketing for Contractors",
  description: "Learn about Digital Lift's mission to provide honest, affordable marketing systems for contractors. We cut through the noise and give you practical tools that help you grow consistently.",
};

export default function AboutPage() {
  const team = [
    { name: "David", role: "Founder & CEO", image: "https://i.pravatar.cc/400?img=1" },
    { name: "Jonathan", role: "Co-Founder & CTO", image: "/team/jonathan-dekel.png" },
    { name: "Sarah", role: "Head of Operations", image: "https://i.pravatar.cc/400?img=47" },
    { name: "Marcus", role: "Customer Success", image: "https://i.pravatar.cc/400?img=33" }
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
                  Marketing isn't magic and there's no miracle solution. Any agency promising instant results is selling hype. We build proven marketing systems that generate real opportunities, but lasting growth comes from commitment and consistency.
                </p>
                <p>
                  We started Digital Lift because we saw too many contractors getting ripped off by marketing agencies promising the world and delivering nothing. We decided to do things differently.
                </p>
                <p>
                  Our only interest is keeping you for 10+ years. We believe the best way to do that is to be priced affordably and provide you with excellent service. We believe if we don't overcharge and provide you with excellent service, you'll never have a reason to leave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-4">
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mx-auto mb-3 sm:mb-4 overflow-hidden shadow-lg border-4 border-white relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-4">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Want to work with us?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto opacity-95 px-4">
            Let's see if we're a good fit to partner with.
          </p>
          <button className="bg-white text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Book A Call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

