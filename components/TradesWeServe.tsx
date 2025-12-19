'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const trades = [
  { name: 'Landscapers', image: '/tradesWeServe/Landscapers.webp' },
  { name: 'Pressure Washer', image: '/tradesWeServe/Pressure Washer.webp' },
  { name: 'Moving Companies', image: '/tradesWeServe/Moving Companies.webp' },
  { name: 'Remodeling', image: '/tradesWeServe/Remodeling.webp' },
  { name: 'Pest Control', image: '/tradesWeServe/ Pest Control Pest Control.webp' },
  { name: 'Floor & Carpet Cleaning', image: '/tradesWeServe/Floor & Carpet Cleaning.webp' },
];

export default function TradesWeServe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Serving all these trades and more...
          </h2>
          <div className="flex justify-center">
            <svg className="w-64 sm:w-80 md:w-96" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8C80 2 320 2 398 8" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {trades.map((trade, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 sm:h-56">
                <Image
                  src={trade.image}
                  alt={trade.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{trade.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/trades-we-serve"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            See All Trades We Work With
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
