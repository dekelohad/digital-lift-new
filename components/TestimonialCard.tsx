interface TestimonialCardProps {
  name: string;
  quote: string;
}

export default function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic leading-relaxed">"{quote}"</p>
      <p className="text-gray-900 font-semibold mb-2 text-sm sm:text-base">-{name}</p>
      <a href="#testimonials" className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium inline-block">
        See All →
      </a>
    </div>
  );
}

