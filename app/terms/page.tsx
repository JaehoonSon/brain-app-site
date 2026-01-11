import { H1, H2, P, List, Muted } from "@/components/typography";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
  return (
    <div className="container max-w-3xl py-12 mx-auto px-4">
      <div className="text-center mb-10">
        <H1 className="mb-4">Terms of Service</H1>
        <Muted>Last Updated: Jan 8, 2026</Muted>
      </div>

      <div className="space-y-8">
        <section>
          <P>
            These Terms of Service (“Terms”) govern your access to and use of
            the Lobe mobile application (“App”), operated by an individual based
            in Delaware, United States (“we,” “us,” or “our”).
          </P>

          <P>
            By downloading, accessing, or using Lobe, you agree to be bound by
            these Terms. If you do not agree, do not use the App.
          </P>
        </section>

        <section>
          <H2>1. Eligibility</H2>
          <P>Lobe is intended for users 13 years of age or older.</P>
          <P>
            By using the App, you represent that you meet this age requirement.
          </P>
          <P>
            If you are under the age of 18, you represent that you have
            permission from a parent or legal guardian.
          </P>
        </section>

        <section>
          <H2>2. Account Registration & Access</H2>
          <List>
            <li>An account may be required to access certain features.</li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You may delete your account at any time using the in-app account
              deletion feature.
            </li>
            <li>
              We reserve the right to suspend or terminate accounts at our sole
              discretion, including for violations of these Terms or misuse of
              the App.
            </li>
          </List>
        </section>

        <section>
          <H2>3. Subscriptions, Billing & Payments</H2>
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Subscription Model</h3>
            <List>
              <li>Lobe is a premium app.</li>
              <li>
                Subscriptions are processed through the Apple App Store, with
                billing managed via RevenueCat.
              </li>
              <li>
                Available plans may include weekly, monthly, annual, or lifetime
                subscriptions.
              </li>
            </List>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              Free Trials & Auto-Renewal
            </h3>
            <List>
              <li>Free trials may be offered at our discretion.</li>
              <li>
                Subscriptions automatically renew unless canceled at least 24
                hours before the end of the current billing period.
              </li>
              <li>
                Subscription management and cancellation are handled through
                your Apple ID settings.
              </li>
            </List>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Refunds</h3>
            <List>
              <li>
                Refunds beyond Apple’s standard policies may be granted under
                reasonable circumstances, at our discretion.
              </li>
              <li>Apple controls final refund eligibility and processing.</li>
            </List>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Pricing Changes</h3>
            <List>
              <li>Pricing and subscription terms may change at any time.</li>
              <li>
                Changes will not affect active subscriptions until the next
                renewal period.
              </li>
            </List>
          </div>
        </section>

        <section>
          <H2>4. Acceptable Use</H2>
          <P>You agree not to:</P>
          <List>
            <li>
              Reverse engineer, decompile, or attempt to access Lobe’s source
              code
            </li>
            <li>Circumvent security features or technical protections</li>
            <li>Use automated systems (bots, scrapers) to access the App</li>
            <li>
              Interfere with performance tracking, scoring, or analytics systems
            </li>
            <li>Misuse the App in a way that violates applicable law</li>
          </List>
        </section>

        <section>
          <H2>5. Intellectual Property</H2>
          <List>
            <li>
              All games, scoring systems, algorithms, UI/UX, and underlying
              technology are proprietary and owned by us.
            </li>
            <li>
              You are granted a limited, non-exclusive, non-transferable license
              to use the App for personal, non-commercial purposes.
            </li>
            <li>
              You may not reproduce, redistribute, or exploit App content
              without permission.
            </li>
          </List>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Feedback</h3>
            <P>
              Any feedback or suggestions you provide may be used by us without
              restriction or compensation.
            </P>
          </div>
        </section>

        <section>
          <H2>6. User Data & Privacy</H2>
          <P>Your use of Lobe is also governed by our Privacy Policy.</P>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Data Collected</h3>
            <P>We may collect:</P>
            <List>
              <li>Email address</li>
              <li>Name</li>
              <li>Birthday</li>
              <li>Gameplay performance and scores</li>
              <li>Device identifiers</li>
              <li>Usage analytics</li>
            </List>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Data Ownership</h3>
            <List>
              <li>You retain ownership of your personal data.</li>
              <li>We may store data unless otherwise specified.</li>
              <li>
                We may aggregate and anonymize data for analytics and product
                improvement.
              </li>
            </List>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Third-Party Services</h3>
            <List>
              <li>
                Data may be processed by trusted service providers such as
                Supabase and analytics tools.
              </li>
              <li>We do not sell personal data.</li>
            </List>
          </div>
        </section>

        <section>
          <H2>7. Data Sharing & Export</H2>
          <List>
            <li>You may share your results publicly at your discretion.</li>
            <li>
              You may request an export of your data, subject to verification.
            </li>
          </List>
        </section>

        <section>
          <H2>8. Educational & Non-Medical Disclaimer</H2>
          <List>
            <li>
              Lobe is provided for entertainment and educational purposes only.
            </li>
            <li>Lobe is not a medical device</li>
            <li>It does not provide diagnosis, treatment, or medical advice</li>
            <li>
              No claims are made regarding cognitive improvement, mental health
              outcomes, or clinical effectiveness
            </li>
            <li>
              Do not use Lobe as a substitute for professional medical advice
            </li>
          </List>
        </section>

        <section>
          <H2>9. Availability & Modifications</H2>
          <P>We reserve the right to:</P>
          <List>
            <li>Modify features</li>
            <li>Remove games</li>
            <li>Adjust scoring models</li>
            <li>Discontinue the App at any time</li>
          </List>
          <P>We do not guarantee uninterrupted or error-free availability.</P>
        </section>

        <section>
          <H2>10. Termination</H2>
          <List>
            <li>You may stop using Lobe at any time.</li>
            <li>
              Upon account deletion or termination, user data will be deleted,
              except where retention is required by law.
            </li>
            <li>
              No provisions survive termination except those required by law.
            </li>
          </List>
        </section>

        <section>
          <H2>11. Disclaimer of Warranties</H2>
          <P>Lobe is provided “as is” and “as available.”</P>
          <P>We disclaim all warranties, including but not limited to:</P>
          <List>
            <li>Accuracy of performance metrics</li>
            <li>Data reliability or completeness</li>
            <li>Fitness for a particular purpose</li>
            <li>Availability or uptime</li>
          </List>
        </section>

        <section>
          <H2>12. Limitation of Liability</H2>
          <P>To the maximum extent permitted by law:</P>
          <List>
            <li>
              We are not liable for data loss, performance inaccuracies, or
              third-party failures
            </li>
            <li>We are not responsible for misuse of the App</li>
            <li>
              Our total liability is limited to the amount paid by you, if any,
              in the previous 12 months
            </li>
          </List>
        </section>

        <section>
          <H2>13. Indemnification</H2>
          <P>
            You agree to indemnify and hold us harmless from claims arising
            from:
          </P>
          <List>
            <li>Your misuse of the App</li>
            <li>Violation of these Terms</li>
            <li>Violation of applicable law</li>
          </List>
        </section>

        <section>
          <H2>14. Governing Law & Disputes</H2>
          <List>
            <li>These Terms are governed by the laws of the United States.</li>
            <li>
              Disputes may be brought in small claims court, where applicable.
            </li>
            <li>
              You waive the right to participate in class actions or class
              arbitration.
            </li>
          </List>
        </section>

        <section>
          <H2>15. Communications</H2>
          <List>
            <li>
              We may send emails related to product updates, service notices,
              and promotions.
            </li>
            <li>You may opt out of promotional emails at any time.</li>
          </List>
        </section>

        <section>
          <H2>16. International Users</H2>
          <List>
            <li>Lobe is available to users outside the United States.</li>
            <li>You are responsible for compliance with local laws.</li>
          </List>
        </section>

        <section>
          <H2>17. Contact</H2>
          <P>For legal notices or questions regarding these Terms:</P>
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
