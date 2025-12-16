import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Terms & Conditions - Digital Lift",
  description: "Read Digital Lift's terms and conditions. Service description, payment terms, cancellation policy, and limitation of liability. Last updated December 2024.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-gray-600">Last updated: December 2024</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Digital Lift services, you agree to be bound by these Terms and Conditions. 
                If you do not agree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed">
                Digital Lift provides website design, marketing systems, and related services for contractors. 
                We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Services are billed on a monthly basis. Payment is due at the beginning of each billing cycle. 
                You may cancel your subscription at any time, but you will lose access to all features upon cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                You may cancel your membership at any time. Upon cancellation, you will lose access to all features 
                we set up for you. No refunds will be provided for partial billing periods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Digital Lift is not liable for any indirect, incidental, or consequential damages arising from 
                the use of our services. Our total liability shall not exceed the amount paid by you in the 
                twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at{' '}
                <a
                  href="mailto:info@digitalLift.io"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  info@digitalLift.io
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

