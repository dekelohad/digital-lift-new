import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import VideoPlayer from '@/components/VideoPlayer';
import { Search, Star, Smartphone, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: "Functional Websites for Contractors - Convert Visitors to Leads | Digital Lift",
  description: "Get a functional website designed to convert traffic into real text conversations. Mobile-first design, SEO optimization, review showcase, and instant SMS lead capture. Built for contractors.",
};

export default function FunctionalWebsitePage() {
  const stats = [
    {
      percentage: "75%",
      description: "of people judge a company's credibility based on its website."
    },
    {
      percentage: "78%",
      description: "of small business owners say a website has helped grow their business."
    },
    {
      percentage: "67%",
      description: "of users trust businesses with a seamless website experience, leading to higher sales."
    }
  ];

  const features = [
    {
      icon: Search,
      title: "Get Found Online",
      description: "We build every website with search visibility in mind. Your site is properly indexed and optimized according to Google's best practices. We structure keywords, meta tags, headers, and page speed before launch so your business shows up when customers search locally. Content options are available to support long term growth."
    },
    {
      icon: Star,
      title: "Showcase Your Best Reviews",
      description: "Your reputation matters. We highlight your strongest reviews across your website to build trust instantly. Reviews are kept up to date and professionally presented so your business always puts its best foot forward."
    },
    {
      icon: Smartphone,
      title: "Mobile First Experience",
      description: "Most customers search for local services on their phone. We prioritize fast load times, clear calls to action, clickable phone numbers, and a smooth mobile experience that makes it easy to contact you."
    },
    {
      icon: MessageSquare,
      title: "Instant SMS Conversations",
      description: "Email back and forth slows down sales. Our websites are designed to start text conversations instantly. Quote forms and chat widgets capture phone numbers and send immediate confirmations so you can follow up directly, even if the visitor leaves your site."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Feature Banner */}
      <section className="py-8 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <p className="text-lg md:text-xl font-semibold mb-4">
              This feature is included in our booking system
            </p>
            <a href="/how-it-works">
              <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg">
                See How It Books Jobs
              </button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Functional Websites That Build Trust and Drive Growth
            </h1>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-600 mb-3 sm:mb-4">
                  {stat.percentage}
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="max-w-5xl mx-auto mb-12 sm:mb-20 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              See a short demo below
            </h2>
            <VideoPlayer videoSrc="/features/functional%20websites%20last%20.mp4" />
          </div>
        </div>
      </section>

      {/* What is the functional website? Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            What Is a Functional Website?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            A functional website is not just about design. It is built to be found, earn trust, and turn visitors into real conversations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white text-gray-900 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">{feature.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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

