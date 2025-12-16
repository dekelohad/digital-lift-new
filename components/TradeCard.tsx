'use client';

import { motion } from 'framer-motion';
import { cardHover } from '@/lib/animations';

interface TradeCardProps {
  name: string;
}

export default function TradeCard({ name }: TradeCardProps) {
  return (
    <motion.div 
      className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 text-center"
      whileHover={cardHover}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div 
        className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-blue-700 text-base sm:text-lg font-bold">{name.charAt(0)}</span>
      </motion.div>
      <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">{name}</h3>
    </motion.div>
  );
}

