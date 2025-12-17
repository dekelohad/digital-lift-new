'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import ProductIntro from '@/components/ProductIntro';
import ProductFeature from '@/components/ProductFeature';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { pageTransition } from '@/lib/animations';

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      <Hero />
      <Testimonials />
      <ProductIntro />
      
      {/* Functional Website */}
      <ProductFeature
        title="Functional Website"
        subtitle="Websites Built to Turn Visitors Into Conversations. Get a website designed to convert traffic into real text conversations that go straight to your phone. No missed leads. No slow response times."
        features={[
          { title: "Get Found Online", description: "If customers cannot find your business on Google, they will find your competitor instead. We make sure your business shows up where it matters." },
          { title: "Showcase Your Best Reviews", description: "Every business has a bad review or two. We highlight the feedback that builds trust and convinces customers to contact you." },
          { title: "Mobile-First Design", description: "Most people visit your website from their phone. We design for mobile first so your site looks great and converts fast on any device." },
          { title: "Optimized for Local Google Searches", description: "Local visibility is not optional. We optimize your website so customers in your service area can easily find you on Google." }
        ]}
        imageSide="right"
        linkTo="/functional-website"
      />

      {/* 5-Star Magic Review Funnel */}
      <ProductFeature
        title="5-Star Review Funnel That Works on Autopilot"
        subtitle="Customers mean well, but most forget to leave a review. Our system follows up automatically and professionally until they do, without feeling pushy or awkward."
        features={[
          { title: "Attract More 5-Star Reviews", description: "You cannot please everyone, but our funnel is designed to consistently generate positive reviews and protect your online reputation." },
          { title: "Automated Follow-Up Reminders", description: "We send polite, scheduled reminders so customers remember to leave a review, without you having to chase anyone." },
          { title: "One-Click Review Requests", description: "Leaving a review takes seconds. The simpler the process, the more reviews you get." },
          { title: "Reduce the Risk of Bad Reviews", description: "We guide customers through the right experience, helping you collect positive feedback while minimizing negative public reviews." }
        ]}
        imageSide="left"
        linkTo="/5-star-magic-funnel"
      />

      {/* Missed Call Text Back */}
      <ProductFeature
        title="Missed Call Text Back That Never Loses a Lead"
        subtitle="Every contractor misses calls. The difference is what happens next. We instantly text back missed callers so you stay ahead of competitors and never lose an opportunity."
        features={[
          { title: "Stand Out From Your Competition", description: "Most businesses miss calls and do nothing. You respond immediately and start the conversation." },
          { title: "No More Lost Leads", description: "Busy on a job site or unable to answer the phone? An automatic text is sent instantly so the lead stays engaged." },
          { title: "Show Customers You Care", description: "A quick response builds trust. Customers feel acknowledged and are far more likely to move forward when they know you care." },
          { title: "Available 24/7", description: "Even after hours, every missed call receives a response. Your business stays active while you focus on the work." }
        ]}
        imageSide="right"
        linkTo="/missed-call-text-back"
      />

      {/* One-Click Marketing Campaigns */}
      <ProductFeature
        title="One-Click Marketing Campaigns That Drive Repeat Business"
        subtitle="Referrals and repeat customers are the most profitable leads. We make it easy to generate both with ready to use campaigns you can launch instantly."
        features={[
          { title: "Done For You Campaigns", description: "Activate proven marketing campaigns with a single click. No setup, no complexity, no learning curve." },
          { title: "Referral Campaigns", description: "Your customers already trust you. We remind them to recommend your business to friends and family at the right time." },
          { title: "Return Customer Campaigns", description: "Repeat business is the foundation of long term growth. We keep your customers engaged with timely follow ups and special offers." },
          { title: "Marketing at Your Fingertips", description: "Launch campaigns anytime with one click. No need to hire a marketing team or manage complicated tools." }
        ]}
        imageSide="left"
        linkTo="/one-click-marketing-campaigns"
      />

      {/* Local SEO */}
      <ProductFeature
        title="Local SEO That Brings Qualified Leads"
        subtitle="There are no overnight rankings. Real local SEO takes time, but when done right, it consistently brings customers who are actively searching for your services."
        features={[
          { title: "Higher Quality Leads", description: "Organic traffic means customers who want your service and are ready to talk, not random leads that never answer the phone." },
          { title: "Stop Paying for Unqualified Leads", description: "Quality matters more than volume. We focus on attracting the right customers instead of wasting your budget on low intent leads." },
          { title: "Sustainable Organic Growth", description: "Build a long term lead system that works for you every month without paying for every click." }
        ]}
        imageSide="right"
        linkTo="/local-seo"
      />

      {/* AI Calling with Calendar Booking */}
      <ProductFeature
        title="AI Calling with Calendar Booking That Never Misses an Opportunity"
        subtitle="Your AI assistant answers calls, qualifies leads, and books appointments directly into your calendar. Never miss a call or lose a booking opportunity, even when you're busy on a job site."
        features={[
          { title: "24/7 AI Phone Assistant", description: "An intelligent AI handles every call professionally, answers questions, and qualifies leads so you only talk to serious prospects ready to book." },
          { title: "Automatic Calendar Booking", description: "Qualified leads can book appointments directly into your calendar. No back-and-forth texts or missed scheduling opportunities." },
          { title: "Never Lose a Lead", description: "Every call is answered, every lead is captured, and every booking opportunity is converted—even when you're unavailable." },
          { title: "Seamless Integration", description: "Works with your existing calendar system and sends you instant notifications so you're always in the loop." }
        ]}
        imageSide="left"
        linkTo="/ai-calling-calendar-booking"
      />

      <ProcessTimeline />
      <FAQ />
      
      <CTA
        title="Want to schedule a time to talk?"
        description="See everything we do to help you grow your business so you can implement it yourself or let us do it for you."
      />
      
      <ContactSection />
      <Footer />
    </motion.main>
  );
}
