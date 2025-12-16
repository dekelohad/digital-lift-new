'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './Button';
import Section from './Section';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface CTAProps {
  title: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

export default function CTA({ 
  title, 
  description, 
  buttonText = 'Book A Call',
  className = '' 
}: CTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white ${className}`}>
      <motion.div 
        ref={ref}
        className="text-center px-4"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight"
          variants={fadeInUp}
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p 
            className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed"
            variants={fadeInUp}
          >
            {description}
          </motion.p>
        )}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            {buttonText}
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}

