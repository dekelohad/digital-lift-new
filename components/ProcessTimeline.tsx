'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Section from './Section';
import { staggerContainer } from '@/lib/animations';
import AnimatedText from './AnimatedText';

const steps = [
  {
    title: 'Demo Call',
    duration: '20 mins',
    description: "It's actually a sales call, we just didn't want to scare you. But seriously... we'll answer all your questions, show you any features you have questions about, and show you live client accounts & results.",
    icon: '📞'
  },
  {
    title: 'We build your system',
    duration: '7-10 days',
    description: "Fill out a basic onboarding form with your business details. After we have the correct information, we'll get to work on building your new website & marketing system.",
    icon: '🔨'
  },
  {
    title: 'Launch Call',
    duration: '25 mins',
    description: 'We\'ll walk you through your new website & marketing system, answer any questions you have, and show you how "everything" works... And by everything, we\'re really just talking about pressing two buttons.',
    icon: '🚀'
  }
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section className="bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-50"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Floating shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-blue-200 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        ref={ref}
        className="text-center mb-16 relative z-10"
      >
        <AnimatedText 
          variant="split" 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 inline-block"
        >
          What working with us looks like...
        </AnimatedText>
        
        {/* Animated underline */}
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
      </motion.div>

      <motion.div 
        className="max-w-3xl mx-auto px-4 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {steps.map((step, index) => (
          <TimelineStep key={index} step={step} index={index} isInView={isInView} isLast={index === steps.length - 1} />
        ))}
      </motion.div>
    </Section>
  );
}

function TimelineStep({ 
  step, 
  index, 
  isInView,
  isLast
}: { 
  step: typeof steps[0]; 
  index: number; 
  isInView: boolean;
  isLast: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative flex gap-6 sm:gap-8"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.7, delay: index * 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        {/* Number circle with animations */}
        <motion.div 
          className="relative w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl shadow-lg shadow-blue-600/30 z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ 
            delay: index * 0.3 + 0.3, 
            type: "spring", 
            stiffness: 200, 
            damping: 15 
          }}
          whileHover={{ scale: 1.15 }}
        >
          {/* Pulse ring on hover */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400"
            animate={isHovered ? { scale: [1, 1.4, 1.4], opacity: [0.5, 0, 0] } : {}}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          />
          
          {/* Icon or number */}
          <motion.span
            animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {step.icon}
          </motion.span>
        </motion.div>
        
        {/* Connecting line */}
        {!isLast && (
          <div className="relative w-1 flex-1 min-h-[100px]">
            <motion.div 
              className="absolute inset-0 bg-blue-300 rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ delay: index * 0.3 + 0.6, duration: 0.5 }}
            />
            {/* Animated dot traveling down the line */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"
              animate={isInView ? { 
                y: [0, 100],
                opacity: [0, 1, 0],
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: index * 0.3 + 1,
                repeatDelay: 1
              }}
            />
          </div>
        )}
      </div>

      {/* Content card */}
      <motion.div 
        className={`flex-1 ${!isLast ? 'pb-12' : ''}`}
        animate={isHovered ? { x: 10 } : { x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
          animate={isHovered ? { 
            boxShadow: '0 20px 40px -12px rgba(59, 130, 246, 0.2)',
            borderColor: 'rgb(59, 130, 246)',
          } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-3">
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-gray-900"
              animate={isHovered ? { color: 'rgb(37 99 235)' } : { color: 'rgb(17 24 39)' }}
            >
              {step.title}
            </motion.h3>
            <motion.span 
              className="bg-blue-100 text-blue-600 font-semibold text-sm sm:text-base px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              {step.duration}
            </motion.span>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
