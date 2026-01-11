import { H1, H2, P, List, Muted } from "@/components/typography";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-3xl py-12 mx-auto px-4">
      <div className="text-center mb-10">
        <H1 className="mb-4">Privacy Policy</H1>
        <Muted>Last Updated: January 8, 2026</Muted>
      </div>

      <div className="space-y-8">
        <section>
          <P>
            This Privacy Policy describes how Lobe (“we,” “us,” or “our”)
            collects, uses, stores, and protects information when you use the
            Lobe mobile application (“App”).
          </P>

          <P>
            By using the App, you agree to the collection and use of information
            as described in this Privacy Policy.
          </P>
        </section>

        <section>
          <H2>1. Information We Collect</H2>
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              Information You Provide
            </h3>
            <List>
              <li>Email address</li>
              <li>Name</li>
              <li>Date of birth</li>
              <li>Account-related information</li>
              <li>Communications with support</li>
            </List>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              Information Collected Automatically
            </h3>
            <List>
              <li>Gameplay performance and scores</li>
              <li>App usage data and session activity</li>
              <li>Device identifiers</li>
              <li>Analytics data</li>
              <li>Crash reports (via Apple)</li>
            </List>
            <P>
              We do not intentionally collect IP addresses, though limited
              technical data may be processed automatically by platform
              providers.
            </P>
          </div>
        </section>

        <section>
          <H2>2. Cookies & Tracking Technologies</H2>
          <P>We may use cookies or similar tracking technologies to:</P>
          <List>
            <li>Understand app usage</li>
            <li>Improve performance</li>
            <li>Analyze trends</li>
          </List>
          <P>
            These technologies are used strictly for analytics and
            functionality, not advertising.
          </P>
        </section>

        <section>
          <H2>3. How We Use Your Information</H2>
          <P>We use collected information to:</P>
          <List>
            <li>Provide and operate the App</li>
            <li>Track gameplay progress and performance</li>
            <li>Improve games and features</li>
            <li>Monitor app stability and crashes</li>
            <li>Communicate service-related updates</li>
            <li>Provide customer support</li>
          </List>
        </section>

        <section>
          <H2>4. Analytics & Third-Party Services</H2>
          <P>We use trusted third-party service providers, including:</P>
          <List>
            <li>Apple App Analytics</li>
            <li>RevenueCat</li>
            <li>Supabase (data storage and backend infrastructure)</li>
          </List>
          <P>
            These providers process data solely on our behalf and under
            confidentiality obligations.
          </P>
          <P>
            We do not use advertising tracking (including IDFA) and do not
            display third-party ads.
          </P>
        </section>

        <section>
          <H2>5. Data Ownership & Aggregation</H2>
          <List>
            <li>You retain ownership of your personal data.</li>
            <li>
              We may aggregate and anonymize data for analytics, product
              improvement, or potential research purposes.
            </li>
            <li>Aggregated data does not identify individual users.</li>
          </List>
        </section>

        <section>
          <H2>6. Data Sharing</H2>
          <List>
            <li>We do not sell personal data.</li>
            <li>We may share data only:</li>
            <List className="mt-2 ml-10">
              <li>With service providers necessary to operate the App</li>
              <li>To comply with legal obligations</li>
              <li>To protect the rights, safety, or integrity of Lobe</li>
            </List>
          </List>
        </section>

        <section>
          <H2>7. Data Storage & Retention</H2>
          <List>
            <li>Data is stored in the United States.</li>
            <li>Personal data is retained unless otherwise specified.</li>
            <li>
              Upon account deletion, personal data is deleted, except where
              retention is required by law.
            </li>
          </List>
        </section>

        <section>
          <H2>8. Your Rights</H2>
          <P>Depending on your location, you may have the right to:</P>
          <List>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Request data portability</li>
            <li>Withdraw consent where applicable</li>
          </List>
          <P>
            We will respond to verified requests within 30 days, as required by
            law.
          </P>
          <P>
            Requests can be submitted by contacting us at the email listed
            below.
          </P>
        </section>

        <section>
          <H2>9. Children’s Privacy</H2>
          <List>
            <li>Lobe is intended for users 13 years of age and older.</li>
            <li>
              We do not knowingly retain personal data from users under 13.
            </li>
            <li>
              If data from a user under 13 is discovered, it will be deleted
              promptly.
            </li>
          </List>
        </section>

        <section>
          <H2>10. Data Security</H2>
          <P>
            We implement reasonable technical and organizational safeguards to
            protect your information. However, no system is completely secure,
            and we cannot guarantee absolute security.
          </P>
        </section>

        <section>
          <H2>11. International Users</H2>
          <P>
            Lobe is available globally. If you access the App outside the United
            States, you consent to the transfer and processing of your
            information in the U.S. or other jurisdictions where our service
            providers operate.
          </P>
          <P>
            This policy is intended to comply with applicable privacy laws,
            including GDPR and CCPA/CPRA, where required.
          </P>
        </section>

        <section>
          <H2>12. Changes to This Privacy Policy</H2>
          <P>We may update this Privacy Policy from time to time.</P>
          <P>
            Material changes will be communicated through the App or by email.
          </P>
        </section>

        <section>
          <H2>13. Contact</H2>
          <P>If you have questions, concerns, or requests regarding privacy:</P>
          <P className="mt-2">
            Email:{" "}
            <a
              href="mailto:son.jaehoon0826@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              son.jaehoon0826@gmail.com
            </a>
          </P>
        </section>
      </div>
      <Footer />
    </div>
  );
}
