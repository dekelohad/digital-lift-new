'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import TradeCard from './TradeCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const trades = [
  'Landscapers',
  'Remodeling',
  'Pressure Washer',
  'Pest Control',
  'Moving Companies',
  'Flooring & Carpet Cleaning',
  'Roofing',
  'HVAC',
  'Plumbing',
  'Electrician',
  'Handyman',
  'Painters',
  'Decks & Patios',
  'Siding',
  'Pool Construction',
  'Paving',
  'Hardscaping',
  'Windows & Doors',
  'General Contractors',
  'Dog Groomers',
  'Tree Service',
  'Home Builders'
];

export default function TradesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section className="bg-gray-50">
      <motion.div 
        ref={ref}
        className="text-center mb-8 sm:mb-12 px-4"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          Serving all these trades and more...
        </h2>
      </motion.div>
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {trades.map((trade, index) => (
          <TradeCard key={index} name={trade} />
        ))}
      </motion.div>
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.a 
          href="#trades" 
          className="text-blue-600 hover:text-blue-700 font-semibold inline-block"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          See All Trades We Work With
        </motion.a>
      </motion.div>
    </Section>
  );
}

