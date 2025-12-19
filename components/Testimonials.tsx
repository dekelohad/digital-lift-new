'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Section from './Section';
import TestimonialCard from './TestimonialCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';

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

  return (
    <Section id="testimonials" className="bg-gray-50">
      <motion.div 
        ref={ref}
        className="text-center mb-10 sm:mb-14 px-4"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Real Results From Real Clients
        </h2>
        <div className="flex justify-center mb-6">
          <svg className="w-64 sm:w-80 md:w-96" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8C80 2 320 2 398 8" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round"/>
          </svg>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Don't take our word for it. Hear directly from contractors who use our systems and see the results firsthand.
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            quote={testimonial.quote}
          />
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div 
        className="text-center mt-10 sm:mt-12"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Link 
          href="/testimonials"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200"
        >
          View All Testimonials
        </Link>
      </motion.div>
    </Section>
  );
}

