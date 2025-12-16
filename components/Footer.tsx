'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './Button';
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
          <motion.h3 
            className="text-lg sm:text-xl font-bold mb-4"
            variants={fadeInUp}
          >
            Ready to get started?
          </motion.h3>
          <motion.div variants={fadeInUp}>
            <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 text-sm sm:text-base">
              Book A Call
            </Button>
          </motion.div>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            {
              title: 'Quick Links',
              items: [
                { href: '/pricing', text: 'Pricing' },
                { href: '/roi-calculator', text: 'ROI Calculator' },
                { href: '/testimonials', text: 'Testimonials' },
                { href: '/our-work', text: 'Our Work' },
                { href: '#login', text: 'Log in' }
              ]
            },
            {
              title: 'About',
              items: [
                { href: '/about', text: 'About' },
                { href: '/our-process', text: 'Our Process' },
                { href: '/contact', text: 'Contact' }
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
                { href: '/local-seo', text: 'Local SEO' }
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
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <motion.a 
                      href={item.href} 
                      className="hover:text-white transition-colors inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.text}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

