'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Section from '@/components/Section';
import AnimatedText from '@/components/AnimatedText';
import { useIsMobile } from '@/lib/useIsMobile';
import { pageTransition, fadeInUp, staggerContainer } from '@/lib/animations';
import { Phone, MessageSquare, Calendar, X, ArrowRight, CheckCircle2, Check, AlertTriangle, Globe, Bot, Star } from 'lucide-react';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import TradesWeServe from '@/components/TradesWeServe';
import ProcessTimeline from '@/components/ProcessTimeline';
import WhyUs from '@/components/WhyUs';

function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  const painPoints = [
    { text: 'You miss calls on job sites', icon: X },
    { text: 'Leads go to competitors', icon: X },
    { text: 'Manual booking costs time & money', icon: X }
  ];

  return (
    <Section className="py-20 md:py-32 md:pb-40 bg-gradient-to-b from-white via-red-50/40 to-red-50/60 relative overflow-visible md:overflow-hidden">
      {/* Background decorations */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-red-300/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Before Label with Icon */}
        <motion.div
          ref={ref}
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={isInView ? { 
            opacity: 1, 
            scale: 1, 
            x: 0,
            rotate: [0, -2, 2, -2, 0]
          } : { opacity: 0, scale: 0.8, x: -50 }}
          transition={{ 
            duration: 0.8,
            rotate: { delay: 0.5, duration: 0.5 }
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { 
                scale: 1, 
                rotate: 0,
                transition: { 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200
                }
              } : { scale: 0, rotate: -180 }}
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
            >
              <AlertTriangle className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          <motion.span 
            className="inline-block px-6 py-2 bg-red-600 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            animate={isInView ? {
              boxShadow: [
                "0 10px 25px -5px rgba(220, 38, 38, 0.3)",
                "0 10px 25px -5px rgba(220, 38, 38, 0.5)",
                "0 10px 25px -5px rgba(220, 38, 38, 0.3)"
              ]
            } : {}}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity, repeatDelay: 1 }
            }}
          >
            Before
          </motion.span>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedText 
            variant="split" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 inline-block"
          >
            Every Missed Call is Money Lost
          </AnimatedText>
          
          {/* Animated underline */}
          {!isMobile ? (
            <div className="flex justify-center mb-4">
              <motion.svg 
                className="w-64 sm:w-80 md:w-96" 
                viewBox="0 0 400 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path 
                  d="M2 8C80 2 320 2 398 8" 
                  stroke="#DC2626" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                />
              </motion.svg>
            </div>
          ) : (
            <div className="flex justify-center mb-4">
              <svg 
                className="w-64 sm:w-80 md:w-96" 
                viewBox="0 0 400 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2 8C80 2 320 2 398 8" 
                  stroke="#DC2626" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            While you're working, your competitors are answering those calls and taking your business.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-red-200 hover:border-red-400 transition-all duration-300 h-full relative overflow-hidden"
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0, 
                    rotateY: 0,
                    transition: { 
                      delay: 0.8 + index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }
                  } : { opacity: 0, x: -50, rotateY: -15 }}
                >
                  {/* Gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50"
                    animate={isInView ? {
                      opacity: [0.5, 0.7, 0.5]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-red-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { 
                        scale: 1, 
                        rotate: 0,
                        transition: { 
                          delay: 1 + index * 0.2,
                          type: "spring",
                          stiffness: 200
                        }
                      } : { scale: 0, rotate: -180 }}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    >
                      <IconComponent className="w-8 h-8 text-red-700" />
                    </motion.div>
                    <motion.p 
                      className="text-xl font-bold text-gray-900 leading-tight"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { 
                        opacity: 1,
                        transition: { delay: 1.2 + index * 0.2 }
                      } : { opacity: 0 }}
                    >
                      {point.text}
                    </motion.p>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-200/80 to-transparent rounded-bl-full" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  const solutions = [
    {
      icon: Globe,
      title: 'Functional website that converts visitors to leads',
      text: 'Get found online, showcase your best reviews, and turn website visitors into instant text conversations. Mobile-first and SEO optimized.',
      gradient: 'from-indigo-500 to-blue-500',
      href: '/functional-website'
    },
    {
      icon: Bot,
      title: 'AI chatbot answers questions 24/7',
      text: 'Your website chatbot engages visitors instantly, answers questions, and captures leads even when you\'re busy on a job site.',
      gradient: 'from-teal-500 to-cyan-500',
      href: '/books-jobs-from-website'
    },
    {
      icon: Phone,
      title: 'Never miss a call — even when you\'re on a job site',
      text: 'Your AI receptionist answers every call, 24/7. It qualifies leads so you only talk to serious prospects ready to book.',
      gradient: 'from-blue-500 to-cyan-500',
      href: '/answers-calls-24-7'
    },
    {
      icon: MessageSquare,
      title: 'Turn 30–50% of missed calls into booked jobs',
      text: 'Every missed call gets an instant text response. Customers feel acknowledged and are far more likely to move forward.',
      gradient: 'from-green-500 to-emerald-500',
      href: '/texts-missed-callers-instantly'
    },
    {
      icon: Calendar,
      title: 'Open your calendar. See booked jobs.',
      text: 'AI qualifies leads and books directly into your calendar. No back-and-forth texts, no missed opportunities.',
      gradient: 'from-purple-500 to-pink-500',
      href: '/ai-books-appointments'
    },
    {
      icon: Star,
      title: '5-Star Review Funnel on autopilot',
      text: 'Automatically request reviews from happy customers. Get more 5-star reviews, protect your reputation, and build trust that converts visitors into customers.',
      gradient: 'from-amber-500 to-orange-500',
      href: '/5-star-magic-funnel'
    }
  ];

  return (
    <Section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/60 via-white to-blue-50/40 relative overflow-visible md:overflow-hidden">
      {/* Visual transition arrow from Problem to Solution */}
      {!isMobile && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-red-500 via-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={isInView ? { 
              scale: 1, 
              rotate: 0, 
              opacity: 1,
              y: [0, -10, 0]
            } : { scale: 0, rotate: -180, opacity: 0 }}
            transition={{ 
              scale: { duration: 0.8, delay: 0.3, type: "spring" },
              rotate: { duration: 0.8, delay: 0.3, type: "spring" },
              opacity: { duration: 0.5, delay: 0.3 },
              y: { duration: 2, repeat: Infinity, repeatDelay: 0.5 }
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <motion.div
              animate={isInView ? {
                x: [0, 5, 0]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <ArrowRight className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
        </div>
      )}
      
      {/* Background decorations */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* After Label */}
        <motion.div
          ref={ref}
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={isInView ? { 
            opacity: 1, 
            scale: 1, 
            x: 0,
            rotate: [0, 2, -2, 2, 0]
          } : { opacity: 0, scale: 0.8, x: 50 }}
          transition={{ 
            duration: 0.8,
            rotate: { delay: 0.5, duration: 0.5 }
          }}
        >
          <motion.span 
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            animate={isInView ? {
              boxShadow: [
                "0 10px 25px -5px rgba(37, 99, 235, 0.3)",
                "0 10px 25px -5px rgba(37, 99, 235, 0.6)",
                "0 10px 25px -5px rgba(37, 99, 235, 0.3)"
              ]
            } : {}}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity, repeatDelay: 1 }
            }}
          >
            After
          </motion.span>
        </motion.div>

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedText 
            variant="split" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 inline-block"
          >
            One System That:
          </AnimatedText>
          
          {/* Animated underline */}
          {!isMobile ? (
            <div className="flex justify-center mb-4">
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
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                />
              </motion.svg>
            </div>
          ) : (
            <div className="flex justify-center mb-4">
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
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything you need to turn missed calls into booked jobs.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Link href={solution.href} key={index} className="h-full flex">
                <motion.div
                  className="group relative h-full w-full flex"
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 h-full w-full relative overflow-hidden flex flex-col"
                    initial={{ opacity: 0, x: 50, rotateY: 15 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      x: 0, 
                      rotateY: 0,
                      transition: { 
                        delay: 0.8 + index * 0.2,
                        type: "spring",
                        stiffness: 100
                      }
                    } : { opacity: 0, x: 50, rotateY: 15 }}
                  >
                    {/* Gradient overlay with pulse */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5`}
                      animate={isInView ? {
                        opacity: [0.05, 0.1, 0.05]
                      } : {}}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    />
                    
                    <div className="relative z-10 flex flex-col flex-grow">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                        initial={{ scale: 0, rotate: 180 }}
                        animate={isInView ? { 
                          scale: 1, 
                          rotate: 0,
                          transition: { 
                            delay: 1 + index * 0.2,
                            type: "spring",
                            stiffness: 200
                          }
                        } : { scale: 0, rotate: 180 }}
                        whileHover={{ 
                          rotate: [0, 10, -10, 10, 0],
                          scale: 1.15
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 leading-tight mb-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { 
                          opacity: 1,
                          transition: { delay: 1.2 + index * 0.2 }
                        } : { opacity: 0 }}
                      >
                        {solution.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 leading-relaxed mb-4 flex-grow"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { 
                          opacity: 1,
                          transition: { delay: 1.4 + index * 0.2 }
                        } : { opacity: 0 }}
                      >
                        {solution.text}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { 
                          opacity: 1,
                          y: 0,
                          transition: { delay: 1.6 + index * 0.2 }
                        } : { opacity: 0, y: 10 }}
                      >
                        <span className={`inline-flex items-center gap-2 text-base font-bold bg-gradient-to-br ${solution.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                          Read More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* Decorative corner */}
                    <motion.div 
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${solution.gradient} opacity-20 rounded-bl-full`}
                      animate={isInView ? {
                        opacity: [0.2, 0.3, 0.2]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  const steps = [
    {
      number: '1',
      title: 'Call or chat comes in',
      description: 'A potential customer reaches out via phone or website chat.',
      icon: Phone,
      color: 'blue'
    },
    {
      number: '2',
      title: 'AI answers + qualifies',
      description: 'Our AI receptionist answers instantly and determines if they\'re a good fit.',
      icon: MessageSquare,
      color: 'purple'
    },
    {
      number: '3',
      title: 'Appointment booked',
      description: 'The AI books directly into your calendar. No back-and-forth needed.',
      icon: Calendar,
      color: 'green'
    }
  ];

  return (
    <Section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/10 via-purple-200/10 to-green-200/10 rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div 
          ref={ref}
          className="text-center mb-16"
        >
          <AnimatedText 
            variant="split" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 inline-block"
          >
            How It Works
          </AnimatedText>
          
          {/* Animated underline */}
          {!isMobile ? (
            <div className="flex justify-center mb-4">
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
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.svg>
            </div>
          ) : (
            <div className="flex justify-center mb-4">
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
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            3 simple steps. This is simpler than having multiple tech stacks that confuse them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto relative">
          {/* Connecting line for desktop */}
          {!isMobile && (
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200" />
          )}

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-cyan-500',
              purple: 'from-purple-500 to-pink-500',
              green: 'from-green-500 to-emerald-500'
            };
            
            return (
              <motion.div
                key={index}
                className="relative z-10 h-full flex"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 text-center relative overflow-hidden group w-full flex flex-col">
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Icon with gradient */}
                    <motion.div
                      className={`w-24 h-24 bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-20`}
                    >
                      <IconComponent className="w-12 h-12 text-white" />
                    </motion.div>
                    
                    {/* Step number badge */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} text-white text-3xl font-black mb-4 shadow-lg relative z-20 mx-auto`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {step.number}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed flex-grow">{step.description}</p>
                  </div>
                  
                  {/* Decorative corner gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  return (
    <Section id="testimonials" className="bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden py-20 md:py-32">
      {/* Background decorations */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div 
          ref={ref}
          className="text-center mb-16"
        >
          <AnimatedText 
            variant="split" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 inline-block"
          >
            Testimonials
          </AnimatedText>
          
          {/* Animated underline */}
          {!isMobile ? (
            <div className="flex justify-center mb-4">
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
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.svg>
            </div>
          ) : (
            <div className="flex justify-center mb-4">
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
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Keep the real contractor reviews you already have.
          </p>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <TestimonialCarousel />
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <TradesWeServe />
      <ProcessTimeline />
      <WhyUs />
      <FAQ />
      <CTA
        title="Stop Losing Jobs. Let Your System Book Them For You — 24/7."
        description="Book a demo and see how we turn missed calls into booked appointments."
      />
      <Footer />
    </motion.main>
  );
}
