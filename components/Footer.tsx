'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Logo from './Logo';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Section */}
        <motion.div 
          ref={ref}
          className="mb-8 sm:mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp}>
            <Logo className="mb-4" variant="light" />
          </motion.div>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            {
              title: 'Quick Links',
              items: [
                { href: '/pricing', text: 'Pricing' },
                { href: '/testimonials', text: 'Testimonials' },
                { href: '/roi-calculator', text: 'ROI Calculator' },
                { href: 'https://app.digitallift.io/', text: 'Log in', external: true }
              ]
            },
            {
              title: 'About',
              items: [
                { href: '/about', text: 'About Us' },
                { href: '/our-work', text: 'Our Work' },
                { href: '/our-process', text: 'Our Process' },
                { href: '/trades-we-serve', text: 'Trades We Serve' }
              ]
            },
            {
              title: 'Services',
              items: [
                { href: '/functional-website', text: 'Functional Website' },
                { href: '/missed-call-text-back', text: 'Missed Call Text Back' },
                { href: '/5-star-magic-funnel', text: '5 Star Magic Funnel' },
                { href: '/automated-lead-follow-up', text: 'Automated Lead Follow Up' },
                { href: '/one-click-marketing-campaigns', text: 'One-Click Marketing Campaigns' },
                { href: '/all-in-one-inbox', text: 'All-In-One Inbox' },
                { href: '/business-phone', text: 'Business Phone' },
                { href: '/local-seo', text: 'Local SEO' },
                { href: '/ai-receptionist-calendar-booking', text: 'AI Receptionist with Calendar Booking' }
              ]
            },
            {
              title: 'Legal',
              items: [
                { href: '/terms', text: 'Terms & Conditions' },
                { href: '/privacy', text: 'Privacy Policy' }
              ]
            }
          ].map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              variants={staggerItem}
            >
              <h4 className="font-bold mb-3 sm:mb-4 text-xl sm:text-2xl">{section.title}</h4>
              <ul className="space-y-2 text-white text-base sm:text-lg">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href} 
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="relative hover:text-blue-400 transition-colors inline-block group"
                    >
                      {item.text}
                      <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* Contact Info Section */}
          <motion.div 
            variants={staggerItem}
          >
            <h4 className="font-bold mb-3 sm:mb-4 text-xl sm:text-2xl">Contact Info</h4>
            <div className="space-y-2 text-white text-base sm:text-lg">
              <div>
                <span className="text-blue-300">Phone:</span>
                <br />
                <a
                  href="tel:+17379376612"
                  className="relative hover:text-blue-400 transition-colors inline-block group"
                >
                  +1 (737) 937-6612
                  <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </div>
              <div>
                <span className="text-blue-300">Email:</span>
                <br />
                <a
                  href="mailto:info@digitalLift.io"
                  className="relative hover:text-blue-400 transition-colors inline-block group"
                >
                  info@digitalLift.io
                  <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </div>
              <div>
                <span className="text-blue-300">Address:</span>
                <br />
                <span className="text-white">
                  11801 Domain Blvd, Suite W350<br />
                  Austin, TX 78758
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-white text-lg">
            © Copyright {new Date().getFullYear()} Digital Lift, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

