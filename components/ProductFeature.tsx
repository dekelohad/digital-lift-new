'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import { ReactNode } from 'react';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from '@/lib/animations';
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
    <Section className={background === 'gray' ? 'bg-gray-50' : 'bg-white'}>
      <div 
        ref={ref}
        className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
      >
        {/* Content */}
        <motion.div 
          ref={contentRef}
          className="flex-1 px-4 sm:px-0"
          variants={isImageRight ? slideInLeft : slideInRight}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            variants={fadeInUp}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p 
              className="text-base sm:text-lg text-gray-700 mb-6 italic leading-relaxed"
              variants={fadeInUp}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
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
              <motion.li 
                key={index} 
                className="flex items-start"
                variants={staggerItem}
              >
                <BadgeCheck className="text-blue-600 mr-3 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-blue-600 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div 
          ref={imageRef}
          className="flex-1 px-4 sm:px-0"
          variants={isImageRight ? slideInRight : slideInLeft}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
        >
          {children || <VideoPlaceholder />}
        </motion.div>
      </div>
    </Section>
  );
}

