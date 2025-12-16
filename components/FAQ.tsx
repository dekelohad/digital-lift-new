'use client';

import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import { ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqs: FAQItem[] = [
  {
    question: 'When am I going to start seeing results?',
    answer: [
      "This will completely depend on what else you're doing for advertising, how long you've been in business, the quality of your work, and of course that you commit to using our system. If you think you're going to close your eyes and pay us $297/month a month to solve all your problems, we're probably not the right fit for you. We cannot stress this enough... you have to be doing multiple forms of advertising. Digital Lift is meant to provide you a simple, yet extremely effective foundational marketing system to help grow and expand your business. We're here to build your online business foundation, not perform miracles.",
      '',
      '"Explain how you help me grow my business"',
      '',
      'Sure...',
      '',
      '1. Do you believe having more 5 star reviews will attract more customers?',
      '2. Do you believe that being able to be found online and having a professional website that actually works will help you convert more leads into paying customers?',
      '3. Do you believe that instantly following up with incoming leads will make you look more professional, therefore leading to more business?',
      "4. Do you believe making sure you're making the most of every customer you work with by putting them into automated re-marketing campaigns will make them more likely to work with you again",
      '5. Do you believe offering discounts for friends of your past customers will increase the number of referrals you get?',
      '6. Do you believe using automation and AI could free you from repeating the same basic tasks in your business, therefore giving you more time for other things?',
      '7. Do you believe having these systems in place is important to grow your business?',
      '',
      "If you believe any of those things can grow your business, that's exactly what we can help you with."
    ]
  },
  {
    question: 'Why is your pricing so cheap?',
    answer: 'Our only interest is keeping you for 10+ years. We believe the best way to do that is to be priced affordably. We believe if we don\'t overcharge and provide you with excellent service, you\'ll never have a reason to leave.'
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

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string | string[]; isOpen: boolean; onToggle: () => void }) {
  const answerContent = Array.isArray(answer) ? answer : [answer];

  return (
    <motion.div 
      className="border-b border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        className="w-full py-4 sm:py-6 text-left flex items-center justify-between gap-4"
        onClick={onToggle}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-2 sm:pr-4 leading-snug">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="pb-4 sm:pb-6 text-gray-700 space-y-2 text-sm sm:text-base leading-relaxed overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {answerContent.map((paragraph, index) => (
              <motion.p 
                key={index} 
                className={paragraph === '' ? 'h-2' : ''}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {paragraph}
              </motion.p>
            ))}
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
    <Section className="bg-gray-50">
      <motion.div 
        ref={ref}
        className="text-center mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
      </motion.div>
      <motion.div 
        className="max-w-4xl mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </motion.div>
    </Section>
  );
}

