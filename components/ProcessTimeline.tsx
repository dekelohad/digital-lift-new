'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const steps = [
  {
    title: 'Demo Call',
    duration: '20 mins',
    description: "It's actually a sales call, we just didn't want to scare you. But seriously... we'll answer all your questions, show you any features you have questions about, and show you live client accounts & results."
  },
  {
    title: 'We build your system',
    duration: '7-10 days',
    description: "Fill out a basic onboarding form with your business details. After we have the correct information, we'll get to work on building your new website & marketing system."
  },
  {
    title: 'Launch Call',
    duration: '25 mins',
    description: 'We\'ll walk you through your new website & marketing system, answer any questions you have, and show you how "everything" works... And by everything, we\'re really just talking about pressing two buttons.'
  }
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section className="bg-gray-50">
      <motion.div 
        ref={ref}
        className="text-center mb-16"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What working with us looks like...
        </h2>
        <div className="flex justify-center">
          <svg className="w-64 sm:w-80 md:w-96" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8C80 2 320 2 398 8" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.div>

      <motion.div 
        className="max-w-3xl mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="relative flex gap-6 sm:gap-8"
            variants={staggerItem}
          >
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  delay: index * 0.2 + 0.5, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15 
                }}
                whileHover={{ scale: 1.1 }}
              >
                {index + 1}
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div 
                  className="w-0.5 bg-blue-300 flex-1 min-h-[80px]"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: '100%' } : { height: 0 }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.4 }}
                />
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 ${index < steps.length - 1 ? 'pb-12' : ''}`}>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <span className="text-blue-600 font-semibold text-sm sm:text-base">
                  ({step.duration})
                </span>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

