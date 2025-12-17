'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './Button';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          ref={ref}
          className="text-center mb-8 px-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={fadeInUp}
          >
            Website Design & Marketing Systems <span className="whitespace-nowrap">For Contractors</span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Marketing isn't magic and there's no miracle solution. Any agency promising instant results is selling hype. We build proven marketing systems that generate real opportunities, but lasting growth comes from commitment and consistency.
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <Button variant="primary" className="text-lg px-8 py-4">
            Book A Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

