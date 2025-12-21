'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

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

const contactFaqs = [
  {
    question: "How quickly will you respond to my message?",
    answer: "We typically respond within 4-24 hours during business days. For urgent matters, we recommend calling us directly at +1 (737) 937-6612."
  },
  {
    question: "What happens after I submit the contact form?",
    answer: "Once you submit the form, you'll receive a confirmation email. A member of our team will review your message and reach out to schedule a call or provide the information you need."
  },
  {
    question: "Is there any obligation if I reach out?",
    answer: "Absolutely not. Getting in touch doesn't mean you have to buy anything. We're happy to answer questions and help you figure out if we're the right fit for your business."
  },
  {
    question: "Can I schedule a call instead of filling out a form?",
    answer: "Yes! You can book a call directly using the 'Book A Call' button in our navigation, or call us at +1 (737) 937-6612 during business hours."
  },
  {
    question: "What information should I include in my message?",
    answer: "Tell us about your business, what services you're interested in, and any specific challenges you're facing. The more details you provide, the better we can prepare for our conversation."
  }
];

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: '-50px' });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-50px' });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: '-100px' });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.digitallift.io/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.main 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      
      {/* Hero Section */}
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
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Have questions? Want to learn more? We're here to help you grow your business.
            </motion.p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div 
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
          >
            <motion.a
              href="mailto:info@digitalLift.io"
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all group"
              variants={staggerItem}
              whileHover={{ y: -4 }}
            >
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-base sm:text-lg text-gray-700 group-hover:text-blue-600 transition-colors">
                info@digitalLift.io
              </p>
            </motion.a>

            <motion.a
              href="tel:+17379376612"
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all group"
              variants={staggerItem}
              whileHover={{ y: -4 }}
            >
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-base sm:text-lg text-gray-700 group-hover:text-blue-600 transition-colors">
                +1 (737) 937-6612
              </p>
            </motion.a>

            <motion.div
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200"
              variants={staggerItem}
            >
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-base sm:text-lg text-gray-700">
                11801 Domain Blvd, Suite W350<br />
                Austin, TX 78758
              </p>
            </motion.div>
          </motion.div>

          {/* Two Column: Text Left, Form Right */}
          <motion.div 
            ref={formRef}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-24"
            variants={staggerContainer}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
          >
            {/* Left Side - Text Content */}
            <motion.div variants={fadeInUp} className="lg:sticky lg:top-32">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Let's Talk About Growing Your Business
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We're not here to give you a sales pitch. We want to understand your business, 
                your challenges, and figure out if we're the right fit to help you grow.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Quick Response</h3>
                    <p className="text-gray-600">We respond within 24 hours. Usually much faster.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Honest Advice</h3>
                    <p className="text-gray-600">If we're not the right fit, we'll tell you. No hard sales tactics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">No Obligation</h3>
                    <p className="text-gray-600">Getting in touch doesn't mean you have to buy anything. Ever.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-600 mb-6 sm:mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prefer to Schedule a Call?
            </h2>
            <p className="text-lg text-gray-700">
              Book a time that works for you and we'll walk you through how Digital Lift can help grow your business.
            </p>
          </div>
          <iframe 
              src="https://api.digitallift.io/widget/booking/jpGifmdOeIbfiftmjQ2w" 
              style={{ width: '100%', height: '700px', border: 'none' }}
              id="jpGifmdOeIbfiftmjQ2w_1766339559949"
            />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
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
            {contactFaqs.map((item, index) => (
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

      <Footer />
    </motion.main>
  );
}
