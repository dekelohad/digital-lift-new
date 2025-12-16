import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const team = [
    { name: "Michael", role: "Founder & CEO" },
    { name: "Kai", role: "Co-Founder & CTO" },
    { name: "Kevin", role: "Head of Operations" },
    { name: "Astrid", role: "Customer Success" }
  ];

  const values = [
    {
      title: "No Bullsh*t",
      description: "We tell it like it is. No fancy marketing speak, just honest solutions that work."
    },
    {
      title: "Affordable Pricing",
      description: "We believe in keeping you for 10+ years, not charging you out the door."
    },
    {
      title: "Simple Systems",
      description: "No degrees required. We build systems that contractors can actually use."
    },
    {
      title: "Real Results",
      description: "We're not here to perform miracles, but we'll give you the tools to win."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Stone Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              We're here to cut through the marketing BS and give contractors the tools they need to grow their businesses.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Cut the bullsh*t, Marketing isn't rocket science. No agency... (including ours) has the miracle solution to all your problems. We'll give you the tools to win but you need to commit to using them!
                </p>
                <p>
                  We started Stone Systems because we saw too many contractors getting ripped off by marketing agencies promising the world and delivering nothing. We decided to do things differently.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mx-auto mb-4 flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-gray-700 text-lg font-semibold">{member.name}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Want to work with us?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Let's see if we're a good fit to partner with.
          </p>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Book A Call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

