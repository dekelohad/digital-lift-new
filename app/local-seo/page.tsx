import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import VideoPlayer from '@/components/VideoPlayer';
import { Search, MapPin, FileText, Globe, Settings, Building2, BarChart } from 'lucide-react';

export const metadata: Metadata = {
  title: "Local SEO for Contractors - Get Found on Google | Digital Lift",
  description: "Local SEO that brings qualified leads to your business. On-site SEO, off-site optimization, Google Business Profile management, and monthly reporting. Get found when customers search locally.",
};

export default function LocalSEOPage() {
  const stats = [
    {
      percentage: "93%",
      description: "of people use Google to find local businesses."
    },
    {
      percentage: "97%",
      description: "research local companies online before making contact."
    },
    {
      percentage: "46%",
      description: "of searches have local purchase intent."
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "On Site SEO",
      description: "We optimize your website content, structure, and keywords to improve visibility and rankings. This includes proper use of headings, meta data, page speed optimization, and targeting high potential keywords that are most likely to convert into leads."
    },
    {
      icon: Globe,
      title: "Off Site SEO",
      description: "We strengthen your online authority by optimizing external ranking factors. This includes managing your Google Business Profile, building high quality backlinks, and ensuring your business is properly targeted for your service area."
    },
    {
      icon: Settings,
      title: "Technical SEO",
      description: "We ensure your website meets all technical requirements for search engines. This includes site speed, mobile responsiveness, secure connections, proper indexing, clean redirects, and structured data to help Google understand and rank your site correctly."
    },
    {
      icon: Building2,
      title: "Google Business Profile Optimization",
      description: "Your Google Business Profile is one of your most powerful local assets. We optimize your listing for accuracy, visibility, and engagement so your business shows up in local map results and attracts more calls."
    },
    {
      icon: BarChart,
      title: "Monthly SEO Reporting",
      description: "You receive clear monthly reports showing traffic growth, keyword rankings, and overall site health. We highlight what is working, identify opportunities for improvement, and continuously refine your local SEO strategy."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Local SEO That Drives Real Local Customers
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-4">
                  {stat.percentage}
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              See a short demo below
            </h2>
            <VideoPlayer videoSrc="/features/localSeo.mp4" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            What Is Local SEO?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Local SEO helps your business appear in front of customers who are actively searching for your services in your area. When done correctly, it brings consistent, high intent leads without paying for every click.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white text-gray-900 p-8 md:p-10 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-10 h-10 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">{feature.description}</p>
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
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Don't take our word for it
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Hear directly from contractors who use our systems
          </p>
          <TestimonialCarousel />
        </div>
      </section> */}

      <Footer />
    </main>
  );
}

