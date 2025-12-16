import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$297",
      period: "per month",
      description: "Perfect for getting started",
      features: [
        "Functional Website",
        "5-Star Review Funnel",
        "Missed Call Text Back",
        "Basic SEO Setup",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$497",
      period: "per month",
      description: "Most popular for growing businesses",
      features: [
        "Everything in Starter",
        "One-Click Marketing Campaigns",
        "Automated Lead Follow Up",
        "All-In-One Inbox",
        "Business Phone Number",
        "Priority Support",
        "Local SEO Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For larger operations",
      features: [
        "Everything in Professional",
        "Multiple Locations",
        "Custom Integrations",
        "Dedicated Account Manager",
        "White-Label Options",
        "Custom Development",
        "24/7 Support"
      ],
      popular: false
    }
  ];

  const faq = [
    {
      question: "Why is your pricing so affordable?",
      answer: "Our only interest is keeping you for 10+ years. We believe the best way to do that is to be priced affordably. We believe if we don't overcharge and provide you with excellent service, you'll never have a reason to leave."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your membership at any time. However, you will lose access to all the features we set up for you."
    },
    {
      question: "Do you offer refunds?",
      answer: "We don't offer refunds, but we do offer a satisfaction guarantee. If you're not happy with our service, we'll work with you to make it right."
    },
    {
      question: "What happens if I need more features?",
      answer: "You can upgrade your plan at any time. We'll prorate the difference and you'll get immediate access to the new features."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Affordable Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              No hidden fees. No long-term contracts. Just honest pricing that works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg border-2 ${
                  plan.popular
                    ? 'border-blue-600 transform scale-105'
                    : 'border-gray-200'
                } overflow-hidden relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                  >
                    Get Started
                  </button>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Let's schedule a call and we'll answer all your questions.
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

