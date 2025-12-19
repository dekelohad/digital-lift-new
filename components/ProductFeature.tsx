'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Section from './Section';
import { ReactNode } from 'react';
import { slideInLeft, slideInRight, staggerContainer } from '@/lib/animations';
import { BadgeCheck } from 'lucide-react';
import VideoPlaceholder from './VideoPlaceholder';

interface Feature {
  title: string;
  description: string;
}

interface ProductFeatureProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  imageSide?: 'left' | 'right';
  children?: ReactNode;
  background?: 'white' | 'gray';
}

export default function ProductFeature({
  title,
  subtitle,
  features,
  imageSide = 'right',
  children,
  background = 'white'
}: ProductFeatureProps) {
  const isImageRight = imageSide === 'right';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-50px' });
  const imageInView = useInView(imageRef, { once: true, margin: '-50px' });

  return (
    <Section className={`${background === 'gray' ? 'bg-gray-50' : 'bg-white'} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div
          className={`absolute ${isImageRight ? 'right-0' : 'left-0'} top-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div 
        ref={ref}
        className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 relative z-10`}
      >
        {/* Content */}
        <motion.div 
          ref={contentRef}
          className="flex-1 px-4 sm:px-0"
          variants={isImageRight ? slideInLeft : slideInRight}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          {/* Title with reveal animation */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              className="text-base sm:text-lg text-gray-700 mb-6 italic leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.ul 
            className="space-y-4 sm:space-y-5"
            variants={staggerContainer}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} index={index} isInView={contentInView} />
            ))}
          </motion.ul>
        </motion.div>

        {/* Video Placeholder with enhanced animation */}
        <motion.div 
          ref={imageRef}
          className="flex-1 px-4 sm:px-0"
          initial={{ opacity: 0, x: isImageRight ? 60 : -60, scale: 0.95 }}
          animate={imageInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isImageRight ? 60 : -60, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {children || <VideoPlaceholder />}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

function FeatureItem({ feature, index, isInView }: { feature: Feature; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li 
      className="flex items-start group"
      initial={{ opacity: 0, x: -25 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative"
        animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <BadgeCheck className="text-blue-600 mr-3 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
        {/* Pulse ring on hover */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400"
          initial={{ scale: 1, opacity: 0 }}
          animate={isHovered ? { scale: 1.5, opacity: [0, 0.5, 0] } : { scale: 1, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
      <div>
        <motion.h3 
          className="text-base sm:text-lg font-semibold text-blue-600 mb-1"
          animate={isHovered ? { x: 5 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p 
          className="text-sm sm:text-base text-gray-600 leading-relaxed"
          animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
        >
          {feature.description}
        </motion.p>
      </div>
    </motion.li>
  );
}
