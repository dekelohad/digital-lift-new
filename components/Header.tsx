'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const aboutItems = [
  { href: '/about', text: 'About Us' },
  { href: '/our-process', text: 'Our Process' },
  { href: '/trades-we-serve', text: 'Trades We Serve' },
  { href: '/roi-calculator', text: 'ROI Calculator' }
];

const whatYouGetItems = [
  { href: '/functional-website', text: 'Functional Website' },
  { href: '/answers-calls-24-7', text: 'Answers Calls 24/7' },
  { href: '/texts-missed-callers-instantly', text: 'Texts Missed Callers Instantly' },
  { href: '/books-jobs-from-website', text: 'Books Jobs From Website' },
  { href: '/ai-books-appointments', text: 'AI Books Appointments' }
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);
  const [whatYouGetHovered, setWhatYouGetHovered] = useState(false);
  const [mobileWhatYouGetOpen, setMobileWhatYouGetOpen] = useState(false);

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
            {/* Navigation Items */}
            {[
              { 
                label: 'Products', 
                href: '#',
                isDropdown: true,
                items: whatYouGetItems
              },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Testimonials', href: '/results' },
              { 
                label: 'About', 
                href: '#',
                isDropdown: true,
                items: aboutItems
              },
              { label: 'Contact', href: '/contact' }
            ].map((item: any) => {
              if (item.isDropdown) {
                const isProducts = item.label === 'Products';
                const isAbout = item.label === 'About';
                const hoverState = isProducts ? whatYouGetHovered : (isAbout ? aboutHovered : false);
                const setHoverState = isProducts ? setWhatYouGetHovered : (isAbout ? setAboutHovered : () => {});
                
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setHoverState(true)}
                    onMouseLeave={() => setHoverState(false)}
                  >
                    <button className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap group flex items-center gap-1">
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${hoverState ? 'rotate-180' : ''}`} />
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                    <AnimatePresence>
                      {hoverState && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.items?.map((dropdownItem: any, index: number) => (
                            <a
                              key={index}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                            >
                              {dropdownItem.text}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              );
            })}

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
              href="/contact"
              onClick={() => sessionStorage.setItem('scrollToBooking', 'true')}
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
                { 
                  label: 'Products', 
                  href: '#',
                  isDropdown: true,
                  items: whatYouGetItems
                },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Testimonials', href: '/results' },
                { 
                  label: 'About', 
                  href: '#',
                  isDropdown: true,
                  items: aboutItems
                },
                { label: 'Contact', href: '/contact' }
              ].map((item: any, index: number) => {
                if (item.isDropdown) {
                  const isProducts = item.label === 'Products';
                  const isAbout = item.label === 'About';
                  const mobileOpenState = isProducts ? mobileWhatYouGetOpen : (isAbout ? mobileAboutOpen : false);
                  const setMobileOpenState = isProducts ? setMobileWhatYouGetOpen : (isAbout ? setMobileAboutOpen : () => {});
                  
                  return (
                    <div key={item.label}>
                      <motion.button
                        className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 font-medium py-2 text-base"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        onClick={() => setMobileOpenState(!mobileOpenState)}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenState ? 'rotate-180' : ''}`} />
                      </motion.button>
                      <AnimatePresence>
                        {mobileOpenState && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {item.items?.map((dropdownItem: any, subIndex: number) => (
                              <motion.a
                                key={subIndex}
                                href={dropdownItem.href}
                                className="block pl-6 py-2 text-gray-600 hover:text-gray-900 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                {dropdownItem.text}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
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
                );
              })}
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
                  href="/contact" 
                  className="block"
                  onClick={() => sessionStorage.setItem('scrollToBooking', 'true')}
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
