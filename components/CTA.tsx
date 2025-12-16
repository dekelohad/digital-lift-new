import Button from './Button';
import Section from './Section';

interface CTAProps {
  title: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

export default function CTA({ 
  title, 
  description, 
  buttonText = 'Book A Call',
  className = '' 
}: CTAProps) {
  return (
    <Section className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white ${className}`}>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && (
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
            {description}
          </p>
        )}
        <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
          {buttonText}
        </Button>
      </div>
    </Section>
  );
}

