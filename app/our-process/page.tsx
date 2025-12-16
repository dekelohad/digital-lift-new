import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurProcessPage() {
  const steps = [
    {
      number: 1,
      title: 'Demo Call',
      subtitle: '(20 mins)',
      description: "It's actually a sales call, we just didn't want to scare you. But seriously... we'll answer all your questions, show you any features you have questions about, and see if we're a good fit to partner with…",
      details: [
        "Answer all your questions",
        "Show you any features you're curious about",
        "See if we're a good fit to partner with",
        "No pressure, just honest conversation"
      ]
    },
    {
      number: 2,
      title: 'Onboarding',
      description: "We get to know your business inside and out. This is where we learn about your specific needs, your customers, and your goals.",
      details: [
        "Complete business assessment",
        "Understand your target customers",
        "Review your current marketing efforts",
        "Set clear goals and expectations"
      ]
    },
    {
      number: 3,
      title: 'Setup',
      description: "We build your website and configure all your marketing systems. This is where the magic happens - we set everything up so it works perfectly for your business.",
      details: [
        "Build your custom website",
        "Configure all marketing systems",
        "Set up automated workflows",
        "Integrate all tools and platforms"
      ]
    },
    {
      number: 4,
      title: 'Launch',
      description: "Your website goes live and systems are activated. This is when you start seeing results and your business starts growing.",
      details: [
        "Website goes live",
        "All systems activated",
        "Training and support provided",
        "You're ready to grow!"
      ]
    },
    {
      number: 5,
      title: 'Ongoing Support',
      description: "We continue to support you and help grow your business. We're here for the long haul, not just a one-time setup.",
      details: [
        "Regular check-ins and updates",
        "Ongoing optimization",
        "New features and improvements",
        "Dedicated support when you need it"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Process
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              What working with us looks like... Simple, straightforward, and designed to get you results.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-3xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {step.title} {step.subtitle && <span className="text-gray-600 font-normal text-2xl">{step.subtitle}</span>}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-blue-600 mr-3 font-bold text-xl mt-1">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-20 w-0.5 h-12 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Let's schedule a demo call and see if we're a good fit to partner with.
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

