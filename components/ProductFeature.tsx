import Button from './Button';
import Section from './Section';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ProductFeatureProps {
  title: string;
  subtitle?: string;
  features: string[];
  demoButton?: boolean;
  imageSide?: 'left' | 'right';
  children?: ReactNode;
  linkTo?: string;
}

export default function ProductFeature({
  title,
  subtitle,
  features,
  demoButton = true,
  imageSide = 'right',
  children,
  linkTo
}: ProductFeatureProps) {
  const isImageRight = imageSide === 'right';

  return (
    <Section>
      <div className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
        {/* Content */}
        <div className="flex-1 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-gray-700 mb-6 italic leading-relaxed">
              {subtitle}
            </p>
          )}
          <ul className="space-y-3 sm:space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg sm:text-xl mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
          {demoButton && (
            linkTo ? (
              <Link href={linkTo}>
                <Button variant="primary">See Short Demo</Button>
              </Link>
            ) : (
              <Button variant="primary">See Short Demo</Button>
            )
          )}
        </div>

        {/* Image/Animation Placeholder */}
        <div className="flex-1 px-4 sm:px-0">
          {children || (
            <div className="w-full h-48 sm:h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-lg border border-gray-200">
              <span className="text-gray-500 font-medium text-sm sm:text-base">website animation</span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

