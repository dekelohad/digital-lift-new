import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact Digital Lift - Get in Touch | Austin, TX",
  description: "Have questions about our marketing systems? Contact Digital Lift today. Email us at info@digitalLift.io or call +1 (737) 937-6612. Located in Austin, Texas.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Have questions? Want to learn more? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto mb-12 sm:mb-16 px-4">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:info@digitalLift.io"
                className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors"
              >
                info@digitalLift.io
              </a>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+17379376612"
                className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors"
              >
                +1 (737) 937-6612
              </a>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-sm sm:text-base text-gray-700">
                11801 Domain Blvd, Suite W350<br />
                Austin, TX 78758
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

