import Section from './Section';

export default function ProductIntro() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple systems that actually work
        </h2>
        <p className="text-xl text-gray-700">
          No degrees required, just a hard hat
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">website animation</span>
        </div>
      </div>
    </Section>
  );
}

