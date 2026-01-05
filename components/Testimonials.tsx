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
    name: 'Mike Thompson',
    role: 'Owner',
    company: 'Thompson Plumbing',
    quote: "I used to lose 3-4 jobs a week because I couldn't answer calls while on a job. Now the AI captures every single lead. I haven't lost a job in months!"
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Owner',
    company: 'Rodriguez HVAC Services',
    quote: "Best investment I've made. The AI answers every call, even at 2 AM. I don't have to talk to customers on the phone anymore - it books everything automatically."
  },
  {
    name: 'Tom Wilson',
    role: 'Owner',
    company: 'Wilson Locksmith',
    quote: "I was missing calls constantly when I was on emergency jobs. Now the AI captures every lead and books them. My revenue is up 40% and I'm not losing jobs anymore."
  },
  {
    name: 'Robert Martinez',
    role: 'Owner',
    company: 'Martinez Electrical',
    quote: "The AI handles all my calls now. I don't need to answer the phone anymore - it qualifies leads and books appointments. I've stopped losing jobs completely."
  },
  {
    name: 'John Davis',
    role: 'Owner',
    company: 'Davis Roofing',
    quote: "Before Digital Lift, I'd lose jobs because I couldn't answer when I was on a roof. Now the AI captures every single call and books them. Game changer!"
  },
  {
    name: 'Mark Johnson',
    role: 'Owner',
    company: 'Johnson Handyman Services',
    quote: "I don't talk on the phone anymore. The AI does it all - answers questions, qualifies leads, books jobs. I haven't lost a single job since I got it."
  },
  {
    name: 'Steve Anderson',
    role: 'Owner',
    company: 'Anderson HVAC',
    quote: "The AI captures every lead, even when I'm busy. I used to lose 5-6 jobs a week. Now I lose zero. It books everything automatically - I don't need to answer calls."
  },
  {
    name: 'David Brown',
    role: 'Owner',
    company: 'Brown Plumbing Co.',
    quote: "Best thing I ever did for my business. The AI answers all my calls 24/7 and books jobs. I'm not losing any more opportunities - it captures everything."
  },
  {
    name: 'James Taylor',
    role: 'Owner',
    company: 'Taylor Locksmith',
    quote: "I was losing jobs left and right because I couldn't answer calls during emergency lockouts. Now the AI captures every lead and books them. Zero lost jobs now!"
  },
  {
    name: 'Michael Garcia',
    role: 'Owner',
    company: 'Garcia Electrical Services',
    quote: "The AI handles all my phone calls now. I don't need to talk to customers anymore - it qualifies leads and books appointments automatically. No more lost jobs!"
  },
  {
    name: 'Chris White',
    role: 'Owner',
    company: 'White Roofing Solutions',
    quote: "I used to miss calls constantly when I was on roofs. Now the AI captures every single call and books them. I haven't lost a job in 3 months!"
  },
  {
    name: 'Brian Lee',
    role: 'Owner',
    company: 'Lee HVAC Repair',
    quote: "The AI answers every call, even after hours. I don't talk on the phone anymore - it books everything. My lost jobs went from 10+ a month to zero."
  },
  {
    name: 'Kevin Moore',
    role: 'Owner',
    company: 'Moore Plumbing',
    quote: "Before this, I'd lose jobs because I couldn't answer when I was under a sink. Now the AI captures every lead and books them. I'm not losing any more jobs!"
  },
  {
    name: 'Daniel Harris',
    role: 'Owner',
    company: 'Harris Locksmith',
    quote: "The AI captures all my leads now. I don't need to answer the phone anymore - it handles everything and books jobs automatically. Zero lost opportunities!"
  },
  {
    name: 'Anthony Clark',
    role: 'Owner',
    company: 'Clark Electrical',
    quote: "I was losing 4-5 jobs a week because I couldn't answer calls while working. Now the AI captures every single call and books them. No more lost jobs!"
  },
  {
    name: 'Ryan Lewis',
    role: 'Owner',
    company: 'Lewis Handyman',
    quote: "The AI handles all my calls 24/7. I don't talk on the phone anymore - it qualifies leads and books appointments. I've stopped losing jobs completely."
  },
  {
    name: 'Jason Walker',
    role: 'Owner',
    company: 'Walker HVAC',
    quote: "Best decision I made. The AI answers every call and books jobs automatically. I don't need to answer the phone anymore. Zero lost jobs since I got it!"
  },
  {
    name: 'Eric Hall',
    role: 'Owner',
    company: 'Hall Plumbing Services',
    quote: "I used to lose jobs constantly when I was on calls. Now the AI captures every lead and books them. I haven't lost a single job in months!"
  },
  {
    name: 'Frank Young',
    role: 'Owner',
    company: 'Young Locksmith',
    quote: "The AI captures every single call, even when I'm on emergency jobs. I don't need to talk to customers anymore - it books everything. No more lost jobs!"
  },
  {
    name: 'Scott King',
    role: 'Owner',
    company: 'King Electrical',
    quote: "Before Digital Lift, I'd lose 6-7 jobs a week because I couldn't answer calls. Now the AI captures all my leads and books them. I'm not losing any more jobs!"
  },
  {
    name: 'Greg Wright',
    role: 'Owner',
    company: 'Wright Roofing',
    quote: "The AI handles all my phone calls now. I don't talk on the phone anymore - it qualifies leads and books appointments automatically. Zero lost jobs!"
  },
  {
    name: 'Tim Lopez',
    role: 'Owner',
    company: 'Lopez HVAC Services',
    quote: "I was missing calls all the time when I was on jobs. Now the AI captures every single call and books them. I haven't lost a job since I got it!"
  },
  {
    name: 'Paul Green',
    role: 'Owner',
    company: 'Green Plumbing Co.',
    quote: "The AI answers every call 24/7 and books jobs. I don't need to answer the phone anymore. My lost jobs went from 8+ a month to absolutely zero!"
  },
  {
    name: 'Jeff Adams',
    role: 'Owner',
    company: 'Adams Locksmith',
    quote: "I used to lose jobs because I couldn't answer calls during lockouts. Now the AI captures every lead and books them. No more lost opportunities!"
  },
  {
    name: 'Ray Baker',
    role: 'Owner',
    company: 'Baker Electrical Services',
    quote: "The AI captures all my leads now. I don't talk on the phone anymore - it handles everything and books jobs automatically. I've stopped losing jobs completely!"
  },
  {
    name: 'Joe Hill',
    role: 'Owner',
    company: 'Hill Handyman',
    quote: "Before this, I'd lose 5-6 jobs a week because I couldn't answer when I was working. Now the AI captures every single call and books them. Zero lost jobs!"
  },
  {
    name: 'Matt Nelson',
    role: 'Owner',
    company: 'Nelson HVAC',
    quote: "The AI handles all my calls 24/7. I don't need to answer the phone anymore - it qualifies leads and books appointments. I'm not losing any more jobs!"
  },
  {
    name: 'Dan Carter',
    role: 'Owner',
    company: 'Carter Plumbing',
    quote: "I was losing jobs constantly when I was on calls. Now the AI captures every lead and books them automatically. I haven't lost a single job in months!"
  },
  {
    name: 'Sam Mitchell',
    role: 'Owner',
    company: 'Mitchell Locksmith',
    quote: "The AI captures every single call, even when I'm busy. I don't talk to customers anymore - it books everything. No more lost jobs since I got it!"
  },
  {
    name: 'Rick Perez',
    role: 'Owner',
    company: 'Perez Electrical',
    quote: "I used to lose 4-5 jobs a week because I couldn't answer calls while working. Now the AI captures all my leads and books them. Zero lost jobs now!"
  },
  {
    name: 'Tony Roberts',
    role: 'Owner',
    company: 'Roberts Roofing',
    quote: "The AI answers every call and books jobs automatically. I don't need to answer the phone anymore. My lost jobs went from 10+ a month to zero!"
  },
  {
    name: 'Bill Turner',
    role: 'Owner',
    company: 'Turner HVAC Services',
    quote: "I was missing calls all the time when I was on jobs. Now the AI captures every single call and books them. I haven't lost a job in 3 months!"
  },
  {
    name: 'Jack Phillips',
    role: 'Owner',
    company: 'Phillips Plumbing',
    quote: "The AI handles all my phone calls now. I don't talk on the phone anymore - it qualifies leads and books appointments. I've stopped losing jobs completely!"
  },
  {
    name: 'Larry Campbell',
    role: 'Owner',
    company: 'Campbell Locksmith',
    quote: "Before Digital Lift, I'd lose jobs because I couldn't answer calls during emergencies. Now the AI captures every lead and books them. No more lost jobs!"
  },
  {
    name: 'Gary Parker',
    role: 'Owner',
    company: 'Parker Electrical',
    quote: "The AI captures all my leads 24/7. I don't need to answer the phone anymore - it handles everything and books jobs automatically. Zero lost opportunities!"
  },
  {
    name: 'Randy Evans',
    role: 'Owner',
    company: 'Evans Handyman',
    quote: "I used to lose 6-7 jobs a week because I couldn't answer when I was working. Now the AI captures every single call and books them. I'm not losing any more jobs!"
  },
  {
    name: 'Dennis Collins',
    role: 'Owner',
    company: 'Collins HVAC',
    quote: "The AI handles all my calls now. I don't talk on the phone anymore - it books everything automatically. My lost jobs went from 8+ a month to absolutely zero!"
  },
  {
    name: 'Wayne Stewart',
    role: 'Owner',
    company: 'Stewart Plumbing Co.',
    quote: "I was losing jobs constantly when I was on calls. Now the AI captures every lead and books them. I haven't lost a single job since I got it!"
  },
  {
    name: 'Ralph Morris',
    role: 'Owner',
    company: 'Morris Locksmith',
    quote: "The AI captures every single call, even when I'm busy. I don't need to talk to customers anymore - it books everything. No more lost jobs in months!"
  },
  {
    name: 'Victor Rogers',
    role: 'Owner',
    company: 'Rogers Electrical Services',
    quote: "Before this, I'd lose 5-6 jobs a week because I couldn't answer calls while working. Now the AI captures all my leads and books them. Zero lost jobs!"
  },
  {
    name: 'Henry Reed',
    role: 'Owner',
    company: 'Reed Roofing',
    quote: "The AI answers every call 24/7 and books jobs automatically. I don't need to answer the phone anymore. I've stopped losing jobs completely!"
  },
  {
    name: 'Albert Cook',
    role: 'Owner',
    company: 'Cook HVAC Repair',
    quote: "I was missing calls all the time when I was on jobs. Now the AI captures every single call and books them. I haven't lost a job in months!"
  },
  {
    name: 'Louis Morgan',
    role: 'Owner',
    company: 'Morgan Plumbing',
    quote: "The AI handles all my phone calls now. I don't talk on the phone anymore - it qualifies leads and books appointments. My lost jobs went to zero!"
  },
  {
    name: 'Eugene Bell',
    role: 'Owner',
    company: 'Bell Locksmith',
    quote: "I used to lose jobs because I couldn't answer calls during lockouts. Now the AI captures every lead and books them. No more lost opportunities!"
  },
  {
    name: 'Howard Murphy',
    role: 'Owner',
    company: 'Murphy Electrical',
    quote: "The AI captures all my leads 24/7. I don't need to answer the phone anymore - it handles everything and books jobs automatically. Zero lost jobs!"
  },
  {
    name: 'Arthur Bailey',
    role: 'Owner',
    company: 'Bailey Handyman',
    quote: "Before Digital Lift, I'd lose 7-8 jobs a week because I couldn't answer when I was working. Now the AI captures every single call and books them. No more lost jobs!"
  },
  {
    name: 'Ralph Rivera',
    role: 'Owner',
    company: 'Rivera HVAC',
    quote: "The AI handles all my calls 24/7. I don't talk on the phone anymore - it books everything automatically. I haven't lost a job since I got it!"
  },
  {
    name: 'Benjamin Cooper',
    role: 'Owner',
    company: 'Cooper Plumbing Services',
    quote: "I was losing jobs constantly when I was on calls. Now the AI captures every lead and books them. I'm not losing any more jobs - it's been months!"
  },
  {
    name: 'Harold Richardson',
    role: 'Owner',
    company: 'Richardson Locksmith',
    quote: "The AI captures every single call, even when I'm busy. I don't need to talk to customers anymore - it books everything. Zero lost jobs now!"
  },
  {
    name: 'Willie Cox',
    role: 'Owner',
    company: 'Cox Electrical',
    quote: "I used to lose 4-5 jobs a week because I couldn't answer calls while working. Now the AI captures all my leads and books them. No more lost jobs!"
  },
  {
    name: 'Roy Howard',
    role: 'Owner',
    company: 'Howard Roofing Solutions',
    quote: "The AI answers every call and books jobs automatically. I don't need to answer the phone anymore. I've stopped losing jobs completely - it's been amazing!"
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
