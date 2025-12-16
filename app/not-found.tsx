'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function NotFound() {

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          className="container mx-auto max-w-4xl text-center relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Large 404 Number */}
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <motion.h1
              className="text-9xl sm:text-[12rem] md:text-[16rem] font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent leading-none"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.h1>
          </motion.div>

          {/* Error Message */}
          <motion.div variants={fadeInUp} className="mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off. 
              Don't worry, let's get you back on track!
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center items-center mt-12 w-full"
          >
            <Link href="/" className="inline-block">
              <Button variant="primary" className="text-xl sm:text-2xl px-12 py-5 sm:px-16 sm:py-6">
                Go Back Home
              </Button>
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex justify-center gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-600 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
