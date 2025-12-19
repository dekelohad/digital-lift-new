'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/50" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px] py-16 lg:py-24">
          
          {/* Left Column - Text Content */}
          <motion.div 
            ref={ref}
            className="text-left"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="text-white">Website Design &</span>
              <br />
              <span className="text-white">Marketing Systems</span>
              <br />
              <span className="text-white">For Contractors</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
              variants={fadeInUp}
            >
              Marketing isn't magic and there's no miracle solution. Any agency promising instant results is selling hype. We build proven marketing systems that generate real opportunities, but lasting growth comes from commitment and consistency.
            </motion.p>

            {/* CTA with avatars */}
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
              variants={fadeInUp}
            >
              {/* Avatar group */}
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
              
              <Link href="/contact">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Book A Call
                </button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 md:gap-8"
              variants={fadeInUp}
            >
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
            </motion.div>
          </motion.div>

          {/* Right Column - Big Rocket */}
          <motion.div 
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Multiple glow effects */}
            <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
            <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-x-20 -translate-y-10" />
            <div className="absolute w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl -translate-x-10 translate-y-20" />
            
            {/* Rocket */}
            <motion.div 
              className="relative z-10 text-[200px] sm:text-[280px] md:text-[320px] lg:text-[380px] leading-none select-none"
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              🚀
            </motion.div>

            {/* Star particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute text-white"
                style={{
                  top: `${10 + Math.random() * 80}%`,
                  left: `${Math.random() * 100}%`,
                  fontSize: `${8 + Math.random() * 16}px`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                ✦
              </motion.div>
            ))}

            {/* Floating dots - Blue */}
            <motion.div 
              className="absolute top-[5%] right-[15%] w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
              animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            />
            <motion.div 
              className="absolute top-[15%] right-[5%] w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50"
              animate={{ y: [0, -15, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="absolute top-[25%] left-[5%] w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
              animate={{ y: [0, -25, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.6 }}
            />

            {/* Floating dots - Yellow/Orange */}
            <motion.div 
              className="absolute bottom-[25%] left-[10%] w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
              animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div 
              className="absolute bottom-[40%] right-[8%] w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50"
              animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div 
              className="absolute top-[40%] right-[25%] w-2.5 h-2.5 bg-amber-300 rounded-full shadow-lg shadow-amber-300/50"
              animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: 1.1 }}
            />

            {/* Floating dots - Purple/Pink */}
            <motion.div 
              className="absolute top-[10%] left-[20%] w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
              animate={{ y: [0, -14, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: 0.4 }}
            />
            <motion.div 
              className="absolute bottom-[15%] right-[20%] w-3 h-3 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"
              animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3.3, repeat: Infinity, delay: 0.9 }}
            />
            <motion.div 
              className="absolute top-[50%] left-[0%] w-2 h-2 bg-fuchsia-400 rounded-full shadow-lg shadow-fuchsia-400/50"
              animate={{ y: [0, -16, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.9, repeat: Infinity, delay: 1.4 }}
            />

            {/* Floating dots - Cyan/Green */}
            <motion.div 
              className="absolute top-[60%] right-[0%] w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
              animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3.1, repeat: Infinity, delay: 0.7 }}
            />
            <motion.div 
              className="absolute bottom-[35%] left-[25%] w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
              animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: 1.2 }}
            />
            <motion.div 
              className="absolute top-[35%] left-[15%] w-3 h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50"
              animate={{ y: [0, -22, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.6, repeat: Infinity, delay: 0.5 }}
            />

            {/* Extra small sparkle dots */}
            <motion.div 
              className="absolute top-[20%] right-[30%] w-1.5 h-1.5 bg-white rounded-full"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            />
            <motion.div 
              className="absolute top-[70%] left-[30%] w-1.5 h-1.5 bg-white rounded-full"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
            />
            <motion.div 
              className="absolute top-[45%] right-[10%] w-1 h-1 bg-white rounded-full"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: 1.3, repeat: Infinity, delay: 1.2 }}
            />
            <motion.div 
              className="absolute bottom-[50%] left-[5%] w-1 h-1 bg-white rounded-full"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
