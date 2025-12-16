'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import TestimonialCard from './TestimonialCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const testimonials = [
  {
    name: 'Cody',
    quote: "If you are looking for someone to get that phone ringing, they're the right fit for you! I'm so happy with them!"
  },
  {
    name: 'Armando',
    quote: "They are the absolute best at what they do. They built me a new website and within 10 day's I got my first unpaid for Lead! Best money spent with Jonathan and Digital Lift"
  },
  {
    name: 'James',
    quote: "After going through 2-3 other people i finally found someone that told me the truth. Really easy to work with and very respectable. I would recommend them to anyone!"
  },
  {
    name: 'Manny',
    quote: "Ever since he implemented the new website and landing pages, it's been nothing but great and our conversion has gone way up. We started getting calls almost immediately."
  },
  {
    name: 'Wendy',
    quote: "Getting 5 star reviews has always given me anxiety, Jonathan and his team have taken all that away and I have seen a significant increase in business since I started working with them. I would recommend them to anyone!"
  },
  {
    name: 'Netane',
    quote: "Nothing but professional and awesome in every way, they are absolutely great to work with"
  },
  {
    name: 'Frank',
    quote: "I would highly recommend going with Digital Lift, my business has ramped up, literally overnight and their prices are very affordable. Feel free to reach out to me personally with any questions about them!"
  },
  {
    name: 'David',
    quote: "I've seen a significant improvement in my business. Digital Lift has made my life so much easier!"
  },
  {
    name: 'Rick',
    quote: "Thank you to Jonathan and Digital Lift, our company finally has the web presence it needs and our sales and profits have grown significantly! We look forward to working with them for many years to come!"
  },
  {
    name: 'Luckie',
    quote: "Their business marketing systems have helped us a lot. Anytime I need anything I can always give them a call. They're super helpful with everything they do, I would recommend them to anybody"
  },
  {
    name: 'Lopaka',
    quote: "Before I started working with Digital Lift I was paying $1500/month with another service that just was not working for me. Digital Lift is super affordable and they do a fantastic Job!"
  },
  {
    name: 'Adam',
    quote: "It's been great and all I needed was one sale a month to pay for the service. Since I signed up i've gotten quite a bit more than that. I would recommend them to anyone!"
  },
  {
    name: 'Mason',
    quote: "They made me a brand new website, super professional and it's been absolutely amazing. I cannot say enough good things about theme. It turned those 100s of viewers into 100s of clients!"
  },
  {
    name: 'Matt',
    quote: "First i thought it was a scam, but then it turns out they're just a really good company at a really good price. I would recommend them to anyone!"
  },
  {
    name: 'Ryan',
    quote: "They've made it so easy with all their automations and the awesome website. I can't thank them enough and you should all definitely check them out"
  },
  {
    name: 'Scott',
    quote: "He really got everything going well. I'm getting organic leads now that don't cost me any money. I would recommend them to anyone!"
  },
  {
    name: 'Zach',
    quote: "Big shoutout to Jonathan and Digital Lift for helping me with my website and getting me more leads. I would recommend them to anyone!"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="testimonials" className="bg-gray-50">
      <motion.div 
        ref={ref}
        className="text-center mb-8 sm:mb-12 px-4"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          The proof is in the pudding...<br className="hidden sm:block" />
          Let's see what our clients have to say
        </h2>
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
            quote={testimonial.quote}
          />
        ))}
      </motion.div>
    </Section>
  );
}

