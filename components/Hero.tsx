'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Star, Phone, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { staggerContainer } from '@/lib/animations';
import { useIsMobile } from '@/lib/useIsMobile';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Animated background gradient - desktop only */}
      {!isMobile && (
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/50" />
      
      {/* Animated mesh grid - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      )}
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px] pt-8 pb-16 lg:pt-12 lg:pb-24">
          
          {/* Left Column - Text Content */}
          <div 
            ref={ref}
            className="text-left"
          >
            <div className="mb-6">
              <AnimatedText variant="split" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white block whitespace-nowrap">
                Never Miss Another Job.
              </AnimatedText>
            </div>
            
            {isMobile ? (
              <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-xl leading-relaxed">
                While you're on the job, your phone keeps ringing. Our AI answers missed calls, texts the customer back instantly, and books the job for you — automatically.
              </p>
            ) : (
              <motion.p 
                className="text-gray-300 text-lg md:text-xl mb-6 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                While you're on the job, your phone keeps ringing. Our AI answers missed calls, texts the customer back instantly, and books the job for you — automatically.
              </motion.p>
            )}

            {/* Money-based proof line */}
            {isMobile ? (
              <p className="text-green-400 text-base font-semibold mb-8 max-w-xl">
                Contractors stop missing important calls within days of setup.
              </p>
            ) : (
              <motion.p 
                className="text-green-400 text-base font-semibold mb-8 max-w-xl"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                Contractors stop missing important calls within days of setup.
              </motion.p>
            )}

            {/* CTA with avatars */}
            {isMobile ? (
              <div className="flex flex-col items-center gap-3 mb-10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {['Jonathan', 'Marcus', 'David'].map((name) => (
                      <img 
                        key={name}
                        src={`/team/${name}.png`}
                        alt={name}
                        className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover"
                      />
                    ))}
                  </div>
                  <a 
                    href="/contact"
                    onClick={() => sessionStorage.setItem('scrollToBooking', 'true')}
                  >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center gap-2">
                      Book A Call
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </a>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Free setup call. No contracts. Cancel anytime.
                </p>
              </div>
            ) : (
              <motion.div 
                className="flex flex-col items-start gap-3 mb-10"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {['Jonathan', 'Marcus', 'David'].map((name, index) => (
                      <motion.img 
                        key={name}
                        src={`/team/${name}.png`}
                        alt={name}
                        className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover"
                        initial={{ opacity: 0, scale: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: 0.55 + index * 0.08 }}
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                      />
                    ))}
                  </div>
                  <a 
                    href="/contact"
                    onClick={() => sessionStorage.setItem('scrollToBooking', 'true')}
                  >
                    <motion.button 
                      className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all"
                      initial={{ opacity: 0, y: 25 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        y: 0,
                        boxShadow: [
                          "0 10px 25px -5px rgba(59, 130, 246, 0.25)",
                          "0 10px 40px -5px rgba(59, 130, 246, 0.4)",
                          "0 10px 25px -5px rgba(59, 130, 246, 0.25)"
                        ]
                      } : { opacity: 0, y: 25 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.65,
                        boxShadow: { duration: 2, repeat: Infinity, repeatDelay: 0.5 }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 15px 50px -5px rgba(59, 130, 246, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: 'easeInOut',
                        }}
                      />
                      {/* Pulsing glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-blue-400/50"
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        Book A Call
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                      </span>
                    </motion.button>
                  </a>
                </div>
                <motion.p 
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Free setup call. No contracts. Cancel anytime.
                </motion.p>
              </motion.div>
            )}

            {/* Trust badges */}
            {isMobile ? (
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                {/* Google */}
                <div className="flex items-center gap-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div>
                    <p className="text-white text-sm font-medium">Google</p>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-center gap-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#1877F2"/>
                    <path fill="#fff" d="M16.67 15.13l.37-2.4h-2.3v-1.56c0-.66.32-1.3 1.36-1.3h1.05V7.8s-.95-.16-1.86-.16c-1.9 0-3.14 1.15-3.14 3.23v1.83H9.86v2.4h2.29v5.8a9.1 9.1 0 002.82 0v-5.8h1.7z"/>
                  </svg>
                  <div>
                    <p className="text-white text-sm font-medium">Facebook</p>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trustpilot */}
                <div className="flex items-center gap-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#00B67A"/>
                    <path fill="#fff" d="M12 6l1.55 4.77h5.02l-4.06 2.95 1.55 4.77L12 15.54l-4.06 2.95 1.55-4.77-4.06-2.95h5.02L12 6z"/>
                  </svg>
                  <div>
                    <p className="text-white text-sm font-medium">Trustpilot</p>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-green-500 text-green-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                className="flex flex-wrap items-center gap-6 md:gap-8"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {/* Google */}
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div>
                    <p className="text-white text-sm font-medium">Google</p>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.25, delay: 0.75 + i * 0.05 }}
                        >
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Facebook */}
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#1877F2"/>
                    <path fill="#fff" d="M16.67 15.13l.37-2.4h-2.3v-1.56c0-.66.32-1.3 1.36-1.3h1.05V7.8s-.95-.16-1.86-.16c-1.9 0-3.14 1.15-3.14 3.23v1.83H9.86v2.4h2.29v5.8a9.1 9.1 0 002.82 0v-5.8h1.7z"/>
                  </svg>
                  <div>
                    <p className="text-white text-sm font-medium">Facebook</p>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.25, delay: 0.85 + i * 0.05 }}
                        >
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Trustpilot */}
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#00B67A"/>
                    <path fill="#fff" d="M12 6l1.55 4.77h5.02l-4.06 2.95 1.55 4.77L12 15.54l-4.06 2.95 1.55-4.77-4.06-2.95h5.02L12 6z"/>
                  </svg>
                  <div>
                    <p className="text-white text-sm font-medium">Trustpilot</p>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.25, delay: 0.95 + i * 0.05 }}
                        >
                          <Star className="w-3 h-3 fill-green-500 text-green-500" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Flow Visualization */}
          {isMobile ? (
            <div className="relative flex items-center justify-center lg:justify-end py-8">
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500">
                    <Phone className="w-8 h-8 text-red-400" />
                  </div>
                  <p className="text-xs text-gray-400 text-center">Missed Call</p>
                </motion.div>
                <ArrowRight className="w-6 h-6 text-gray-500" />
                <motion.div
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500">
                    <MessageSquare className="w-8 h-8 text-green-400" />
                  </div>
                  <p className="text-xs text-gray-400 text-center">Instant Text</p>
                </motion.div>
                <ArrowRight className="w-6 h-6 text-gray-500" />
                <motion.div
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-500">
                    <Calendar className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-xs text-gray-400 text-center">Job Booked</p>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div 
              className="relative flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {/* Background glow effects */}
              <motion.div 
                className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Flow visualization */}
              <div className="relative z-10 flex items-center gap-6 lg:gap-8">
                {/* Missed Call */}
                <motion.div
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500 shadow-lg shadow-red-500/30"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Phone className="w-12 h-12 text-red-400" />
                  </motion.div>
                  <p className="text-sm font-semibold text-gray-300 text-center">Missed Call</p>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <ArrowRight className="w-8 h-8 text-blue-400" />
                </motion.div>

                {/* Instant Text */}
                <motion.div
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500 shadow-lg shadow-green-500/30"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  >
                    <MessageSquare className="w-12 h-12 text-green-400" />
                  </motion.div>
                  <p className="text-sm font-semibold text-gray-300 text-center">Instant Text</p>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <ArrowRight className="w-8 h-8 text-blue-400" />
                </motion.div>

                {/* Job Booked */}
                <motion.div
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-500 shadow-lg shadow-blue-500/30"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  >
                    <Calendar className="w-12 h-12 text-blue-400" />
                  </motion.div>
                  <p className="text-sm font-semibold text-gray-300 text-center">Job Booked</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
