'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Check, ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/animations';
import Button from '@/components/Button';
import AnimatedText from '@/components/AnimatedText';
import { useIsMobile } from '@/lib/useIsMobile';
import Section from '@/components/Section';

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
  const isMobile = useIsMobile();

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const plans = [
    {
      name: "Starter",
      price: "$297",
      period: "per month",
      description: "Recover the jobs you're missing every week",
      paymentLink: "https://api.digitallift.io/payment-link/6942cc7bb17a074c60f75284",
      popular: false,
      gradient: 'from-gray-500 to-gray-600',
      features: [
        "Website that turns visitors into leads",
        "Instant text when you miss a call",
        "Website chat bot captures new customers",
        "Real-time lead alerts to your phone"
      ]
    },
    {
      name: "Pro",
      price: "$497",
      period: "per month",
      description: "We book jobs for you",
      paymentLink: "https://api.digitallift.io/payment-link/6943ca052024d407e2273b0b",
      popular: true,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        "Everything in Starter, plus:",
        "AI answers missed calls for you",
        "AI books appointments into your calendar",
        "Chat bot books jobs directly from your website",
        "Automatic appointment reminders"
      ]
    },
    {
      name: "Scale",
      price: "$697",
      period: "per month",
      description: "Your business on autopilot",
      contactLink: "/contact",
      popular: false,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        "Everything in Pro, plus:",
        "Multiple users & locations",
        "Custom call flows per service",
        "After-hours & emergency routing",
        "Dedicated setup & support"
      ]
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
      
      <Section className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none">
          <motion.div 
              className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
        )}

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div 
            ref={heroRef}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
          >
              Pricing
            </motion.span>
            <AnimatedText 
              variant="split" 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 inline-block"
            >
              Choose Your Plan
            </AnimatedText>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Simple pricing that works. No hidden fees, no surprises.
            </p>
          </div>

          <motion.div 
            ref={plansRef}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start"
            initial="hidden"
            animate={plansInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="relative group h-full"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={plansInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                whileHover={{ y: plan.popular ? -12 : -8, scale: 1.02 }}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-20"
                    initial={{ scale: 0, y: -20 }}
                    animate={plansInView ? { scale: 1, y: 0 } : { scale: 0, y: -20 }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  >
                    Most Popular
                  </motion.div>
                )}
                
                <div className={`bg-white rounded-2xl p-8 shadow-2xl border-2 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-blue-500/20' 
                    : 'border-gray-200 hover:border-gray-300'
                } transition-all duration-300 h-full relative overflow-hidden flex flex-col`}>
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className={`text-5xl font-black bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2 text-lg">/month</span>
                    </div>
                    <p className="text-gray-700 mb-6 text-lg font-medium">{plan.description}</p>
                    
                    {/* Features list */}
                    <div className="flex-grow mb-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => {
                          const isHeader = feature.includes("Everything in");
                          return (
                            <motion.li
                              key={featureIndex}
                              className={`flex items-start gap-3 ${isHeader ? 'font-semibold' : ''}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={plansInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: index * 0.15 + featureIndex * 0.05 }}
                            >
                              {!isHeader && (
                                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                  plan.popular ? 'text-blue-600' : 'text-gray-400'
                                }`} />
                              )}
                              <span className={`text-gray-700 text-sm leading-relaxed ${isHeader ? 'text-gray-900' : ''}`}>
                                {feature}
                              </span>
                            </motion.li>
                          );
                        })}
                      </ul>
                  </div>
                    
                  <motion.a
                    href={plan.paymentLink || plan.contactLink || "#"}
                    target={plan.paymentLink ? "_blank" : undefined}
                    rel={plan.paymentLink ? "noopener noreferrer" : undefined}
                      className="mt-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                  >
                      <Button 
                        variant={plan.popular ? "primary" : "secondary"} 
                        className="w-full text-lg py-4"
                      >
                        Get Started
                      </Button>
                    </motion.a>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${plan.gradient} rounded-full opacity-10 blur-2xl`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

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
      {/* <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Don't take our word for it
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Hear directly from contractors who use our systems
          </p>
          <TestimonialCarousel />
        </div>
      </section> */}

      <Footer />
    </motion.main>
  );
}
