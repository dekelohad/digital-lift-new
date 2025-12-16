'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cardHover } from '@/lib/animations';

interface TestimonialCardProps {
  name: string;
  quote: string;
}

export default function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-white p-5 sm:p-6 rounded-lg shadow-md border border-gray-200"
      whileHover={cardHover}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic leading-relaxed">"{quote}"</p>
      <p className="text-gray-900 font-semibold mb-2 text-sm sm:text-base">-{name}</p>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <Link 
          href="/testimonials" 
          className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium inline-block"
        >
          See All →
        </Link>
      </motion.div>
    </motion.div>
  );
}

