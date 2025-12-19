'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  index?: number;
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  quote,
  index = 0
}: TestimonialCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Generate initials for avatar placeholder
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  
  // Generate a consistent color based on name
  const colors = [
    'bg-blue-500',
    'bg-green-500', 
    'bg-purple-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-red-500'
  ];
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  const avatarColor = colors[colorIndex];

  return (
    <motion.div 
      ref={ref}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ 
        duration: 0.45, 
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {/* Header: Avatar + Name/Role */}
      <div className="flex items-start gap-3 mb-3">
        {/* Avatar */}
        <div className={`w-12 h-12 ${avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-semibold text-sm">{initials}</span>
        </div>
        
        {/* Name and Role */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 text-base">{name}</h4>
          {(role || company) && (
            <p className="text-gray-500 text-sm truncate">
              {role}{role && company && ', '}{company}
            </p>
          )}
        </div>
      </div>

      {/* Rating + Google */}
      <div className="flex items-center gap-2 mb-4">
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        {/* Google Logo */}
        <svg className="w-14 h-5" viewBox="0 0 74 24" fill="none">
          <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
          <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
          <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54 0 2.02-1.36 3.5-3.1 3.5z" fill="#4285F4"/>
          <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#FBBC05"/>
          <path d="M58 .24h2.51v17.57H58z" fill="#34A853"/>
          <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335"/>
        </svg>
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">"{quote}"</p>

      {/* Verified Badge */}
      <div className="flex items-center gap-1.5 text-green-600">
        <Check className="w-4 h-4" />
        <span className="text-sm font-medium">Verified Review</span>
      </div>
    </motion.div>
  );
}
