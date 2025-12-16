import Link from 'next/link';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'light';
}

export default function Logo({ className = '', showText = true, variant = 'default' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon - Rocket Emoji */}
      <div className="relative">
        <span className="text-3xl md:text-4xl transform hover:scale-110 transition-all duration-300 inline-block">🚀</span>
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

