'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const testimonials = [
  {
    name: "Matt",
    quote: "I loved Digital Lift and was very impressed with the software, and his customer service was even better. I would highly recommend him to anyone, thank you!",
  },
  {
    name: "Alex",
    quote: "If you need help with your business you should contact Digital Lift. They are the best and they helped me a lot. They are reliable, fast and very good at their job!",
  },
  {
    name: "Brian",
    quote: "You've taken me from the bottom of the list on Google to the top. You've really helped my business grow and I appreciate everything that you do and highly recommend the services you provide!",
  },
  {
    name: "Armando",
    quote: "I've never had anything done so easily. Digital Lift is the best and if I had to do it all over again I would have used them before going through all these other companies!",
  },
  {
    name: "Jose",
    quote: "We've gotten a lot of compliments about it and there's a lot of activity going on. They keep us updated and they have very good prices. I really recommend going with Digital Lift!",
  },
  {
    name: "Blair",
    quote: "I've been very happy with their services. They're always available, have a quick response and are continuously upgrading their services. I would highly recommend them to anyone that's looking to grow their business!",
  },
];

const processSteps = [
  {
    title: "Demo Call",
    duration: "(20 mins)",
    description: "It's actually a sales call, we just didn't want to scare you. But seriously... we'll answer all your questions, show you any features you have questions about, and show you live client accounts & results.",
  },
  {
    title: "We build your system",
    duration: "(7-10 days)",
    description: "Fill out a basic onboarding form with your business details. After we have the correct information, we'll get to work on building your new website & marketing system.",
  },
  {
    title: "Launch Call",
    duration: "(25 mins)",
    description: "We'll walk you through your new website & marketing system, answer any questions you have, and show you how \"everything\" works... And by everything, we're really just talking about pressing two buttons.",
  },
];

export default function OurWorkPage() {
  const projectImages = Array.from({ length: 12 }, (_, i) => `/ourWork/${i + 1}.webp`);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Look at what we've done for other contractors
          </motion.h1>

          {/* Project Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Image
                  src={image}
                  alt={`Website example ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              What working with us looks like...
            </h2>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
              >
                {/* Step Number */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{step.duration}</p>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              The proof is in the pudding...
            </h2>
            <p className="text-xl text-gray-600">
              Let's see what our clients have to say
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-blue-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                
                <p className="text-gray-700 italic mb-4 text-center leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <p className="text-gray-900 font-semibold text-center mb-3">
                  -{testimonial.name}
                </p>
                
                <div className="text-center">
                  <Link 
                    href="/testimonials" 
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    See All →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to see your business featured here?
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's work together to create a marketing system that grows your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Book A Call
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
