'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './Button';
import Section from './Section';
import Link from 'next/link';
import { ReactNode } from 'react';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from '@/lib/animations';

interface ProductFeatureProps {
  title: string;
  subtitle?: string;
  features: string[];
  demoButton?: boolean;
  imageSide?: 'left' | 'right';
  children?: ReactNode;
  linkTo?: string;
}

export default function ProductFeature({
  title,
  subtitle,
  features,
  demoButton = true,
  imageSide = 'right',
  children,
  linkTo
}: ProductFeatureProps) {
  const isImageRight = imageSide === 'right';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-50px' });
  const imageInView = useInView(imageRef, { once: true, margin: '-50px' });

  return (
    <Section>
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
            className="space-y-3 sm:space-y-4 mb-8"
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
                <span className="text-blue-600 mr-3 font-bold text-lg sm:text-xl mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
          {demoButton && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              {linkTo ? (
                <Link href={linkTo}>
                  <Button variant="primary">See Short Demo</Button>
                </Link>
              ) : (
                <Button variant="primary">See Short Demo</Button>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Image/Animation Placeholder */}
        <motion.div 
          ref={imageRef}
          className="flex-1 px-4 sm:px-0"
          variants={isImageRight ? slideInRight : slideInLeft}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
        >
          {children || (
            <motion.div 
              className="w-full h-48 sm:h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-lg border border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-gray-500 font-medium text-sm sm:text-base">website animation</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Section>
  );
}

