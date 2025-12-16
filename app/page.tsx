'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
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
        features={[
          "Get a website that instantly turns leads into text conversations that go DIRECTLY to your phone.",
          "Actually Get Found Online - If a customer googles your business and can't find you, that might be awkward... Don't worry, we won't let that happen.",
          "Showcase Your Best Reviews - We all have one or two bad reviews... That doesn't mean your customers need to see them.",
          "Mobile Friendly - 87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
          "Optimized For Local Google Searches - This should go without saying but we'll still say it. We make sure your business is found on Google."
        ]}
        imageSide="right"
        linkTo="/functional-website"
      />

      {/* 5-Star Magic Review Funnel */}
      <ProductFeature
        title="5-Star Magic Review Funnel"
        subtitle={"Sure I'll leave you a review, but the truth is people forget. We'll 'gently' remind them for a few weeks until they remember."}
        features={[
          "5-Star Reviews Only - You can't make everyone happy, but our magic funnel sure can. Five stars, every time.",
          "Automatic Follow-Up Reminders - \"Sure I'll leave you a review\", but the truth is people forget. We'll 'gently' reminder them for a few weeks until they remember.",
          "Ask For Reviews In One Click - As promised, we keep it simple. If you're confused, we're fired and extremely embarrassed.",
          "Stop worrying about bad reviews - Unsure if you should ask for a review? We'll take the guesswork out by guiding your customer to leave a 5-star review!"
        ]}
        imageSide="left"
        linkTo="/5-star-magic-funnel"
      />

      {/* Missed Call Text Back */}
      <ProductFeature
        title="Missed Call Text Back"
        subtitle="Everyone misses calls, but not everyone texts back. Be the one who does. Outshine your competition."
        features={[
          "Stand out from your competition - Everyone misses calls, but not everyone texts back. Be the one who does and outshine your competition.",
          "No More Lost Leads - On a job site and can't answer the phone? No problem, we'll fire off a text and start the conversation for you.",
          "Show Customers You Care - Your ex didn't like it when you missed their calls - neither do your customers. At least send a text so they know you care.",
          "Be available 24/7 - Missed a call after hours? No worries, we'll make sure everyone feels loved even while you're getting your beauty sleep."
        ]}
        imageSide="right"
        linkTo="/missed-call-text-back"
      />

      {/* One-Click Marketing Campaigns */}
      <ProductFeature
        title="One-Click Marketing Campaigns"
        subtitle="You know it, and we know it… Referrals and repeat customers are the best. Let's get you both!"
        features={[
          "Done For You - Again... let's keep it simple. Activate our pre-built marketing campaigns with just one click.",
          "Referral Campaigns - We know it and you know it... You do good work, and your customers love you. Let's remind them to tell their friends.",
          "Return Customer Campaigns - Having loyal customers is key to a succesful business. We'll make sure your customers feel cared for with special offers.",
          "Marketing Campaigns At Your Fingertips - Just click a button and we'll take care of the rest. No need to hire a marketing team."
        ]}
        imageSide="left"
        linkTo="/one-click-marketing-campaigns"
      />

      {/* Local SEO */}
      <ProductFeature
        title="Local SEO"
        subtitle="Rank number one on Google in a week! Just kidding, SEO takes time..."
        features={[
          "Qualified Leads - Sounds better than paying $50 for a lead that doesn't even pick up the phone, right?",
          "Stop Paying For Unqualified Lead - Like mom always said, quality over quantity. Do we agree with her on this?",
          "Organic Acquisition System - Create your own qualified leads instead of paying for tirekickers."
        ]}
        imageSide="right"
        linkTo="/local-seo"
      />

      <ProcessTimeline />
      <FAQ />
      
      <CTA
        title="Want to schedule a time to talk?"
        description="See everything we do to help you grow your business so you can implement it yourself or let us do it for you."
      />
      
      <Testimonials />
      <Footer />
    </motion.main>
  );
}
