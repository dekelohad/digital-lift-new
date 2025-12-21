'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/lib/useIsMobile';

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
  const isMobile = useIsMobile();

  return (
    <section className={`relative py-20 sm:py-28 md:py-36 overflow-hidden ${className}`}>
      {/* Animated gradient background - desktop only */}
      {!isMobile ? (
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)',
              'linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #4f46e5 100%)',
              'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600" />
      )}
      
      {/* Animated orbs - desktop only */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
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
              x: [0, -50, 0],
              y: [0, -80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-400 rounded-full opacity-30 blur-2xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-400 rounded-full opacity-20 blur-2xl"
            animate={{
              y: [0, 60, 0],
              x: [0, -40, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Floating sparkles - desktop only */}
      {!isMobile && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/50 text-xs"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -50, -100],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          ✦
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <div 
          ref={ref}
          className="text-center"
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {title}
          </h2>
          
          {description && (
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://api.digitallift.io/widget/booking/jpGifmdOeIbfiftmjQ2w" 
              target="_blank"
              rel="noopener noreferrer"
            >
              {isMobile ? (
                <button className="bg-white text-blue-600 font-bold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-2xl shadow-blue-900/30 flex items-center gap-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{buttonText}</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              ) : (
                <motion.button
                  className="group relative bg-white text-blue-600 font-bold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-2xl shadow-blue-900/30 flex items-center gap-3 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shimmer effect */}
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                  <span className="relative z-10">{buttonText}</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                </motion.button>
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
