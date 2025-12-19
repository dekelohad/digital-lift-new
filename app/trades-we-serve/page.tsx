'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const featuredTrades = [
  { name: "Landscapers", image: "/tradesWeServe/Landscapers.webp" },
  { name: "Remodeling", image: "/tradesWeServe/Remodeling.webp" },
  { name: "Pressure Washer", image: "/tradesWeServe/Pressure Washer.webp" },
  { name: "Moving Companies", image: "/tradesWeServe/Moving Companies.webp" },
  { name: "Floor & Carpet Cleaning", image: "/tradesWeServe/Floor & Carpet Cleaning.webp" },
  { name: "Roofing", image: "/tradesWeServe/Roofing.webp" },
  { name: "HVAC", image: "/tradesWeServe/HVAC.webp" },
  { name: "Plumbing", image: "/tradesWeServe/Plumbing.webp" },
  { name: "Electrician", image: "/tradesWeServe/Electrician.webp" },
  { name: "Handyman", image: "/tradesWeServe/Handyman.webp" },
  { name: "Painters", image: "/tradesWeServe/Painters.webp" },
  { name: "Decks & Patios", image: "/tradesWeServe/Decks & Patios.webp" },
  { name: "Siding", image: "/tradesWeServe/Siding.webp" },
  { name: "Pool Construction", image: "/tradesWeServe/Pool Construction .webp" },
  { name: "Paving", image: "/tradesWeServe/Paving.webp" },
  { name: "Hardscaping", image: "/tradesWeServe/Hardscaping.webp" },
  { name: "Windows & Doors", image: "/tradesWeServe/Windows & Doors.webp" },
  { name: "General Contractors", image: "/tradesWeServe/General Contractors.webp" },
  { name: "Pest Control", image: "/tradesWeServe/ Pest Control Pest Control.webp" },
  { name: "Tree Service", image: "/tradesWeServe/Tree Service.webp" },
];

const allTrades = [
  "Additions & Remodeling",
  "Air Conditioning",
  "Appliances",
  "Appraiser",
  "Architects & Engineers",
  "Art & Mirror Mounting",
  "Audio/Visual & Computers",
  "Awnings",
  "Brick & Stone",
  "Cabinets",
  "Carpenters",
  "Carpet & Upholstery Cleaning",
  "Ceilings",
  "Central Vacuum",
  "Cleaning & Maid Services",
  "Commercial Contractors",
  "Concrete",
  "Construction",
  "Countertops",
  "Decks",
  "Demolition Service",
  "Designers & Decorators",
  "Disability Services",
  "Disaster Recovery Services",
  "Docks",
  "Doors",
  "Drywall & Plaster",
  "Electrical",
  "Excavation",
  "Fans",
  "Fences",
  "Fireplace & Wood Stoves",
  "Sports Equipment Assembly",
  "Flooring & Carpet",
  "Foundations",
  "Fountains & Ponds",
  "Furniture Assembly",
  "Furniture Repair & Refinish",
  "Garage & Garage Doors",
  "General Contractors",
  "Glass & Mirrors",
  "Gutters",
  "Handyman Services",
  "Heating & Furnace Systems",
  "Home Inspection",
  "Home Maintenance",
  "Home Services",
  "Hot Tubs, Spas & Saunas",
  "Household Help",
  "HVAC",
  "Insulation",
  "Landscaping",
  "Lawn & Garden Care",
  "Lifting & Moving Heavy Items",
  "Locksmith",
  "Metal Fabrication",
  "Mold & Asbestos Services",
  "Moving",
  "New Home Builders",
  "Organizers",
  "Outdoor Playgrounds",
  "Packing & Unpacking Services",
  "Painting",
  "Paving",
  "Permit Services",
  "Pest Control",
  "Plumbing",
  "Powdercoating",
  "Remodeling",
  "Roofing",
  "Sandblasting Service",
  "Septic Tanks & Wells",
  "Sheds & Enclosures",
  "Siding",
  "Sign Making Service",
  "Skylights",
  "Snow Removal Service",
  "Solar",
  "Stained Glass",
  "Swimming Pools",
  "Tennis or Game Court",
  "Tile",
  "Tree Service",
  "Wall Coverings",
  "Waste Material Removal",
  "Water Treatment System",
  "Waterproofing",
  "Window Coverings",
  "Windows",
  "Yard & Garden Work",
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

export default function TradesWeServePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Serving all these trades and more...
          </motion.h1>

          {/* Featured Trades Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {featuredTrades.map((trade, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={trade.image}
                    alt={trade.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {trade.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Trades Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            All Trades by Category
          </motion.h2>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {allTrades.map((trade, index) => (
              <motion.p
                key={index}
                className="text-gray-700 text-sm md:text-base hover:text-blue-600 cursor-pointer transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.01 }}
              >
                {trade}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Want to schedule a time to talk?
              </motion.h2>
              <motion.p 
                className="text-lg text-blue-100 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                See everything we do to help you grow your business so you can implement it yourself or let us do it for you.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Book A Call
                </button>
              </Link>
            </motion.div>
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to get started?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
