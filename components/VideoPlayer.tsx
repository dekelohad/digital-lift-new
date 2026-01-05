'use client';

import { useState, useRef } from 'react';

interface VideoPlayerProps {
  videoSrc: string;
}

export default function VideoPlayer({ videoSrc }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-video shadow-2xl border-2 border-gray-300 overflow-hidden relative">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        controls={isPlaying}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
      />
      
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer group"
          onClick={handlePlay}
        >
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}


