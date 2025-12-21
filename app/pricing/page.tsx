'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Check, ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/animations';

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div 
      className={`bg-white rounded-lg border transition-all duration-200 ${
        isOpen ? 'border-blue-600 shadow-md' : 'border-gray-200 shadow-sm hover:shadow-md'
      }`}
    >
      <button
        className={`w-full py-5 px-6 text-left flex items-center justify-between gap-4 rounded-lg transition-colors ${
          isOpen ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
        }`}
        onClick={onToggle}
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4 leading-snug">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-gray-600 text-base leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const plansRef = useRef(null);
  const plansInView = useInView(plansRef, { once: true, margin: '-50px' });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: '-100px' });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const plans = [
    {
      name: "Essential",
      price: "$297",
      period: "per month",
      description: "Perfect for getting started",
      paymentLink: "https://api.digitallift.io/payment-link/6942cc7bb17a074c60f75284",
      features: [
        "Functional Website",
        "Basic SEO Setup",
        "Missed Call Text Back",
        "5 Star Magic Funnel",
        "Automated Lead Follow Up",
        "One-Click Marketing Campaigns",
        "All-In-One Inbox",
        "Business Phone"
      ],
      popular: false
    },
    {
      name: "Complete",
      price: "$497",
      period: "per month",
      description: "Most popular for growing businesses",
      paymentLink: "https://api.digitallift.io/payment-link/6943ca052024d407e2273b0b",
      features: [
        "Everything in Essential",
        "AI Receptionist with Calendar Booking",
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
      contactLink: "/contact",
      features: [
        "Everything in Complete",
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
                  <motion.a
                    href={plan.paymentLink || plan.contactLink || "#"}
                    target={plan.paymentLink ? "_blank" : undefined}
                    rel={plan.paymentLink ? "noopener noreferrer" : undefined}
                    className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all block text-center ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.a>
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
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            {faq.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFaqIndex === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <CTA
        title="Want to schedule a time to talk?"
        description="See everything we do to help you grow your business so you can implement it yourself or let us do it for you."
      />

      {/* Video Testimonials Carousel */}
      <section className="py-16 md:py-24 bg-white">
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
    </motion.main>
  );
}

