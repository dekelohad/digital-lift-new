import Button from './Button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">logo</div>
            <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
            <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
              Book A Call
            </Button>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Want to learn more about how we can help?</h3>
            <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
              Book A Call
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#login" className="hover:text-white transition-colors">Log in</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#trades" className="hover:text-white transition-colors">Trades We Serve</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#functional-website" className="hover:text-white transition-colors">Functional Website</a></li>
              <li><a href="#missed-call" className="hover:text-white transition-colors">Missed Call Text Back</a></li>
              <li><a href="#review-funnel" className="hover:text-white transition-colors">5 Star Magic Funnel</a></li>
              <li><a href="#printing" className="hover:text-white transition-colors">Printing Services</a></li>
              <li><a href="#lead-followup" className="hover:text-white transition-colors">Automated Lead Follow Up</a></li>
              <li><a href="#marketing-campaigns" className="hover:text-white transition-colors">One-Click Marketing Campaigns</a></li>
              <li><a href="#inbox" className="hover:text-white transition-colors">All-In-One Inbox</a></li>
              <li><a href="#business-phone" className="hover:text-white transition-colors">Business Phone</a></li>
              <li><a href="#local-seo" className="hover:text-white transition-colors">Local SEO</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

