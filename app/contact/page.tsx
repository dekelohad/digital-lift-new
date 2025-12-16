import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto mb-12 sm:mb-16 px-4">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-sm sm:text-base text-gray-700">info@stonesystems.io</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-sm sm:text-base text-gray-700">(555) 123-4567</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about your business..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

