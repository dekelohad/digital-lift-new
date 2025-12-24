'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCard from '@/components/TestimonialCard';
import { motion } from 'framer-motion';
import { Loader2, Star, CheckCircle, XCircle } from 'lucide-react';
import Button from '@/components/Button';

// Video testimonials data
const videoTestimonials = [
  { id: 1, name: 'Frank', quote: "I would highly recommend going with them, my business has ramped up, literally overnight and their prices are very affordable. Feel free to reach out to me personally with any questions about them, thank you!" },
  { id: 2, name: 'Rick', quote: "Our company finally has the web presence it needs and our sales and profits have grown significantly! We look forward to working with them for many years to come!" },
  { id: 3, name: 'Zach', quote: "Big shoutout for helping me with my website and getting me more leads. I would recommend them to anyone!" },
  { id: 4, name: 'Ryan', quote: "They've made it so easy with all their automations and the awesome website. I can't thank them enough and you should all definitely check them out" },
  { id: 5, name: 'Armando', quote: "They are the absolute best at what they do. They built me a new website and within 10 days I got my first unpaid for lead! Best money I've ever spent." },
  { id: 6, name: 'James', quote: "They really helped my business grow and I highly recommend the service they provide." },
  { id: 7, name: 'Manny', quote: "Ever since he implemented the new website and landing pages, it's been nothing but great and our conversion has gone way up. We started getting calls almost immediately." },
  { id: 8, name: 'David', quote: "I've seen a significant improvement in my business. They've made my life so much easier!" },
  { id: 9, name: 'Netane', quote: "I've been very happy with their services. They're always available, have a quick response and are continuously upgrading their services. I would highly recommend them to anyone that's looking to grow their business!" },
  { id: 10, name: 'Jose', quote: "We've gotten a lot of compliments about it and there's a lot of activity going on. They keep us updated and they have very good prices. I really recommend them!" },
  { id: 11, name: 'Jason', quote: "They did a great job on our website. The website makes it super easy for our customers to leave us their information. If you need a good website, hit them up!" },
  { id: 12, name: 'Steve', quote: "I've been through the ringer with these companies man, trying to find a legit company. I can tell you... these guys are the truth, spot on, communication is amazing, give these guys a try" },
];

// Video testimonial card component
function VideoTestimonialCard({ video }: { video: typeof videoTestimonials[0] }) {
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.currentTime = 0.001;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="relative aspect-video bg-gray-900">
        <video
          src={`/testmionals/${video.id}.mp4`}
          className="w-full h-full object-contain"
          controls
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>
      
      <div className="p-5">
        <div className="flex gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          "{video.quote}"
        </p>
        
        <p className="font-semibold text-gray-900">-{video.name}</p>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: 'Cody Johnson',
    role: 'Owner',
    company: 'CJ Roofing Services',
    quote: "If you are looking for someone to get that phone ringing, they're the right fit for you! I'm so happy with them!"
  },
  {
    name: 'Armando Garcia',
    role: 'Owner',
    company: 'Garcia Landscaping',
    quote: "They are the absolute best at what they do. They built me a new website and within 10 days I got my first unpaid for lead! Best money spent with Jonathan and Digital Lift."
  },
  {
    name: 'James Mitchell',
    role: 'Director',
    company: 'Mitchell Plumbing Co.',
    quote: "After going through 2-3 other people I finally found someone that told me the truth. Really easy to work with and very respectable. I would recommend them to anyone!"
  },
  {
    name: 'Manny Rodriguez',
    role: 'CEO',
    company: 'Rodriguez HVAC',
    quote: "Ever since he implemented the new website and landing pages, it's been nothing but great and our conversion has gone way up. We started getting calls almost immediately."
  },
  {
    name: 'Wesley Thompson',
    role: 'Owner',
    company: 'Thompson Cleaning Services',
    quote: "Getting 5 star reviews has always given me anxiety, Jonathan and his team have taken all that away and I have seen a significant increase in business since I started working with them."
  },
  {
    name: 'Netane Palu',
    role: 'Owner',
    company: 'Pacific Electrical',
    quote: "Nothing but professional and awesome in every way, they are absolutely great to work with."
  },
  {
    name: 'Frank Martinez',
    role: 'Owner',
    company: 'Martinez Handyman',
    quote: "I would highly recommend going with Digital Lift, my business has ramped up, literally overnight and their prices are very affordable. Feel free to reach out to me personally!"
  },
  {
    name: 'David Chen',
    role: 'Director',
    company: 'Chen Remodeling',
    quote: "I've seen a significant improvement in my business. Digital Lift has made my life so much easier!"
  },
  {
    name: 'Rick Anderson',
    role: 'CEO',
    company: 'Anderson Contractors',
    quote: "Thank you to Jonathan and Digital Lift, our company finally has the web presence it needs and our sales and profits have grown significantly!"
  },
  {
    name: 'Luckie Williams',
    role: 'Owner',
    company: 'Williams Tree Service',
    quote: "Their business marketing systems have helped us a lot. Anytime I need anything I can always give them a call. They're super helpful with everything they do."
  },
  {
    name: 'Lopaka Kealoha',
    role: 'Owner',
    company: 'Aloha Pressure Washing',
    quote: "Before I started working with Digital Lift I was paying $1500/month with another service that just was not working for me. Digital Lift is super affordable and they do a fantastic job!"
  },
  {
    name: 'Adam Parker',
    role: 'Owner',
    company: 'Parker Painting Co.',
    quote: "It's been great and all I needed was one sale a month to pay for the service. Since I signed up I've gotten quite a bit more than that. I would recommend them to anyone!"
  }
];

