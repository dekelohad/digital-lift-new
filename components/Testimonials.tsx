'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Section from './Section';
import TestimonialCard from './TestimonialCard';
import AnimatedText from './AnimatedText';
import { staggerContainer } from '@/lib/animations';
import { useIsMobile } from '@/lib/useIsMobile';

const testimonials = [
  {
    name: 'Cody Johnson',
    role: 'Owner',
    company: 'CJ Roofing Services',
    quote: "If you are looking for someone to get that phone ringing, they're the right fit for you! I'm so happy with them!"
  },
  {
    name: 'Armando Garcia',
    role: 'Owner',
    company: 'Garcia Landscaping',
    quote: "They are the absolute best at what they do. They built me a new website and within 10 days I got my first unpaid for lead!"
  },
  {
    name: 'James Mitchell',
    role: 'Director',
    company: 'Mitchell Plumbing Co.',
    quote: "After going through 2-3 other people I finally found someone that told me the truth. Really easy to work with and very respectable."
  },
  {
    name: 'Manny Rodriguez',
    role: 'CEO',
    company: 'Rodriguez HVAC',
    quote: "Ever since he implemented the new website and landing pages, it's been nothing but great and our conversion has gone way up."
  },
  {
    name: 'Wesley Thompson',
    role: 'Owner',
    company: 'Thompson Cleaning Services',
    quote: "Getting 5 star reviews has always given me anxiety, Jonathan and his team have taken all that away. I've seen a significant increase in business."
  },
  {
    name: 'Netane Palu',
    role: 'Owner',
    company: 'Pacific Electrical',
    quote: "Nothing but professional and awesome in every way, they are absolutely great to work with."
  },
  {
    name: 'Frank Martinez',
    role: 'Owner',
    company: 'Martinez Handyman',
    quote: "I would highly recommend going with Digital Lift, my business has ramped up, literally overnight and their prices are very affordable."
  },
  {
    name: 'David Chen',
    role: 'Director',
    company: 'Chen Remodeling',
    quote: "I've seen a significant improvement in my business. Digital Lift has made my life so much easier!"
  },
  {
    name: 'Rick Anderson',
    role: 'CEO',
    company: 'Anderson Contractors',
    quote: "Thank you to Jonathan and Digital Lift, our company finally has the web presence it needs and our sales have grown significantly!"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  return (
    <Section id="testimonials" className="bg-gray-50 relative overflow-hidden">
      {/* Background decoration - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-50 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
      )}

      <div 
        ref={ref}
        className="text-center mb-10 sm:mb-14 px-4 relative z-10"
      >
        <AnimatedText 
          variant="split" 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight inline-block"
        >
          Real Results From Real Clients
        </AnimatedText>
        
        {/* Animated underline - desktop only */}
        {!isMobile ? (
          <div className="flex justify-center mb-6">
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
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              />
            </motion.svg>
          </div>
        ) : (
          <div className="flex justify-center mb-6">
            <svg 
              className="w-64 sm:w-80 md:w-96" 
              viewBox="0 0 400 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M2 8C80 2 320 2 398 8" 
                stroke="#3B82F6" 
                strokeWidth="5" 
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Don't take our word for it. Hear directly from contractors who use our systems and see the results firsthand.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 relative z-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            quote={testimonial.quote}
            index={index}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10 sm:mt-12 relative z-10">
        <Link href="/testimonials">
          {isMobile ? (
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md">
              View All Testimonials →
            </button>
          ) : (
            <motion.button
              className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative z-10">View All Testimonials</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          )}
        </Link>
      </div>
    </Section>
  );
}
