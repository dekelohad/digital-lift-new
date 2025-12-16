import Section from './Section';

export default function ProductIntro() {
  return (
    <Section>
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          Simple systems that actually work
        </h2>
        <p className="text-lg sm:text-xl text-gray-700">
          No degrees required, just a hard hat
        </p>
      </div>
      <div className="flex justify-center px-4">
        <div className="w-full max-w-2xl h-48 sm:h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm sm:text-base">website animation</span>
        </div>
      </div>
    </Section>
  );
}

