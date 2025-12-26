'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { staggerContainer } from '@/lib/animations';
import AnimatedText from './AnimatedText';
import { useIsMobile } from '@/lib/useIsMobile';

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
  const isMobile = useIsMobile();

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Animated background - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0">
          {/* Floating orbs */}
          <motion.div
            className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              y: [0, -40, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="trades-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#trades-grid)" />
            </svg>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div
          ref={ref}
          className="text-center mb-12"
        >
          <AnimatedText 
            variant="split" 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 inline-block"
          >
            Serving all these trades and more...
          </AnimatedText>
          
          {/* Animated underline */}
          {!isMobile ? (
            <div className="flex justify-center">
              <motion.svg 
                className="w-64 sm:w-80 md:w-96" 
                viewBox="0 0 400 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path 
                  d="M2 8C80 2 320 2 398 8" 
                  stroke="#3B82F6" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.svg>
            </div>
          ) : (
            <div className="flex justify-center">
              <svg 
                className="w-64 sm:w-80 md:w-96" 
                viewBox="0 0 400 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2 8C80 2 320 2 398 8" 
                  stroke="#3B82F6" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trades.map((trade, index) => (
            <TradeCard key={index} trade={trade} index={index} isInView={isInView} isMobile={isMobile} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/trades-we-serve">
            {isMobile ? (
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-blue-500/25">
                See All Trades We Work With →
              </button>
            ) : (
              <motion.button
                className="group relative inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg overflow-hidden shadow-lg shadow-blue-500/25"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  See All Trades We Work With
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}

function TradeCard({ 
  trade, 
  index, 
  isInView,
  isMobile
}: { 
  trade: typeof trades[0]; 
  index: number; 
  isInView: boolean;
  isMobile: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (isMobile) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-48 sm:h-56">
          <Image
            src={trade.image}
            alt={trade.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            {trade.name}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg relative"
      initial={{ opacity: 0, y: 60, rotateY: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 60, rotateY: 15 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image container with zoom effect */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={trade.image}
            alt={trade.name}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Floating badge on hover */}
        <motion.div
          className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full"
          initial={{ opacity: 0, scale: 0, y: -10 }}
          animate={isHovered ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          ✓ We Serve
        </motion.div>
      </div>
      
      {/* Content */}
      <motion.div 
        className="p-4 text-center relative"
        animate={{ backgroundColor: isHovered ? 'rgb(239 246 255)' : 'white' }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-lg font-semibold text-gray-900"
          animate={isHovered ? { scale: 1.05, color: 'rgb(37 99 235)' } : { scale: 1, color: 'rgb(17 24 39)' }}
          transition={{ duration: 0.3 }}
        >
          {trade.name}
        </motion.h3>
        
        {/* Animated underline */}
        <motion.div
          className="h-0.5 bg-blue-500 mx-auto mt-2"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '50%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

