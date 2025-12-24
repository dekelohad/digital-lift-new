'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Phone, MessageSquare, CheckCircle, DollarSign } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const steps = [
  {
    number: '1',
    title: 'Customer calls or chats',
    description: 'A potential customer reaches out via phone call or website chat. They need your service and want to book an appointment.',
    icon: Phone,
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: '2',
    title: 'AI answers & qualifies',
    description: 'Our AI receptionist answers instantly, asks the right questions, and determines if they\'re a good fit for your business.',
    icon: MessageSquare,
    color: 'from-purple-500 to-purple-600'
  },
  {
    number: '3',
    title: 'Appointment booked',
    description: 'The AI books the appointment directly into your calendar. No back-and-forth texts. No missed opportunities.',
    icon: CheckCircle,
    color: 'from-green-500 to-green-600'
  },
  {
    number: '4',
    title: 'You get paid',
    description: 'You show up, do the work, and get paid. The system handled everything else automatically.',
    icon: DollarSign,
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function HowItWorksPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: '-50px' });

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            ref={heroRef}
            className="text-center mb-12 sm:mb-16 px-4"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              variants={fadeInUp}
            >
              How It Works
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              The flow, not the tech. Here's how contractors book more jobs without lifting a finger.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            ref={stepsRef}
            className="space-y-16 md:space-y-24"
            variants={staggerContainer}
            initial="hidden"
            animate={stepsInView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                  variants={fadeInUp}
                >
                  {/* Left side - Icon and Number */}
                  <div className={`flex flex-col items-center md:items-${index % 2 === 0 ? 'start' : 'end'} order-2 md:order-${index % 2 === 0 ? '1' : '2'}`}>
                    <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl mb-6`}>
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-8xl font-bold text-gray-200 leading-none">
                      {step.number}
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className={`order-1 md:order-${index % 2 === 0 ? '2' : '1'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            No feature list. Only outcome.
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contractors using DigitalLift don't miss jobs. They book them.
          </motion.p>
        </div>
      </section>

      <CTA
        title="Ready to start booking jobs automatically?"
        description="See how our system works and get your first appointment booked today."
      />

      <Footer />
    </main>
  );
}

