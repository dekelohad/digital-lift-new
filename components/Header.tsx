'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <a href="/#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              Services
            </a>
            <a href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              Pricing
            </a>
            <a href="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              Testimonials
            </a>
            <a href="/our-work" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              Our Work
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              About
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#login" className="text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap">
              Log In
            </a>
            <Button variant="primary" className="whitespace-nowrap">Book A Call</Button>
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
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <a href="/#services" className="block text-gray-700 hover:text-gray-900 font-medium">
              Services
            </a>
            <a href="/pricing" className="block text-gray-700 hover:text-gray-900 font-medium">
              Pricing
            </a>
            <a href="/testimonials" className="block text-gray-700 hover:text-gray-900 font-medium">
              Testimonials
            </a>
            <a href="/our-work" className="block text-gray-700 hover:text-gray-900 font-medium">
              Our Work
            </a>
            <a href="/about" className="block text-gray-700 hover:text-gray-900 font-medium">
              About
            </a>
            <a href="#login" className="block text-gray-700 hover:text-gray-900 font-medium">
              Log In
            </a>
            <Button variant="primary" className="w-full">Book A Call</Button>
          </div>
        )}
      </nav>
    </header>
  );
}

