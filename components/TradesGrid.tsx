import Section from './Section';
import TradeCard from './TradeCard';

const trades = [
  'Landscapers',
  'Remodeling',
  'Pressure Washer',
  'Pest Control',
  'Moving Companies',
  'Flooring & Carpet Cleaning',
  'Roofing',
  'HVAC',
  'Plumbing',
  'Electrician',
  'Handyman',
  'Painters',
  'Decks & Patios',
  'Siding',
  'Pool Construction',
  'Paving',
  'Hardscaping',
  'Windows & Doors',
  'General Contractors',
  'Dog Groomers',
  'Tree Service',
  'Home Builders'
];

export default function TradesGrid() {
  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          Serving all these trades and more...
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
        {trades.map((trade, index) => (
          <TradeCard key={index} name={trade} />
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#trades" className="text-blue-600 hover:text-blue-700 font-semibold">
          See All Trades We Work With
        </a>
      </div>
    </Section>
  );
}

