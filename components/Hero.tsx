import Button from './Button';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Website Design & Marketing Systems For Contractors
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Cut the bullsh*t, Marketing isn't rocket science.<br className="hidden sm:block" />
            No agency... (including ours) has the miracle solution to all your problems. We'll give you the tools to win but you need to commit to using them!
          </p>
        </div>

        {/* Team Photos */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 flex-wrap px-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-md border-2 border-white">
            <span className="text-gray-700 text-[10px] sm:text-xs font-semibold">Michael</span>
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-md border-2 border-white">
            <span className="text-gray-700 text-[10px] sm:text-xs font-semibold">Jonathan</span>
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-md border-2 border-white">
            <span className="text-gray-700 text-[10px] sm:text-xs font-semibold">Kevin</span>
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-md border-2 border-white">
            <span className="text-gray-700 text-[10px] sm:text-xs font-semibold">Astrid</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <Button variant="primary" className="text-lg px-8 py-4">
            Book A Call
          </Button>
        </div>

        {/* Review Badges */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap px-4">
          <div className="flex items-center gap-2">
            <div className="text-lg sm:text-xl md:text-2xl font-bold">Google</div>
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg sm:text-xl md:text-2xl font-bold">Facebook</div>
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg sm:text-xl md:text-2xl font-bold">Trustpilot</div>
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

