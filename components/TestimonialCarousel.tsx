'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

interface VideoTestimonial {
  id: number;
  name: string;
  quote: string;
}

const videoTestimonials: VideoTestimonial[] = [
  { id: 1, name: 'Frank', quote: "I would highly recommend going with them, my business has ramped up, literally overnight and their prices are very affordable. Feel free to reach out to me personally with any questions about them, thank you!" },
  { id: 2, name: 'Rick', quote: "Our company finally has the web presence it needs and our sales and profits have grown significantly! We look forward to working with them for many years to come!" },
  { id: 3, name: 'Zach', quote: "Big shoutout for helping me with my website and getting me more leads. I would recommend them to anyone!" },
  { id: 4, name: 'Ryan', quote: "They've made it so easy with all their automations and the awesome website. I can't thank them enough and you should all definitely check them out" },
  { id: 5, name: 'Armando', quote: "They are the absolute best at what they do. They built me a new website and within 10 days I got my first unpaid for lead! Best money I've ever spent." },
  { id: 6, name: 'James', quote: "They really helped my business grow and I highly recommend the service they provide." },
  { id: 7, name: 'Manny', quote: "Ever since he implemented the new website and landing pages, it's been nothing but great and our conversion has gone way up. We started getting calls almost immediately." },
  { id: 8, name: 'David', quote: "I've seen a significant improvement in my business. They've made my life so much easier!" },
  { id: 9, name: 'Netane', quote: "I've been very happy with their services. They're always available, have a quick response and are continuously upgrading their services. I would highly recommend them to anyone that's looking to grow their business!" },
  { id: 10, name: 'Jose', quote: "We've gotten a lot of compliments about it and there's a lot of activity going on. They keep us updated and they have very good prices. I really recommend them!" },
  { id: 11, name: 'Jason', quote: "They did a great job on our website. The website makes it super easy for our customers to leave us their information. If you need a good website, hit them up!" },
  { id: 12, name: 'Steve', quote: "I've been through the ringer with these companies man, trying to find a legit company. I can tell you... these guys are the truth, spot on, communication is amazing, give these guys a try" },
];

function TestimonialCard({ testimonial }: { testimonial: VideoTestimonial }) {
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.currentTime = 0.001;
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
      {/* Video */}
      <div className="w-full md:w-48 flex-shrink-0">
        <div className="relative aspect-video md:aspect-square bg-gray-900 rounded-lg overflow-hidden">
          <video
            src={`/testmionals/${testimonial.id}.mp4`}
            className="w-full h-full object-contain"
            controls
            playsInline
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Stars */}
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        {/* Quote */}
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          "{testimonial.quote}"
        </p>
        
        {/* Name */}
        <p className="font-semibold text-gray-900">-{testimonial.name}</p>
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const totalPairs = Math.ceil(videoTestimonials.length / 2);
  
  // Get current pair of testimonials
  const getCurrentPair = () => {
    const startIdx = currentIndex * 2;
    return videoTestimonials.slice(startIdx, startIdx + 2);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPairs);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalPairs]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPairs) % totalPairs);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPairs);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all"
        aria-label="Next testimonials"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Testimonials Grid */}
      <div className="overflow-hidden px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {getCurrentPair().map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPairs }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex 
                ? 'bg-blue-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonials ${idx * 2 + 1} and ${idx * 2 + 2}`}
          />
        ))}
      </div>

      {/* See All Button */}
      <div className="flex justify-center mt-8">
        <Link 
          href="/testimonials"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200"
        >
          See All Reviews
        </Link>
      </div>
    </div>
  );
}

