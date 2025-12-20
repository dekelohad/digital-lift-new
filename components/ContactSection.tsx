'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ContactForm from './ContactForm';
import AnimatedText from './AnimatedText';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '@/lib/useIsMobile';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40"
            animate={{
              scale: [1, 1.3, 1],
              y: [0, -40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          
          {/* Floating elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-300 rounded-full"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
        >
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <AnimatedText variant="split" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 inline-block">
                Transform Your Vision Into
              </AnimatedText>
              {isMobile ? (
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Digital Reality
                  </span>
                </span>
              ) : (
                <motion.span 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                    animate={{
                      backgroundPosition: ['0% center', '200% center'],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    Digital Reality
                  </motion.span>
                </motion.span>
              )}
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Ready to dominate your market? We turn ambitious goals into extraordinary results. Our expert team combines cutting-edge technology with creative innovation to deliver solutions that exceed expectations. Your success story starts with a conversation.
            </p>
            
            <div className="space-y-4">
              <ContactInfoItem 
                icon={<Phone className="w-5 h-5" />}
                label="Call us"
                value="+1 (737) 937-6612"
                href="tel:+17379376612"
                delay={0.7}
                isInView={isInView}
                isMobile={isMobile}
              />
              <ContactInfoItem 
                icon={<Mail className="w-5 h-5" />}
                label="Send us an email"
                value="info@digitalLift.io"
                href="mailto:info@digitalLift.io"
                delay={0.8}
                isInView={isInView}
                isMobile={isMobile}
              />
              <ContactInfoItem 
                icon={<MapPin className="w-5 h-5" />}
                label="Visit us"
                value="11801 Domain Blvd, Suite W350, Austin, TX"
                delay={0.9}
                isInView={isInView}
                isMobile={isMobile}
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Send us a message
            </h3>
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-lg">
              <ContactForm variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ 
  icon, 
  label, 
  value, 
  href,
  delay,
  isInView,
  isMobile
}: { 
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  delay: number;
  isInView: boolean;
  isMobile: boolean;
}) {
  if (isMobile) {
    const content = (
      <div className="flex items-start gap-4 group">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">{label}</p>
          <p className="text-gray-900 text-base sm:text-lg font-medium">
            {value}
          </p>
        </div>
      </div>
    );

    if (href) {
      return <a href={href} className="block">{content}</a>;
    }
    
    return content;
  }

  const content = (
    <motion.div 
      className="flex items-start gap-4 group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ x: 10 }}
    >
      <motion.div 
        className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0"
        whileHover={{ scale: 1.1, backgroundColor: 'rgb(59 130 246)', color: 'white' }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <div>
        <p className="text-gray-500 text-sm mb-1">{label}</p>
        <p className="text-gray-900 text-base sm:text-lg font-medium group-hover:text-blue-600 transition-colors">
          {value}
        </p>
      </div>
    </motion.div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }
  
  return content;
}
