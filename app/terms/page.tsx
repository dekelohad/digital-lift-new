import type { Metadata } from "next";
import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Terms & Conditions - Digital Lift",
  description: "Read Digital Lift's terms and conditions. Service description, payment terms, cancellation policy, and limitation of liability.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-gray-600">These Terms and Conditions apply to all SMS messages sent and received as part of the A2P 10DLC messaging services provided by Digital Lift LLC. Your use of this service constitutes acceptance of these terms.</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By opting in to our SMS services, you agree to receive text messages related to <strong>notifications, marketing offers, account authentication (2FA), and other service-related communications</strong>. Message frequency may vary.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Standard <strong>message & data rates apply</strong> according to your mobile carrier&apos;s terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                To opt out of SMS communications at any time, reply <strong>STOP</strong> to any message you receive. If you need assistance, you can text <strong>HELP</strong> for support.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For more details on how we collect and protect your data, please refer to our{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Messaging Consent</h2>
              <p className="text-gray-700 leading-relaxed">
                As a user, you must explicitly consent to receive messages from Digital Lift LLC. Consent can be given through various channels including, but not limited to, our website sign-up forms, paper forms, or verbally through customer service interactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Types and Frequency</h2>
              <p className="text-gray-700 leading-relaxed">
                Messages sent by Digital Lift LLC may include alerts, reminders, promotional offers, updates, and other relevant communications. <strong>Message frequency may vary</strong> depending on your interaction with our services and your preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Rates and Charges</h2>
              <p className="text-gray-700 leading-relaxed">
                Standard <strong>message & data rates apply</strong> to any messages you send or receive as part of our service. This could affect your bill and depends on the terms set by your mobile carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Opt-Out Instructions</h2>
              <p className="text-gray-700 leading-relaxed">
                To discontinue receiving messages from Digital Lift LLC, you can reply <strong>STOP</strong> to any of our messages at any time. This will unsubscribe you from our SMS communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Privacy Policy outlines how we collect, use, and protect your data. It can be found{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  here
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Delivery</h2>
              <p className="text-gray-700 leading-relaxed">
                Digital Lift LLC does not guarantee that messages will be delivered without delays or failures. Such issues can occur due to factors outside our control, such as network problems or device compatibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Obligations</h2>
              <p className="text-gray-700 leading-relaxed">
                When using our messaging service, you agree to abide by all applicable laws and regulations. You must not use this service to send messages that are offensive, illegal, or intended to harass or harm others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance with Laws</h2>
              <p className="text-gray-700 leading-relaxed">
                You acknowledge that the messaging service must be used in compliance with all relevant laws, including those relating to privacy, telecommunications, and commercial communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscription Plans and Billing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Digital Lift LLC offers two primary subscription plans:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li><strong>$297/month:</strong> Includes a fully built website, access to the Digital Lift platform (web and mobile app), a business phone number for texting and calling, CRM access, automations, remarketing, and customer review tools.</li>
                <li><strong>$750/month:</strong> Includes all features from the $297 plan plus full management and optimization of Google Local Service Ads.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Subscriptions are available on a month-to-month basis or a prepaid 3-month commitment, the latter including a complimentary Google My Business optimization (valued at $400).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Advance Payment & Auto-Renewal</h2>
              <p className="text-gray-700 leading-relaxed">
                All subscription fees are billed in advance of the service period and are automatically renewed until canceled. Payment is collected via credit/debit card through our secure Stripe processor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Usage-Based Charges (Rebillable Costs)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients will incur additional charges based on phone number usage, SMS/MMS messaging, voice calls, and number intelligence services. Rates include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li><strong>Phone Numbers:</strong> Local: $1.15/month | Toll-Free: $2.15/month</li>
                <li><strong>SMS (US/Canada):</strong> $0.0079/segment (inbound/outbound)</li>
                <li><strong>MMS (US/Canada):</strong> $0.02 outbound | $0.01–$0.02 inbound</li>
                <li><strong>Voice Calls:</strong> $0.0180/min outbound | $0.0085–$0.0220/min inbound</li>
                <li><strong>Number Intelligence:</strong> $0.005–$0.01 per function</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                A detailed breakdown can be found within our documentation and this TOS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Wallet Balance and Auto Top-Up</h2>
              <p className="text-gray-700 leading-relaxed">
                Clients maintain a digital wallet balance for rebillable usage charges. When wallet funds run low, clients are automatically billed based on their selected auto-top-up preference.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Refund Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                All payments made to Digital Lift LLC are final and non-refundable, including subscription fees and usage charges. By signing up for our service, you acknowledge that our products are custom-built, immediately initiated, and non-reversible once delivery begins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Chargebacks Are Not Permitted</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to initiate a chargeback or dispute for services rendered. Doing so constitutes a violation of this agreement. We reserve the right to submit evidence of contract acceptance, platform usage, and delivery documentation in response to all disputes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If a chargeback is filed fraudulently, Digital Lift LLC may pursue recovery for the amount owed plus any associated legal or collection fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                You may cancel your subscription at any time. Cancellation becomes effective on the next billing cycle, and no future charges will be made beyond that point. Early cancellation does not result in a refund for the unused portion of a prepaid term.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Services are considered rendered and fulfilled once:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>The client&apos;s website has been completed and delivered</li>
                <li>Platform and automation setup is finalized</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Login assistance and onboarding support may be provided but are not a prerequisite for fulfillment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Trials and Promotions</h2>
              <p className="text-gray-700 leading-relaxed">
                From time to time, Digital Lift LLC may offer free trials or discounts. During a trial, limited setup may occur for information gathering purposes. Full services are only rendered once billing begins. Any discounts do not modify the terms of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Failures and Service Suspension</h2>
              <p className="text-gray-700 leading-relaxed">
                If a payment fails, we will attempt to process the payment 4 times over 3 weeks. If unpaid within 48 hours of the first failed attempt, your account and platform access will be suspended until the balance is paid.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent and Agreement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By purchasing any services from Digital Lift LLC or checking the agreement box at checkout, you confirm that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>You have read, understood, and agree to these Terms of Service</li>
                <li>You accept our No Refund policy</li>
                <li>You waive the right to initiate chargebacks for services rendered</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms and Conditions</h2>
              <p className="text-gray-700 leading-relaxed">
                Digital Lift LLC reserves the right to change these Terms and Conditions at any time. Changes will be communicated through our website or direct communications where feasible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For any queries or concerns regarding these Terms and Conditions, please contact Digital Lift LLC at{' '}
                <a
                  href="mailto:support@digitallift.io"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  support@digitallift.io
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

