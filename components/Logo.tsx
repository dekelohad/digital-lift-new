import Link from 'next/link';
import { Rocket } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'light';
}

export default function Logo({ className = '', showText = true, variant = 'default' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon - Rocket */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
          <Rocket className="w-6 h-6 text-white" fill="white" />
        </div>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex items-center gap-1">
          <span className={`text-2xl md:text-3xl font-bold ${variant === 'light' ? 'text-white' : 'text-gray-900'}`}>
            Digital
          </span>
          <span className="text-2xl md:text-3xl font-bold text-blue-600">
            Lift
          </span>
        </div>
      )}
    </Link>
  );
}

