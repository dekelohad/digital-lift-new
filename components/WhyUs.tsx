'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, DollarSign, FileX, Shield, TrendingUp, Headphones } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const reasons = [
  {
    icon: Zap,
    title: 'Built for Busy Contractors',
    description: "You're on job sites, not behind a desk. Our systems run on autopilot so you can focus on the work."
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: "We price to keep you for 10+ years. No crazy fees, no surprises. Just honest value."
  },
  {
    icon: FileX,
    title: 'No Long-Term Contracts',
    description: "Stay because it works, not because you're locked in. Cancel anytime, no questions asked."
  },
  {
    icon: Shield,
    title: 'No Fluff, Just Results',
    description: "We don't sell you dreams. We tell you exactly what we do, then we do it. Period."
  },
  {
    icon: TrendingUp,
    title: 'Proven With Real Contractors',
    description: "We work with contractors every day. We know what works because we've seen it work."
  },
  {
    icon: Headphones,
    title: 'Real Human Support',
    description: "No chatbots, no ticket queues. Real people who actually pick up the phone when you call."
  }
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-slate-900 overflow-hidden">
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
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Why contractors choose us...
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400">
            (and actually stay)
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 hover:border-blue-500 transition-colors"
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
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
