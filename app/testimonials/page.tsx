'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCard from '@/components/TestimonialCard';
import { motion } from 'framer-motion';
import { Loader2, Star } from 'lucide-react';

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
    // Force show first frame immediately
    e.currentTarget.currentTime = 0.001;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* Video */}
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
      
      {/* Content */}
      <div className="p-5">
        {/* Stars */}
        <div className="flex gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        {/* Quote */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          "{video.quote}"
        </p>
        
        {/* Name */}
        <p className="font-semibold text-gray-900">-{video.name}</p>
      </div>
    </div>
  );
}

const testimonials = [
  // Original testimonials
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
  },
  // New testimonials about various services
  {
    name: 'Marcus Thompson',
    role: 'Owner',
    company: 'Thompson Electric',
    quote: "The missed call text back feature alone has saved me thousands in lost business. Customers love getting an instant response even when I'm on a job."
  },
  {
    name: 'Jeremy Walsh',
    role: 'CEO',
    company: 'Walsh Pool Construction',
    quote: "Our Google reviews went from 12 to over 80 in just 3 months with their 5-star review system. It's completely transformed our online reputation."
  },
  {
    name: 'Carlos Mendez',
    role: 'Owner',
    company: 'Mendez Roofing',
    quote: "The AI receptionist handles calls 24/7. I've booked jobs at 2am that I would have completely missed before. Game changer for my business."
  },
  {
    name: 'Steven Kim',
    role: 'Director',
    company: 'Kim Landscaping Design',
    quote: "Their local SEO work got us ranking #1 for landscaping in our city. We went from 5 leads a week to 25+ quality inquiries."
  },
  {
    name: "Mike O'Brien",
    role: 'Owner',
    company: "O'Brien Plumbing",
    quote: "The automated follow-up system is incredible. Leads that used to go cold are now converting because of the consistent follow-up sequences."
  },
  {
    name: 'Lucas Nguyen',
    role: 'Owner',
    company: 'Nguyen Cleaning Pro',
    quote: "My new website looks absolutely stunning and loads super fast. Customers constantly compliment how professional it looks."
  },
  {
    name: 'Derek Washington',
    role: 'CEO',
    company: 'Washington HVAC Solutions',
    quote: "The all-in-one inbox changed everything. No more juggling between Facebook messages, texts, and emails. It's all in one place now."
  },
  {
    name: 'Austin Foster',
    role: 'Owner',
    company: 'Foster Flooring',
    quote: "I was skeptical at first, but the ROI is undeniable. For every dollar I spend with Digital Lift, I'm making at least $10 back."
  },
  {
    name: 'Tony Russo',
    role: 'Owner',
    company: 'Russo Painting',
    quote: "The one-click marketing campaigns make it so easy to stay in touch with past customers. I've gotten so much repeat business from those emails."
  },
  {
    name: 'Patrick Green',
    role: 'Director',
    company: 'Green Thumb Gardens',
    quote: "Their team is so responsive. Anytime I have a question or need something changed, they're on it within hours. Best support I've ever had."
  },
  {
    name: 'Kevin Murphy',
    role: 'Owner',
    company: 'Murphy Electrical Services',
    quote: "The business phone system is fantastic. I finally have a professional number that routes calls properly and tracks everything."
  },
  {
    name: 'Richard Torres',
    role: 'CEO',
    company: 'Torres Tree Service',
    quote: "We've tripled our revenue since working with Digital Lift. Their marketing systems actually work unlike the other agencies we tried."
  },
  {
    name: 'Brandon Lee',
    role: 'Owner',
    company: 'Lee Handyman Services',
    quote: "The calendar booking feature on my website has eliminated all the back-and-forth scheduling. Customers book directly and I just show up."
  },
  {
    name: 'Mitchell Davis',
    role: 'Owner',
    company: 'Davis Deck Builders',
    quote: "I was losing so many calls when I was busy on jobs. The missed call text back has recovered at least 15 customers in the first month alone."
  },
  {
    name: 'Chris Peterson',
    role: 'Director',
    company: 'Peterson Paving',
    quote: "The website they built for us ranks on the first page of Google for 12 different keywords. Organic leads are our #1 source now."
  },
  {
    name: 'Nicholas Adams',
    role: 'Owner',
    company: 'Adams Interior Design',
    quote: "The 5-star magic funnel is genius. We went from struggling to get reviews to having customers excited to leave us feedback."
  },
  {
    name: 'Steve Wilson',
    role: 'CEO',
    company: 'Wilson Concrete',
    quote: "Best investment I've made in my business. Period. The leads are qualified, the systems work, and the price is unbeatable."
  },
  {
    name: 'Ethan Brown',
    role: 'Owner',
    company: 'Brown Pest Solutions',
    quote: "Their AI calling system books appointments while I'm working. It's like having a full-time receptionist for a fraction of the cost."
  },
  {
    name: 'Jason Taylor',
    role: 'Owner',
    company: 'Taylor Fencing Co.',
    quote: "I've tried 4 different marketing companies. Digital Lift is the only one that actually delivered results. My phone won't stop ringing."
  },
  {
    name: 'Stephen Clark',
    role: 'Director',
    company: 'Clark Moving Services',
    quote: "The automated review requests have transformed our reputation. We're now the highest-rated moving company in our area."
  },
  {
    name: 'Daniel White',
    role: 'Owner',
    company: 'White Roofing',
    quote: "Their funnel for capturing leads is insane. I'm getting 40% more leads from the same amount of traffic since they redesigned everything."
  },
  {
    name: 'Lorenzo Martinez',
    role: 'CEO',
    company: 'Martinez Hardscaping',
    quote: "The local SEO package put us on the map. We're showing up in the Google 3-pack for every search term that matters to our business."
  },
  {
    name: 'Robert Jackson',
    role: 'Owner',
    company: 'Jackson Plumbing',
    quote: "Having all my customer conversations in one inbox is a lifesaver. I never miss a message anymore and my response time is instant."
  },
  {
    name: 'Keith Lewis',
    role: 'Owner',
    company: 'Lewis Lawn Care',
    quote: "The marketing automations run in the background while I focus on actual work. It's like having a marketing team working 24/7."
  },
  {
    name: 'Brian Hall',
    role: 'Director',
    company: 'Hall Heating & Cooling',
    quote: "From the website to the review system to the missed call texts - everything Digital Lift has done for us has been top notch."
  },
  {
    name: 'Christian Young',
    role: 'Owner',
    company: 'Young Window Cleaning',
    quote: "The ROI calculator on their site was accurate. I'm making exactly what they predicted I would, maybe even more."
  },
  {
    name: 'William King',
    role: 'CEO',
    company: 'King Siding',
    quote: "My competitors are wondering how we're getting so many reviews. The 5-star system makes it effortless for happy customers to leave feedback."
  },
  {
    name: 'Jesse Scott',
    role: 'Owner',
    company: 'Scott Dog Grooming',
    quote: "The appointment booking and reminder system has cut our no-shows by 80%. Customers get automatic reminders and it just works."
  },
  {
    name: 'Timothy Wright',
    role: 'Owner',
    company: 'Wright General Contracting',
    quote: "I was hesitant about the AI receptionist but customers can't tell the difference. It books appointments perfectly every time."
  },
  {
    name: 'Aaron Harris',
    role: 'Director',
    company: 'Harris Cleaning Co.',
    quote: "The one-click campaigns are perfect for seasonal promotions. I send out an offer and my schedule fills up within days."
  },
  {
    name: 'Christopher Moore',
    role: 'Owner',
    company: 'Moore Electrical',
    quote: "Digital Lift's website design converted our online presence. We went from looking like amateurs to looking like the biggest company in town."
  },
  {
    name: 'Morgan Turner',
    role: 'CEO',
    company: 'Turner Pressure Washing',
    quote: "The lead follow-up automations are worth their weight in gold. So many leads that would have ghosted us are now paying customers."
  },
  {
    name: 'Joseph Allen',
    role: 'Owner',
    company: 'Allen Garage Doors',
    quote: "My Google Business profile went from barely visible to dominating the local search results. Phone rings constantly now."
  },
  {
    name: 'Scott Baker',
    role: 'Owner',
    company: 'Baker Remodeling',
    quote: "The business phone with call tracking shows me exactly where my leads come from. I finally know which marketing efforts are working."
  },
  {
    name: 'Andrew Nelson',
    role: 'Director',
    company: 'Nelson Insulation',
    quote: "We've been with Digital Lift for a year now and they keep improving our systems. The ROI just keeps getting better."
  },
  {
    name: 'Robert Hill',
    role: 'Owner',
    company: 'Hill Pool Services',
    quote: "Their team understood the pool service industry and built a website that speaks directly to our customers. Conversions are through the roof."
  },
  {
    name: 'Paul Campbell',
    role: 'CEO',
    company: 'Campbell Gutters',
    quote: "The missed call text back paid for itself in the first week. One recovered customer covered 3 months of service."
  },
  {
    name: 'Victor Reed',
    role: 'Owner',
    company: 'Reed Interior Painting',
    quote: "Every touchpoint with Digital Lift has been professional and helpful. They genuinely care about growing my business."
  },
  {
    name: 'Gregory Cox',
    role: 'Owner',
    company: 'Cox Concrete Coating',
    quote: "The all-in-one inbox combined with the AI features has completely automated my lead response. I respond instantly, every single time."
  },
  {
    name: 'Anthony Howard',
    role: 'Director',
    company: 'Howard Landscaping',
    quote: "Going from no online presence to ranking #1 locally seemed impossible. Digital Lift made it happen in under 6 months."
  },
  {
    name: 'Mark Evans',
    role: 'Owner',
    company: 'Evans Home Repairs',
    quote: "The review system alone has generated more business than any advertising I've ever done. Social proof is everything."
  },
  {
    name: 'Darren Ross',
    role: 'CEO',
    company: 'Ross Carpet Cleaning',
    quote: "I was spending hours on marketing. Now the automations handle it all and I'm booking more jobs than ever before."
  },
  {
    name: 'Eric Stewart',
    role: 'Owner',
    company: 'Stewart Drywall',
    quote: "The functional website they built actually converts visitors into leads. It's not just pretty - it actually works."
  },
  {
    name: 'Carter Bell',
    role: 'Owner',
    company: 'Bell Kitchen & Bath',
    quote: "Digital Lift helped us stand out in a crowded market. Our brand looks premium and customers treat us that way."
  },
  {
    name: 'Nathan Phillips',
    role: 'Director',
    company: 'Phillips Plumbing Plus',
    quote: "The AI receptionist handles after-hours calls perfectly. I'm booking emergency jobs that I would have lost to competitors."
  },
  {
    name: 'Hunter Morris',
    role: 'Owner',
    company: 'Morris Cleaning Service',
    quote: "From the website to the booking system to the follow-ups, everything works together seamlessly. My business runs itself now."
  },
  {
    name: 'Douglas Price',
    role: 'CEO',
    company: 'Price Roofing Experts',
    quote: "I've referred 5 other contractors to Digital Lift because of how well they've treated me. Everyone I've sent has been just as happy."
  },
  {
    name: 'Julian Sanders',
    role: 'Owner',
    company: 'Sanders Septic Services',
    quote: "The local SEO work was incredible. We're now the go-to septic company in 3 counties because of our online visibility."
  },
  {
    name: 'Henry Rogers',
    role: 'Owner',
    company: 'Rogers Chimney Sweep',
    quote: "Missed calls used to cost me thousands. Now every missed call gets an instant text and I haven't lost a lead since."
  },
  {
    name: 'Oliver Cooper',
    role: 'Director',
    company: 'Cooper Foundation Repair',
    quote: "The quality of leads from our new website is incredible. These are people ready to buy, not tire kickers."
  },
  {
    name: 'Samuel Jenkins',
    role: 'Owner',
    company: 'Jenkins Junk Removal',
    quote: "The one-click marketing campaigns keep us top of mind with past customers. We get referrals constantly from people we served years ago."
  },
  {
    name: 'Grant Bailey',
    role: 'CEO',
    company: 'Bailey Blinds & Shutters',
    quote: "Digital Lift's systems are worth every penny. My only regret is not finding them sooner. 5 stars isn't enough."
  },
  {
    name: 'Kenneth Ward',
    role: 'Owner',
    company: 'Ward Waterproofing',
    quote: "The 5-star magic funnel is genius. Bad reviews go to us privately, good reviews go to Google. Our rating jumped from 3.8 to 4.9."
  },
  {
    name: 'Harrison Peterson',
    role: 'Owner',
    company: 'Peterson Painting Pro',
    quote: "They understand contractors. They know our challenges and built systems that actually solve our problems. Highly recommend."
  },
  {
    name: 'Raymond Brooks',
    role: 'Director',
    company: 'Brooks Basement Finishing',
    quote: "The automated lead follow-up has increased our close rate by 35%. Leads that used to go cold are now becoming customers."
  },
  {
    name: 'Mason Gray',
    role: 'Owner',
    company: 'Gray Granite Countertops',
    quote: "Our website finally matches the quality of our work. Customers comment on how professional we look before we even show up."
  },
  {
    name: 'Jeffrey James',
    role: 'CEO',
    company: 'James Demolition',
    quote: "The business phone system with the AI features has made us look like a much bigger company. Professional from the first call."
  },
  {
    name: 'Alex Powell',
    role: 'Owner',
    company: 'Powell Powerwashing',
    quote: "Digital Lift took us from invisible online to dominating our market. The investment paid for itself in the first month."
  }
];

const ITEMS_PER_PAGE = 12;
const VIDEOS_INITIAL = 3;

export default function TestimonialsPage() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [visibleVideos, setVisibleVideos] = useState(VIDEOS_INITIAL);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingVideos, setIsLoadingVideos] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
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
              Real Results From Real Clients
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Don't take our word for it. Hear directly from contractors who use our systems and see the results firsthand.
            </p>
          </div>

          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
            <div className="text-center mt-10">
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
                  <>
                    See All Video Reviews
                  </>
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
                  <>
                    Load More Reviews
                  </>
                )}
              </button>
            </div>
          )}

          {/* All loaded message */}
          {!hasMore && (
            <div className="text-center mt-10 sm:mt-12">
              <p className="text-gray-500">You've seen all {testimonials.length} written reviews!</p>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Want to schedule a time to talk?"
        description="See everything we do to help you grow your business so you can implement it yourself or let us do it for you."
      />

      <Footer />
    </main>
  );
}
