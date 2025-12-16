'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/animations';

export default function PricingPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const plansRef = useRef(null);
  const plansInView = useInView(plansRef, { once: true, margin: '-50px' });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: '-100px' });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

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
    <motion.main 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            ref={heroRef}
            className="text-center mb-12 sm:mb-16 px-4"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              variants={fadeInUp}
            >
              Simple, Affordable Pricing
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              No hidden fees. No long-term contracts. Just honest pricing that works.
            </motion.p>
          </motion.div>

          <motion.div 
            ref={plansRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={plansInView ? "visible" : "hidden"}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-xl shadow-lg border-2 ${
                  plan.popular
                    ? 'border-blue-600 md:transform md:scale-105'
                    : 'border-gray-200'
                } overflow-hidden relative`}
                variants={scaleIn}
                whileHover={{ y: -8, scale: plan.popular ? 1.08 : 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-xs sm:text-sm font-semibold"
                    initial={{ y: -20 }}
                    animate={plansInView ? { y: 0 } : { y: -20 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  >
                    Most Popular
                  </motion.div>
                )}
                <div className={`p-6 sm:p-8 ${plan.popular ? 'pt-10 sm:pt-12' : ''}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{plan.description}</p>
                  <div className="mb-4 sm:mb-6">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm sm:text-base text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <motion.button
                    className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                  <motion.ul 
                    className="mt-6 sm:mt-8 space-y-3 sm:space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={plansInView ? "visible" : "hidden"}
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start"
                        variants={staggerItem}
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 
            ref={faqRef}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            {faq.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                variants={staggerItem}
                whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <motion.div 
          ref={ctaRef}
          className="container mx-auto px-4 max-w-7xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            Still have questions?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95"
            variants={fadeInUp}
          >
            Let's schedule a call and we'll answer all your questions.
          </motion.p>
          <motion.button 
            className="bg-white text-blue-600 px-10 py-5 rounded-lg font-semibold text-lg shadow-xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Book A Call
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}

