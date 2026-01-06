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
    name: 'Mike Thompson',
    role: 'Owner',
    company: 'Thompson Plumbing',
    quote: "I used to lose 3-4 jobs a week because I couldn't answer calls while on a job. Now the AI captures every single lead. I haven't lost a job in months!"
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Owner',
    company: 'Rodriguez HVAC Services',
    quote: "Best investment I've made. The AI answers every call, even at 2 AM. I don't have to talk to customers on the phone anymore - it books everything automatically."
  },
  {
    name: 'Tom Wilson',
    role: 'Owner',
    company: 'Wilson Locksmith',
    quote: "I was missing calls constantly when I was on emergency jobs. Now the AI captures every lead and books them. My revenue is up 40% and I'm not losing jobs anymore."
  },
  {
    name: 'Robert Martinez',
    role: 'Owner',
    company: 'Martinez Electrical',
    quote: "The AI handles all my calls now. I don't need to answer the phone anymore - it qualifies leads and books appointments. I've stopped losing jobs completely."
  },
  {
    name: 'John Davis',
    role: 'Owner',
    company: 'Davis Roofing',
    quote: "Before Digital Lift, I'd lose jobs because I couldn't answer when I was on a roof. Now the AI captures every single call and books them. Game changer!"
  },
  {
    name: 'Mark Johnson',
    role: 'Owner',
    company: 'Johnson Handyman Services',
    quote: "I don't talk on the phone anymore. The AI does it all - answers questions, qualifies leads, books jobs. I haven't lost a single job since I got it."
  },
  {
    name: 'Steve Anderson',
    role: 'Owner',
    company: 'Anderson HVAC',
    quote: "The AI captures every lead, even when I'm busy. I used to lose 5-6 jobs a week. Now I lose zero. It books everything automatically - I don't need to answer calls."
  },
  {
    name: 'David Brown',
    role: 'Owner',
    company: 'Brown Plumbing Co.',
    quote: "Best thing I ever did for my business. The AI answers all my calls 24/7 and books jobs. I'm not losing any more opportunities - it captures everything."
  },
  {
    name: 'James Taylor',
    role: 'Owner',
    company: 'Taylor Locksmith',
    quote: "I was losing jobs left and right because I couldn't answer calls during emergency lockouts. Now the AI captures every lead and books them. Zero lost jobs now!"
  },
  {
    name: 'Michael Garcia',
    role: 'Owner',
    company: 'Garcia Electrical Services',
    quote: "The AI handles all my phone calls now. I don't need to talk to customers anymore - it qualifies leads and books appointments automatically. No more lost jobs!"
  },
  {
    name: 'Chris White',
    role: 'Owner',
    company: 'White Roofing Solutions',
    quote: "I used to miss calls constantly when I was on roofs. Now the AI captures every single call and books them. I haven't lost a job in 3 months!"
  },
  {
    name: 'Brian Lee',
    role: 'Owner',
    company: 'Lee HVAC Repair',
    quote: "The AI answers every call, even after hours. I don't talk on the phone anymore - it books everything. My lost jobs went from 10+ a month to zero."
  },
  {
    name: 'Kevin Moore',
    role: 'Owner',
    company: 'Moore Plumbing',
    quote: "Before this, I'd lose jobs because I couldn't answer when I was under a sink. Now the AI captures every lead and books them. I'm not losing any more jobs!"
  },
  {
    name: 'Daniel Harris',
    role: 'Owner',
    company: 'Harris Locksmith',
    quote: "The AI captures all my leads now. I don't need to answer the phone anymore - it handles everything and books jobs automatically. Zero lost opportunities!"
  },
  {
    name: 'Anthony Clark',
    role: 'Owner',
    company: 'Clark Electrical',
    quote: "I was losing 4-5 jobs a week because I couldn't answer calls while working. Now the AI captures every single call and books them. No more lost jobs!"
  },
  {
    name: 'Ryan Lewis',
    role: 'Owner',
    company: 'Lewis Handyman',
    quote: "The AI handles all my calls 24/7. I don't talk on the phone anymore - it qualifies leads and books appointments. I've stopped losing jobs completely."
  },
  {
    name: 'Jason Walker',
    role: 'Owner',
    company: 'Walker HVAC',
    quote: "Best decision I made. The AI answers every call and books jobs automatically. I don't need to answer the phone anymore. Zero lost jobs since I got it!"
  },
  {
    name: 'Eric Hall',
    role: 'Owner',
    company: 'Hall Plumbing Services',
    quote: "I used to lose jobs constantly when I was on calls. Now the AI captures every lead and books them. I haven't lost a single job in months!"
  },
  {
    name: 'Frank Young',
    role: 'Owner',
    company: 'Young Locksmith',
    quote: "The AI captures every single call, even when I'm on emergency jobs. I don't need to talk to customers anymore - it books everything. No more lost jobs!"
  },
  {
    name: 'Scott King',
    role: 'Owner',
    company: 'King Electrical',
    quote: "Before Digital Lift, I'd lose 6-7 jobs a week because I couldn't answer calls. Now the AI captures all my leads and books them. I'm not losing any more jobs!"
  },
  {
    name: 'Greg Wright',
    role: 'Owner',
    company: 'Wright Roofing',
    quote: "The AI handles all my phone calls now. I don't talk on the phone anymore - it qualifies leads and books appointments automatically. Zero lost jobs!"
  },
  {
    name: 'Tim Lopez',
    role: 'Owner',
    company: 'Lopez HVAC Services',
    quote: "I was missing calls all the time when I was on jobs. Now the AI captures every single call and books them. I haven't lost a job since I got it!"
  },
  {
    name: 'Paul Green',
    role: 'Owner',
    company: 'Green Plumbing Co.',
    quote: "The AI answers every call 24/7 and books jobs. I don't need to answer the phone anymore. My lost jobs went from 8+ a month to absolutely zero!"
  },
  {
    name: 'Jeff Adams',
    role: 'Owner',
    company: 'Adams Locksmith',
    quote: "I used to lose jobs because I couldn't answer calls during lockouts. Now the AI captures every lead and books them. No more lost opportunities!"
  },
  {
    name: 'Ray Baker',
    role: 'Owner',
    company: 'Baker Electrical Services',
    quote: "The AI captures all my leads now. I don't talk on the phone anymore - it handles everything and books jobs automatically. I've stopped losing jobs completely!"
  },
  {
    name: 'Joe Hill',
    role: 'Owner',
    company: 'Hill Handyman',
    quote: "Before this, I'd lose 5-6 jobs a week because I couldn't answer when I was working. Now the AI captures every single call and books them. Zero lost jobs!"
  },
  {
    name: 'Matt Nelson',
    role: 'Owner',
    company: 'Nelson HVAC',
    quote: "The AI handles all my calls 24/7. I don't need to answer the phone anymore - it qualifies leads and books appointments. I'm not losing any more jobs!"
  },
  {
    name: 'Dan Carter',
    role: 'Owner',
    company: 'Carter Plumbing',
    quote: "I was losing jobs constantly when I was on calls. Now the AI captures every lead and books them automatically. I haven't lost a single job in months!"
  },
  {
    name: 'Sam Mitchell',
    role: 'Owner',
    company: 'Mitchell Locksmith',
    quote: "The AI captures every single call, even when I'm busy. I don't talk to customers anymore - it books everything. No more lost jobs since I got it!"
  },
  {
    name: 'Rick Perez',
    role: 'Owner',
    company: 'Perez Electrical',
    quote: "I used to lose 4-5 jobs a week because I couldn't answer calls while working. Now the AI captures all my leads and books them. Zero lost jobs now!"
  },
  {
    name: 'Tony Roberts',
    role: 'Owner',
    company: 'Roberts Roofing',
    quote: "The AI answers every call and books jobs automatically. I don't need to answer the phone anymore. My lost jobs went from 10+ a month to zero!"
  },
  {
    name: 'Bill Turner',
    role: 'Owner',
    company: 'Turner HVAC Services',
    quote: "I was missing calls all the time when I was on jobs. Now the AI captures every single call and books them. I haven't lost a job in 3 months!"
  },
  {
    name: 'Jack Phillips',
    role: 'Owner',
    company: 'Phillips Plumbing',
    quote: "The AI handles all my phone calls now. I don't talk on the phone anymore - it qualifies leads and books appointments. I've stopped losing jobs completely!"
  },
  {
    name: 'Larry Campbell',
    role: 'Owner',
    company: 'Campbell Locksmith',
    quote: "Before Digital Lift, I'd lose jobs because I couldn't answer calls during emergencies. Now the AI captures every lead and books them. No more lost jobs!"
  },
  {
    name: 'Gary Parker',
    role: 'Owner',
    company: 'Parker Electrical',
    quote: "The AI captures all my leads 24/7. I don't need to answer the phone anymore - it handles everything and books jobs automatically. Zero lost opportunities!"
  },
  {
    name: 'Randy Evans',
    role: 'Owner',
    company: 'Evans Handyman',
    quote: "I used to lose 6-7 jobs a week because I couldn't answer when I was working. Now the AI captures every single call and books them. I'm not losing any more jobs!"
  },
  {
    name: 'Dennis Collins',
    role: 'Owner',
    company: 'Collins HVAC',
    quote: "The AI handles all my calls now. I don't talk on the phone anymore - it books everything automatically. My lost jobs went from 8+ a month to absolutely zero!"
  },
  {
    name: 'Wayne Stewart',
    role: 'Owner',
    company: 'Stewart Plumbing Co.',
    quote: "I was losing jobs constantly when I was on calls. Now the AI captures every lead and books them. I haven't lost a single job since I got it!"
  },
  {
    name: 'Ralph Morris',
    role: 'Owner',
    company: 'Morris Locksmith',
    quote: "The AI captures every single call, even when I'm busy. I don't need to talk to customers anymore - it books everything. No more lost jobs in months!"
  },
  {
    name: 'Victor Rogers',
    role: 'Owner',
    company: 'Rogers Electrical Services',
    quote: "Before this, I'd lose 5-6 jobs a week because I couldn't answer calls while working. Now the AI captures all my leads and books them. Zero lost jobs!"
  },
  {
    name: 'Henry Reed',
    role: 'Owner',
    company: 'Reed Roofing',
    quote: "The AI answers every call 24/7 and books jobs automatically. I don't need to answer the phone anymore. I've stopped losing jobs completely!"
  },
  {
    name: 'Albert Cook',
    role: 'Owner',
    company: 'Cook HVAC Repair',
    quote: "I was missing calls all the time when I was on jobs. Now the AI captures every single call and books them. I haven't lost a job in months!"
  },
  {
    name: 'Louis Morgan',
    role: 'Owner',
    company: 'Morgan Plumbing',
    quote: "The AI handles all my phone calls now. I don't talk on the phone anymore - it qualifies leads and books appointments. My lost jobs went to zero!"
  },
  {
    name: 'Eugene Bell',
    role: 'Owner',
    company: 'Bell Locksmith',
    quote: "I used to lose jobs because I couldn't answer calls during lockouts. Now the AI captures every lead and books them. No more lost opportunities!"
  },
  {
    name: 'Howard Murphy',
    role: 'Owner',
    company: 'Murphy Electrical',
    quote: "The AI captures all my leads 24/7. I don't need to answer the phone anymore - it handles everything and books jobs automatically. Zero lost jobs!"
  },
  {
    name: 'Arthur Bailey',
    role: 'Owner',
    company: 'Bailey Handyman',
    quote: "Before Digital Lift, I'd lose 7-8 jobs a week because I couldn't answer when I was working. Now the AI captures every single call and books them. No more lost jobs!"
  },
  {
    name: 'Ralph Rivera',
    role: 'Owner',
    company: 'Rivera HVAC',
    quote: "The AI handles all my calls 24/7. I don't talk on the phone anymore - it books everything automatically. I haven't lost a job since I got it!"
  },
  {
    name: 'Benjamin Cooper',
    role: 'Owner',
    company: 'Cooper Plumbing Services',
    quote: "I was losing jobs constantly when I was on calls. Now the AI captures every lead and books them. I'm not losing any more jobs - it's been months!"
  },
  {
    name: 'Harold Richardson',
    role: 'Owner',
    company: 'Richardson Locksmith',
    quote: "The AI captures every single call, even when I'm busy. I don't need to talk to customers anymore - it books everything. Zero lost jobs now!"
  },
  {
    name: 'Willie Cox',
    role: 'Owner',
    company: 'Cox Electrical',
    quote: "I used to lose 4-5 jobs a week because I couldn't answer calls while working. Now the AI captures all my leads and books them. No more lost jobs!"
  },
  {
    name: 'Roy Howard',
    role: 'Owner',
    company: 'Howard Roofing Solutions',
    quote: "The AI answers every call and books jobs automatically. I don't need to answer the phone anymore. I've stopped losing jobs completely - it's been amazing!"
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
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
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
          </div> */}

          {/* Load More Videos Button */}
          {/* {hasMoreVideos && (
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
          )} */}
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

