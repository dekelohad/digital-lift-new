'use client';

import { motion } from 'framer-motion';

export default function VideoPlaceholder() {
  return (
    <motion.div 
      className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-lg border border-gray-200 overflow-hidden relative cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 hover:bg-opacity-20 transition-all group">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
