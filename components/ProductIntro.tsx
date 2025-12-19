'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import { fadeInUp } from '@/lib/animations';

export default function ProductIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section className="py-16 sm:py-20 md:py-28">
      <motion.div 
        ref={ref}
        className="text-center px-4"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Simple systems that actually work
        </h2>
        <div className="flex justify-center mb-4">
          <svg className="w-64 sm:w-80 md:w-96" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8C80 2 320 2 398 8" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round"/>
          </svg>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-medium">
          No tech skills needed. Just tools that help you win more jobs.
        </p>
      </motion.div>
    </Section>
  );
}

