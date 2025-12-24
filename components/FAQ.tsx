'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { staggerContainer } from '@/lib/animations';
import AnimatedText from './AnimatedText';
import { useIsMobile } from '@/lib/useIsMobile';

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqs: FAQItem[] = [
  {
    question: 'Will I actually book more jobs?',
    answer: "Yes. Our system answers every call, even when you're on a job site. Every missed call gets an instant text response. Website visitors can book appointments directly. The result? You stop losing leads to competitors and start booking jobs 24/7."
  },
  {
    question: 'How quickly will I see booked appointments?',
    answer: "Most contractors see their first booked appointment within the first week. The AI starts answering calls and booking appointments immediately after setup. You'll get notifications for every booking so you know exactly what's coming."
  },
  {
    question: 'What happens when I\'m on a job and can\'t answer?',
    answer: "That's exactly when our system works best. The AI answers every call, qualifies the lead, and books the appointment directly into your calendar. You get a notification, and the customer gets confirmation. No missed opportunities."
  },
  {
    question: 'Do I need to be tech-savvy to use this?',
    answer: "Not at all. Once it's set up, the system runs automatically. The AI answers calls, texts missed callers, and books appointments without you doing anything. You just show up to the jobs that get booked."
  },
  {
    question: 'Can I cancel if it doesn\'t work for me?',
    answer: "Yes, you can cancel anytime. No long-term contracts. But most contractors see the value immediately — they stop missing calls and start booking jobs they would have lost before."
  },
  {
    question: 'How much money am I leaving on the table from missed calls?',
    answer: "If you're missing even 5-10 calls per month and your average job is $500, that's $2,500-$5,000 in lost revenue every month. Our system recovers those leads and books those jobs automatically."
  }
];

function FAQItemComponent({ 
  question, 
  answer, 
  isOpen, 
  onToggle,
  index,
  isInView,
  isMobile
}: { 
  question: string; 
  answer: string | string[]; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
  isInView: boolean;
  isMobile: boolean;
}) {
  const answerContent = Array.isArray(answer) ? answer : [answer];

  if (isMobile) {
    return (
      <div 
        className={`bg-white rounded-xl border overflow-hidden ${
          isOpen ? 'border-blue-500 shadow-lg shadow-blue-500/10' : 'border-gray-200 shadow-sm'
        }`}
      >
        <button
          className={`w-full py-5 px-6 text-left flex items-center justify-between gap-4 transition-colors ${
            isOpen ? 'bg-blue-50' : 'bg-white'
          }`}
          onClick={onToggle}
        >
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              isOpen ? 'bg-blue-500' : 'bg-gray-200'
            }`}>
              <HelpCircle className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-gray-500'}`} />
            </div>
            <span className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
              {question}
            </span>
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="px-6 pb-5 text-gray-600 text-base leading-relaxed">
            {answerContent.map((paragraph, idx) => (
              <p key={idx} className={paragraph === '' ? 'h-2' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <motion.div 
      className={`bg-white rounded-xl border overflow-hidden ${
        isOpen ? 'border-blue-500 shadow-lg shadow-blue-500/10' : 'border-gray-200 shadow-sm'
      }`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
  const isMobile = useIsMobile();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-gray-50 relative overflow-hidden">
      {/* Background decorations - desktop only */}
      {!isMobile && (
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
      )}

      <div 
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
        {!isMobile ? (
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
        ) : (
          <div className="flex justify-center">
            <svg 
              className="w-48 sm:w-64" 
              viewBox="0 0 400 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M2 8C80 2 320 2 398 8" 
                stroke="#3B82F6" 
                strokeWidth="5" 
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>
      
      <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <FAQItemComponent
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleFAQ(index)}
            index={index}
            isInView={isInView}
            isMobile={isMobile}
          />
        ))}
      </div>
    </Section>
  );
}
