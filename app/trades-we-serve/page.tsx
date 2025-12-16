import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TradeCard from '@/components/TradeCard';

const trades = [
  'Landscapers',
  'Remodeling',
  'Pressure Washer',
  'Pest Control',
  'Moving Companies',
  'Flooring & Carpet Cleaning',
  'Roofing',
  'HVAC',
  'Plumbing',
  'Electrician',
  'Handyman',
  'Painters',
  'Decks & Patios',
  'Siding',
  'Pool Construction',
  'Paving',
  'Hardscaping',
  'Windows & Doors',
  'General Contractors',
  'Dog Groomers',
  'Tree Service',
  'Home Builders'
];

export default function TradesWeServePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Trades We Serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              We work with contractors across all trades. No matter what type of business you run, 
              we have the tools to help you grow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {trades.map((trade, index) => (
              <TradeCard key={index} name={trade} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Don't see your trade listed? We probably still work with you!
            </p>
            <button className="bg-blue-600 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Book A Call
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Contractors Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Simple Systems</h3>
                <p className="text-gray-700 leading-relaxed">
                  No degrees required, just a hard hat. We build systems that contractors can actually use 
                  without needing a marketing degree.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in keeping you for 10+ years, not charging you out the door. Our pricing is 
                  designed to be affordable for contractors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Results</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're not here to perform miracles, but we'll give you the tools to win. Our systems 
                  are proven to work for contractors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're here for the long haul. Once you're set up, we continue to support you and help 
                  grow your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Let's see how we can help your trade business succeed online.
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

