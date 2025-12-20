'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';
import { useIsMobile } from '@/lib/useIsMobile';

export default function ProductIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  return (
    <Section className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-200 rounded-lg"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 bg-blue-50 rounded-full"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-12 h-12 border-2 border-purple-200"
            animate={{
              rotate: [0, 180, 360],
              x: [0, 20, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-20 w-8 h-8 bg-cyan-100 rounded-full"
            animate={{
              y: [0, 20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Sparkles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-300"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                fontSize: '12px',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              ✦
            </motion.div>
          ))}
        </div>
      )}

      <div 
        ref={ref}
        className="text-center px-4 relative z-10"
      >
        {/* Main heading with split animation */}
        <div className="mb-4 sm:mb-6">
          <AnimatedText 
            variant="split" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight inline-block"
          >
            Simple systems that actually work
          </AnimatedText>
        </div>
        
        {/* Animated underline SVG */}
        {!isMobile ? (
          <div className="flex justify-center mb-4">
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
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              />
            </motion.svg>
          </div>
        ) : (
          <div className="flex justify-center mb-4">
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
        
        {/* Subtitle with gradient */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-medium">
          {isMobile ? (
            <>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                No tech skills needed.
              </span>
              {' '}Just tools that help you win more jobs.
            </>
          ) : (
            <>
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{
                  backgroundPosition: ['0% center', '200% center'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                No tech skills needed.
              </motion.span>
              {' '}Just tools that help you win more jobs.
            </>
          )}
        </p>
      </div>
    </Section>
  );
}
