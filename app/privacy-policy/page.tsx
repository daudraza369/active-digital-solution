import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Active Digital Solution</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Active Digital Solution (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operate the website activedigitalsolution.com (referred to as the &quot;Service&quot;). This policy outlines our practices regarding the collection, use, and disclosure of personal data when you use our Service, along with your choices related to that data.
          </p>
          <p className="text-gray-300 mb-6">
            By accessing our Service, you agree to the collection and use of your information as described in this Privacy Policy. Unless otherwise specified, the terms used here carry the same meaning as those in our Terms and Conditions.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8 mb-4">1. Information Collection and Use</h2>
          <p className="text-gray-300 mb-4">We collect different types of information to provide and improve our Service.</p>

          <h2 className="text-xl font-semibold text-accent mt-8 mb-4">2. Types of Data Collected</h2>
          <h3 className="text-lg font-medium mt-4 mb-2">Personal Data</h3>
          <p className="text-gray-300 mb-4">
            When using our Service, we may ask you to provide personal information that can be used to contact or identify you (&quot;Personal Data&quot;), including but not limited to: Cookies and usage data, Address, Phone number, First and last name, Email address.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8 mb-4">3. Usage Data</h2>
          <p className="text-gray-300 mb-4">
            We collect data on how the Service is retrieved and used. This may include information such as your IP address, browser type, pages visited, time and date of visit, and other diagnostic data.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8 mb-4">4. Use of Data</h2>
          <p className="text-gray-300 mb-4">
            We use the collected data to: Provide and maintain our Service, notify you of changes, provide customer care, detect and prevent technical issues, analyze usage to improve our Service.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8 mb-4">5. Data Security</h2>
          <p className="text-gray-300 mb-4">
            We prioritize data security, but no method of transmission or storage is 100% secure. While we implement commercially acceptable measures to protect your data, we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8 mb-4">6. Links to Other Sites</h2>
          <p className="text-gray-300 mb-4">
            Our Service may contain links to external websites not operated by us. We advise reviewing their privacy policies, as we are not responsible for their content, policies, or practices.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8 mb-4">7. Children&apos;s Privacy</h2>
          <p className="text-gray-300 mb-4">
            Our Service does not target individuals under the age of 13. We do not knowingly collect personal data from children.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8 mb-4">8. Privacy Policy Updates</h2>
          <p className="text-gray-300 mb-4">
            We may update this Privacy Policy periodically. Any changes will be posted on this page. Continued use of our Service after changes constitutes your acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-4">
            For any questions regarding this Privacy Policy, please contact us at:{" "}
            <a href="mailto:adam@activedigitalsolution.com" className="text-accent hover:underline">adam@activedigitalsolution.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