const ITEMS_PER_PAGE = 12;
const VIDEOS_INITIAL = 3;

const beforeAfter = [
  { before: 'Missed calls go unanswered', after: 'Every call answered instantly by AI' },
  { before: 'Lost leads and opportunities', after: 'Every lead captured and qualified' },
  { before: 'Manual scheduling and back-and-forth', after: 'Appointments book automatically' },
  { before: 'No online presence or visibility', after: 'Website that converts visitors' },
  { before: 'Struggling to get reviews', after: 'Automated review system' },
  { before: 'Competitors taking your business', after: 'You book jobs 24/7' }
];

export default function ResultsPage() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [visibleVideos, setVisibleVideos] = useState(VIDEOS_INITIAL);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingVideos, setIsLoadingVideos] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, testimonials.length));
      setIsLoading(false);
    }, 800);
  };

  const handleLoadMoreVideos = () => {
    setIsLoadingVideos(true);
    setTimeout(() => {
      setVisibleVideos(videoTestimonials.length);
      setIsLoadingVideos(false);
    }, 300);
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;
  const hasMoreVideos = visibleVideos < videoTestimonials.length;

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Contractors using DigitalLift don't miss jobs. They book them.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              See real results from contractors who stopped losing opportunities and started booking jobs automatically.
            </p>
          </div>

          {/* Before vs After */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-900">Before DigitalLift</h3>
                </div>
                <ul className="space-y-3">
                  {beforeAfter.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item.before}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">After DigitalLift</h3>
                </div>
                <ul className="space-y-3">
                  {beforeAfter.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item.after}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {videoTestimonials.slice(0, visibleVideos).map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <VideoTestimonialCard video={video} />
              </motion.div>
            ))}
          </div>

          {/* Load More Videos Button */}
          {hasMoreVideos && (
            <div className="text-center mb-16">
              <button
                onClick={handleLoadMoreVideos}
                disabled={isLoadingVideos}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200"
              >
                {isLoadingVideos ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'See All Video Reviews'
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Text Testimonials Section */}
      <section className="pt-0 pb-16 md:pb-24 bg-white -mt-8 md:-mt-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % ITEMS_PER_PAGE) * 0.05 }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  quote={testimonial.quote}
                />
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-10 sm:mt-12">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Load More Reviews'
                )}
              </button>
            </div>
          )}

          {!hasMore && (
            <div className="text-center mt-10 sm:mt-12">
              <p className="text-gray-500">You've seen all {testimonials.length} written reviews!</p>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Ready to see these results for yourself?"
        description="Book a free demo and see how DigitalLift can turn your missed calls into booked jobs."
      />

      <Footer />
    </main>
  );
}

