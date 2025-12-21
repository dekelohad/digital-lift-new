import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy - Digital Lift",
  description: "Read Digital Lift's privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-600">Last updated: April 3, 2024</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 space-y-8">
            <section>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You respond to our advertisements and tells You about Your privacy rights and how the law protects You. We use Your Personal Data to contact and support you, as well as to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mobile Communication Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We value your privacy and are committed to protecting your personal information. When you provide your mobile number, you consent to receive SMS messages related to our services. Your mobile opt-in will <strong>not</strong> be shared with third parties for marketing purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Opt-Out Instructions:</strong> You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message you receive from us.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Support:</strong> If you need assistance with our SMS communications, you can text <strong>HELP</strong> for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Interpretation and Definitions</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Interpretation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Definitions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">For the purposes of this Privacy Policy:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Digital Lift LLC.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the advertisement, website, or application.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Collecting and Using Your Personal Data</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Data Collected</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>First and last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Location details such as your address, city, or country</li>
                <li>Any other data such as personal preferences, requirements, or comments</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Use of Your Personal Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>To provide and maintain our Service, including monitoring usage.</li>
                <li>To contact You via email, phone, or SMS about updates, features, or support.</li>
                <li>To manage Your requests and respond to inquiries.</li>
                <li>For legal compliance and security purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security of Your Personal Data</h2>
              <p className="text-gray-700 leading-relaxed">
                The security of Your Personal Data is important to Us, but no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, You can contact us via email at{' '}
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
