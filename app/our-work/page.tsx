'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';

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
    title: "Try the AI Receptionist Live — No Signup Required",
    duration: "(60-Second Demo)",
    description: "Test the real AI system that answers calls, texts missed leads, and books jobs automatically. Click the chat or call icon and experience it like your customers would.",
  },
  {
    title: "Book Your Free AI Setup Call",
    duration: "(15 minutes)",
    description: "On this call we review your business, show where you're losing leads today, and decide if this system is a good fit for you.",
  },
  {
    title: "We Build & Launch Your AI System",
    duration: "(2–3 days)",
    description: "After your call, our team customizes your AI receptionist, booking flows, and website automation. Once everything is ready, we activate your 14-day free trial.",
  },
  {
    title: "14-Day Free Trial — Keep It Only If It Books You Jobs",
    duration: "(Risk-Free)",
    description: "Use the system with real customers. If it doesn't deliver results, you simply don't continue.",
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-12 md:mb-16 leading-tight"
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
              Don't take our word for it
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from contractors who use our systems
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

      <CTA
        title="Want to schedule a time to talk?"
        description="See everything we do to help you grow your business so you can implement it yourself or let us do it for you."
      />

      {/* Video Testimonials Carousel */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Don't take our word for it
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Hear directly from contractors who use our systems
          </p>
          <TestimonialCarousel />
        </div>
      </section>

      <Footer />
    </main>
  );
}
