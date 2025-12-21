'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const services = [
  { href: '/functional-website', text: 'Functional Website' },
  { href: '/missed-call-text-back', text: 'Missed Call Text Back' },
  { href: '/5-star-magic-funnel', text: '5 Star Magic Funnel' },
  { href: '/automated-lead-follow-up', text: 'Automated Lead Follow Up' },
  { href: '/one-click-marketing-campaigns', text: 'One-Click Marketing Campaigns' },
  { href: '/all-in-one-inbox', text: 'All-In-One Inbox' },
  { href: '/business-phone', text: 'Business Phone' },
  { href: '/local-seo', text: 'Local SEO' },
  { href: '/ai-receptionist-calendar-booking', text: 'AI Receptionist with Calendar Booking' }
];

const aboutItems = [
  { href: '/about', text: 'About Us' },
  { href: '/our-work', text: 'Our Work' },
  { href: '/our-process', text: 'Our Process' },
  { href: '/trades-we-serve', text: 'Trades We Serve' }
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === '/') {
      // Already on homepage, just scroll
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const headerHeight = 80; // Account for sticky header
        const elementPosition = servicesSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to homepage first, then scroll after page loads
      router.push('/');
      // Use a combination of timeout and checking for element existence
      const checkAndScroll = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          const headerHeight = 80;
          const elementPosition = servicesSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          // If element not found yet, try again
          setTimeout(checkAndScroll, 50);
        }
      };
      setTimeout(checkAndScroll, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesHovered(true)}
              onMouseLeave={() => setServicesHovered(false)}
            >
              <button
                onClick={scrollToServices}
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer bg-transparent border-none group"
              >
                Services
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${servicesHovered ? 'rotate-180' : ''}`}
                />
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
              
              <AnimatePresence>
                {servicesHovered && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {services.map((service) => (
                      <a
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                      >
                        {service.text}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Navigation Items */}
            {[
              { label: 'Pricing', href: '/pricing' },
              { label: 'Testimonials', href: '/testimonials' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutHovered(true)}
              onMouseLeave={() => setAboutHovered(false)}
            >
              <a
                href="/about"
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap flex items-center gap-1 group"
              >
                About
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${aboutHovered ? 'rotate-180' : ''}`}
                />
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              
              <AnimatePresence>
                {aboutHovered && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {aboutItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                      >
                        {item.text}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <a
              href="/contact"
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap group"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://app.digitallift.io/" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap px-4 py-2 group"
            >
              Log In
              <span className="absolute left-4 right-4 -bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a 
              href="https://api.digitallift.io/widget/booking/jpGifmdOeIbfiftmjQ2w" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="whitespace-nowrap">Book A Call</Button>
            </a>
          </div>

          {/* Mobile/Tablet Menu Button - Shows on screens smaller than lg */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden py-4 space-y-3 border-t border-gray-200 mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {[
                { label: 'Pricing', href: '/pricing' },
                { label: 'Testimonials', href: '/testimonials' }
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900 font-medium py-2 text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToServices(e);
                }}
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 text-base w-full text-left bg-transparent border-none cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                Services
              </motion.button>
              
              {/* About Section in Mobile */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="text-gray-700 font-medium py-2 text-base">About</div>
                {aboutItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-600 hover:text-gray-900 font-medium py-2 pl-4 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (3 + index) * 0.05, duration: 0.3 }}
                  >
                    {item.text}
                  </motion.a>
                ))}
              </div>
              
              <motion.a
                href="/contact"
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 text-base"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                Contact
              </motion.a>
              <motion.a 
                href="https://app.digitallift.io/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 text-base"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                Log In
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <a 
                  href="https://api.digitallift.io/widget/booking/jpGifmdOeIbfiftmjQ2w" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="primary" className="w-full mt-2">Book A Call</Button>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
