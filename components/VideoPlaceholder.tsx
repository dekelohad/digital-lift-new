'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useIsMobile } from '@/lib/useIsMobile';

export default function VideoPlaceholder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div 
        ref={ref}
        className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-lg border border-gray-200 overflow-hidden relative cursor-pointer"
      >
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/30">
            <svg 
              className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        {/* Video label */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-gray-600">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            Watch Demo
          </span>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      ref={ref}
      className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-lg border border-gray-200 overflow-hidden relative cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="video-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#video-grid)" className="text-gray-400" />
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center transition-all group">
        {/* Pulse rings */}
        <motion.div
          className="absolute w-24 h-24 sm:w-28 sm:h-28 border-2 border-blue-400 rounded-full opacity-30"
          animate={isHovered ? {
            scale: [1, 1.5],
            opacity: [0.3, 0],
          } : {}}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        />
        <motion.div
          className="absolute w-24 h-24 sm:w-28 sm:h-28 border-2 border-blue-400 rounded-full opacity-30"
          animate={isHovered ? {
            scale: [1, 1.5],
            opacity: [0.3, 0],
          } : {}}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0, delay: 0.5 }}
        />
        
        {/* Play button */}
        <motion.div 
          className="relative w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/30"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-blue-500 rounded-full blur-md"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Play icon */}
          <motion.svg 
            className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1 relative z-10" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            animate={isHovered ? { x: 2 } : { x: 0 }}
          >
            <path d="M8 5v14l11-7z"/>
          </motion.svg>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400/30 rounded-tl-lg"
        animate={isHovered ? { scale: 1.1, opacity: 0.6 } : { scale: 1, opacity: 0.3 }}
      />
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400/30 rounded-tr-lg"
        animate={isHovered ? { scale: 1.1, opacity: 0.6 } : { scale: 1, opacity: 0.3 }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-400/30 rounded-bl-lg"
        animate={isHovered ? { scale: 1.1, opacity: 0.6 } : { scale: 1, opacity: 0.3 }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400/30 rounded-br-lg"
        animate={isHovered ? { scale: 1.1, opacity: 0.6 } : { scale: 1, opacity: 0.3 }}
      />

      {/* Video label */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-gray-600"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="flex items-center gap-2"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        >
          <motion.span
            className="w-2 h-2 bg-red-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          Watch Demo
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
