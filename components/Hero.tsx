import Button from './Button';

export default function Hero() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Website Design & Marketing Systems <span className="whitespace-nowrap">For Contractors</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Cut the bullsh*t, Marketing isn't rocket science.<br className="hidden sm:block" />
            No agency... (including ours) has the miracle solution to all your problems. We'll give you the tools to win but you need to commit to using them!
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <Button variant="primary" className="text-lg px-8 py-4">
            Book A Call
          </Button>
        </div>
      </div>
    </section>
  );
}

