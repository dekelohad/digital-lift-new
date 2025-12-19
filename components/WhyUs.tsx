'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Zap, DollarSign, FileX, Shield, TrendingUp, Headphones } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import AnimatedText from './AnimatedText';

const reasons = [
  {
    icon: Zap,
    title: 'Built for Busy Contractors',
    description: "You're on job sites, not behind a desk. Our systems run on autopilot so you can focus on the work.",
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: "We price to keep you for 10+ years. No crazy fees, no surprises. Just honest value.",
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: FileX,
    title: 'No Long-Term Contracts',
    description: "Stay because it works, not because you're locked in. Cancel anytime, no questions asked.",
    color: 'from-red-400 to-pink-500'
  },
  {
    icon: Shield,
    title: 'No Fluff, Just Results',
    description: "We don't sell you dreams. We tell you exactly what we do, then we do it. Period.",
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: TrendingUp,
    title: 'Proven With Real Contractors',
    description: "We work with contractors every day. We know what works because we've seen it work.",
    color: 'from-purple-400 to-violet-500'
  },
  {
    icon: Headphones,
    title: 'Real Human Support',
    description: "No chatbots, no ticket queues. Real people who actually pick up the phone when you call.",
    color: 'from-cyan-400 to-blue-500'
  }
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="whyus-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#whyus-grid)" />
          </svg>
        </div>

        {/* Floating stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 12}px`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V60Z" fill="#F9FAFB"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
        >
          <AnimatedText 
            variant="split" 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 inline-block"
          >
            Why contractors choose us...
          </AnimatedText>
          
          {/* Animated underline */}
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
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </motion.svg>
          </div>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
          >
            (and actually stay)
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
  );
}

function ReasonCard({ 
  reason, 
  index, 
  isInView 
}: { 
  reason: typeof reasons[0]; 
  index: number; 
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = reason.icon;

  return (
    <motion.div
      className="relative bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 overflow-hidden"
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        borderColor: 'rgb(59, 130, 246)',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Gradient glow on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 blur-xl`}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
        animate={{ x: isHovered ? '200%' : '-100%' }}
        transition={{ duration: 0.6 }}
      />

      {/* Icon with gradient background */}
      <div className={`w-12 h-12 bg-gradient-to-br ${reason.color} rounded-lg flex items-center justify-center mb-4`}>
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      
      <motion.h3 
        className="text-xl font-bold text-white mb-2 relative z-10"
        animate={isHovered ? { x: 5 } : { x: 0 }}
      >
        {reason.title}
      </motion.h3>
      
      <p className="text-gray-400 leading-relaxed relative z-10">{reason.description}</p>

      {/* Corner decoration */}
      <motion.div
        className="absolute -bottom-10 -right-10 w-20 h-20 border border-slate-600 rounded-full opacity-20"
        animate={isHovered ? { scale: 1.5, opacity: 0.1 } : { scale: 1, opacity: 0.2 }}
      />
    </motion.div>
  );
}
