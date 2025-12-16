import Button from './Button';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Section */}
        <div className="mb-8 sm:mb-12">
          <Logo className="mb-4" variant="light" />
          <h3 className="text-lg sm:text-xl font-bold mb-4">Ready to get started?</h3>
          <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 text-sm sm:text-base">
            Book A Call
          </Button>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/our-work" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#login" className="hover:text-white transition-colors">Log in</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">About</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/our-process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="/trades-we-serve" className="hover:text-white transition-colors">Trades We Serve</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/functional-website" className="hover:text-white transition-colors">Functional Website</a></li>
              <li><a href="/missed-call-text-back" className="hover:text-white transition-colors">Missed Call Text Back</a></li>
              <li><a href="/5-star-magic-funnel" className="hover:text-white transition-colors">5 Star Magic Funnel</a></li>
              <li><a href="/automated-lead-follow-up" className="hover:text-white transition-colors">Automated Lead Follow Up</a></li>
              <li><a href="/one-click-marketing-campaigns" className="hover:text-white transition-colors">One-Click Marketing Campaigns</a></li>
              <li><a href="/all-in-one-inbox" className="hover:text-white transition-colors">All-In-One Inbox</a></li>
              <li><a href="/business-phone" className="hover:text-white transition-colors">Business Phone</a></li>
              <li><a href="/local-seo" className="hover:text-white transition-colors">Local SEO</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

