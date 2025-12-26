'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useIsMobile } from '@/lib/useIsMobile';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'reveal' | 'typewriter' | 'gradient' | 'split';
  delay?: number;
}

export default function AnimatedText({ 
  children, 
  className = '',
  variant = 'reveal',
  delay = 0
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isMobile = useIsMobile();
  
  const text = typeof children === 'string' ? children : '';

  // On mobile, just render static text
  if (isMobile) {
    return <span ref={ref} className={className}>{children}</span>;
  }

  if (variant === 'typewriter' && typeof children === 'string') {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{
              duration: 0.04,
              delay: delay + index * 0.02,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (variant === 'gradient') {
    return (
      <motion.span
        ref={ref}
        className={`bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
        initial={{ opacity: 0, backgroundPosition: '0% center' }}
        animate={isInView ? { 
          opacity: 1, 
          backgroundPosition: ['0% center', '100% center', '0% center']
        } : { opacity: 0 }}
        transition={{
          opacity: { duration: 0.5, delay },
          backgroundPosition: { duration: 5, repeat: Infinity, ease: 'linear' }
        }}
      >
        {children}
      </motion.span>
    );
  }

  if (variant === 'split' && typeof children === 'string') {
    const words = text.split(' ');
    return (
      <span ref={ref} className={className}>
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              initial={{ y: '100%', rotateX: 60 }}
              animate={isInView ? { y: 0, rotateX: 0 } : { y: '100%', rotateX: 60 }}
              transition={{
                duration: 0.5,
                delay: delay + index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  // Default: reveal
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

