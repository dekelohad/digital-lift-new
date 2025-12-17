'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import { fadeInUp, scaleIn } from '@/lib/animations';

export default function ProductIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: '-50px' });

  return (
    <Section>
      <motion.div 
        ref={ref}
        className="text-center mb-8 sm:mb-12 px-4"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          Simple systems built for real contractors
        </h2>
        <p className="text-lg sm:text-xl text-gray-700">
          No tech skills needed. Just tools that help you win more jobs.
        </p>
      </motion.div>
      <motion.div 
        ref={imageRef}
        className="flex justify-center px-4"
        variants={scaleIn}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="w-full max-w-2xl h-48 sm:h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-gray-500 text-sm sm:text-base">website animation</span>
        </motion.div>
      </motion.div>
    </Section>
  );
}

