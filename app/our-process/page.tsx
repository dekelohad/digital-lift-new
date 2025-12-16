import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 px-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 w-full">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                      {step.number}. {step.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2 sm:mr-3 font-bold text-lg sm:text-xl mt-1 flex-shrink-0">•</span>
                          <span className="text-sm sm:text-base text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 sm:left-10 top-16 sm:top-20 w-0.5 h-8 sm:h-12 bg-gray-300"></div>
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

