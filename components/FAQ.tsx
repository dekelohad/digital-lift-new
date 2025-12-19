'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { staggerContainer } from '@/lib/animations';
import AnimatedText from './AnimatedText';

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqs: FAQItem[] = [
  {
    question: 'When am I going to start seeing results?',
    answer: "This will completely depend on what else you're doing for advertising, how long you've been in business, the quality of your work, and of course that you commit to using our system. If you think you're going to close your eyes and pay us $297/month to solve all your problems, we're probably not the right fit for you. We cannot stress this enough... you have to be doing multiple forms of advertising. Digital Lift is meant to provide you a simple, yet extremely effective foundational marketing system to help grow and expand your business. We're here to build your online business foundation, not perform miracles."
  },
  {
    question: 'How exactly do you help me grow my business?',
    answer: "We help you get more 5-star reviews to attract more customers. We build you a professional website that actually converts leads into paying customers. We instantly follow up with incoming leads so you look more professional. We put your customers into automated re-marketing campaigns so they're more likely to work with you again. We help you get more referrals by offering discounts for friends of past customers. And we use automation and AI to free you from repeating the same basic tasks, giving you more time for other things. If you believe any of those things can grow your business, that's exactly what we help you with."
  },
  {
    question: 'Why is your pricing so affordable?',
    answer: "Our only interest is keeping you for 10+ years. We believe the best way to do that is to be priced affordably. We believe if we don't overcharge and provide you with excellent service, you'll never have a reason to leave."
  },
  {
    question: 'What happens if I decide to cancel my membership with Digital Lift?',
    answer: "We'll be extremely sad to see you go, but after a good cry we'll bounce back. However, you will lose access to all the features we set up for you."
  },
  {
    question: 'Can people find my website on Google?',
    answer: "We make sure every Digital Lift website is set up for Google with the best SEO practices. This includes keyword research, adding alt tags, meta tags, and header titles, securing an SSL certificate, optimizing for a high Google Speed test score, and providing regular updates. Your Google ranking will depend on how long your site's been live, local competition, and factors like your Google My Business reviews. We also offer blogging to boost your content. While we don't handle off-page backlinks beyond your social media, our ongoing updates keep your site in great shape—unlike some developers who set up your site and then forget about it."
  },
  {
    question: 'Why should I spend on a website when word of mouth is already pulling in business?',
    answer: "We might be a bit biased, but here's the deal: if each of your customers brings in about $500 a year, getting just 2-4 new customers from your website will pay off. We know you'll see great value from your site. It will help you attract new customers, make it easier for existing customers to refer you, allow you to run ads if you want, and attract bigger clients who value professionalism."
  }
];

function FAQItemComponent({ 
  question, 
  answer, 
  isOpen, 
  onToggle,
  index,
  isInView
}: { 
  question: string; 
  answer: string | string[]; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
  isInView: boolean;
}) {
  const answerContent = Array.isArray(answer) ? answer : [answer];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`bg-white rounded-xl border overflow-hidden ${
        isOpen ? 'border-blue-500 shadow-lg shadow-blue-500/10' : 'border-gray-200 shadow-sm'
      }`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: isOpen ? 1 : 1.01 }}
    >
      <motion.button
        className={`w-full py-5 px-6 text-left flex items-center justify-between gap-4 transition-colors ${
          isOpen ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
        }`}
        onClick={onToggle}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ 
              rotate: isOpen ? 360 : 0,
              backgroundColor: isOpen ? 'rgb(59 130 246)' : 'rgb(229 231 235)'
            }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <HelpCircle className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-gray-500'}`} />
          </motion.div>
          <span className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="px-6 pb-5 text-gray-600 text-base leading-relaxed"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {answerContent.map((paragraph, idx) => (
                <motion.p 
                  key={idx} 
                  className={paragraph === '' ? 'h-2' : ''}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        {/* Question marks floating */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-200 text-4xl font-bold"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ?
          </motion.div>
        ))}
      </div>

      <motion.div 
        ref={ref}
        className="text-center mb-12 relative z-10"
      >
        <AnimatedText 
          variant="split" 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 inline-block"
        >
          Frequently Asked Questions
        </AnimatedText>
        
        {/* Animated underline */}
        <div className="flex justify-center">
          <motion.svg 
            className="w-48 sm:w-64" 
            viewBox="0 0 400 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path 
              d="M2 8C80 2 320 2 398 8" 
              stroke="#3B82F6" 
              strokeWidth="5" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.svg>
        </div>
      </motion.div>
      
      <motion.div 
        className="max-w-4xl mx-auto px-4 space-y-4 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {faqs.map((faq, index) => (
          <FAQItemComponent
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleFAQ(index)}
            index={index}
            isInView={isInView}
          />
        ))}
      </motion.div>
    </Section>
  );
}
