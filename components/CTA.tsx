'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

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
    <section className={`relative py-20 sm:py-28 md:py-36 overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <motion.div 
          ref={ref}
          className="text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Sparkle icon */}
          <motion.div
            className="flex justify-center mb-6"
            variants={fadeInUp}
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            variants={fadeInUp}
          >
            {title}
          </motion.h2>
          
          {description && (
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              {description}
            </motion.p>
          )}
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              className="group relative bg-white text-blue-600 font-bold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-2xl shadow-blue-900/30 flex items-center gap-3 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              <span className="relative z-10">{buttonText}</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

