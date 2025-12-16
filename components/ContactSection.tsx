'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ContactForm from './ContactForm';
import { fadeInUp } from '@/lib/animations';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column */}
          <motion.div
            className="flex flex-col justify-center"
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Transform Your Vision Into{' '}
              <span className="text-blue-600">Digital Reality</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Ready to dominate your market? We turn ambitious goals into extraordinary results. Our expert team combines cutting-edge technology with creative innovation to deliver solutions that exceed expectations. Your success story starts with a conversation.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-gray-900 text-base sm:text-lg mb-1">Call us:</p>
                <a
                  href="tel:+17379376612"
                  className="text-gray-900 hover:text-blue-600 transition-colors text-base sm:text-lg"
                >
                  +1 (737) 937-6612
                </a>
              </div>
              <div>
                <p className="text-gray-900 text-base sm:text-lg mb-1">Send us an email:</p>
                <a
                  href="mailto:info@digitalLift.io"
                  className="text-gray-900 hover:text-blue-600 transition-colors text-base sm:text-lg"
                >
                  info@digitalLift.io
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className="flex flex-col"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Send us a message
            </h3>
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-lg">
              <ContactForm variant="light" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
