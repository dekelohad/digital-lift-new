'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const steps = [
  {
    title: 'Demo Call',
    subtitle: '(20 mins)',
    description: "It's actually a sales call, we just didn't want to scare you. But seriously... we'll answer all your questions, show you any features you have questions about, and see if we're a good fit to partner with…"
  },
  {
    title: 'Onboarding',
    description: 'We get to know your business and set up your account.'
  },
  {
    title: 'Setup',
    description: 'We build your website and configure all your marketing systems.'
  },
  {
    title: 'Launch',
    description: 'Your website goes live and systems are activated.'
  },
  {
    title: 'Ongoing Support',
    description: 'We continue to support you and help grow your business.'
  }
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section>
      <motion.div 
        ref={ref}
        className="text-center mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What working with us looks like...
        </h2>
        <motion.div 
          className="w-24 h-1 bg-gray-300 mx-auto my-6"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : { width: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      <motion.div 
        className="space-y-6 sm:space-y-8 max-w-4xl mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="flex gap-4 sm:gap-6"
            variants={staggerItem}
          >
            <div className="flex-shrink-0">
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  delay: index * 0.1 + 0.5, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15 
                }}
                whileHover={{ scale: 1.1 }}
              >
                {index + 1}
              </motion.div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {step.title} {step.subtitle && <span className="text-gray-600 font-normal text-base sm:text-lg">{step.subtitle}</span>}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

