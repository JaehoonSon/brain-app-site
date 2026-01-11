import { H1, H2, P, List, Muted } from "@/components/typography";
import { Footer } from "@/components/footer";

export default function Support() {
  return (
    <div className="container max-w-3xl py-12 mx-auto px-4">
      <div className="text-center mb-10">
        <H1 className="mb-4">Support</H1>
        <Muted>We're here to help</Muted>
      </div>

      <div className="space-y-8">
        <section>
          <P>
            Welcome to Lobe Support. If you have questions, need assistance, or
            want to report an issue, you've come to the right place.
          </P>
        </section>

        <section>
          <H2>Contact Us</H2>
          <P>For any support inquiries, please reach out to us via email:</P>
          <P className="mt-2">
            Email:{" "}
            <a
              href="mailto:son.jaehoon0826@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              son.jaehoon0826@gmail.com
            </a>
          </P>
          <P className="mt-4">
            We aim to respond to all inquiries within{" "}
            <strong>24-48 hours</strong>.
          </P>
        </section>

        <section>
          <H2>Frequently Asked Questions</H2>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              How do I get started with Lobe?
            </h3>
            <P>
              When you first open Lobe, you'll be guided through a simple
              onboarding process. This will help you set up your profile and
              introduce you to the app's features. Just follow the on-screen
              instructions to get started.
            </P>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">
              How do I delete my account?
            </h3>
            <P>You can delete your account in two ways:</P>
            <List>
              <li>
                <strong>From the app:</strong> Navigate to your profile settings
                and select the option to delete your account.
              </li>
              <li>
                <strong>Contact us:</strong> Send an email to{" "}
                <a
                  href="mailto:son.jaehoon0826@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  son.jaehoon0826@gmail.com
                </a>{" "}
                requesting account deletion. Please include the email address
                associated with your account.
              </li>
            </List>
            <P className="mt-2">
              Once your account is deleted, all personal data associated with it
              will be permanently removed, except where retention is required by
              law.
            </P>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">
              How do I report a bug or issue?
            </h3>
            <P>
              If you encounter a bug or experience issues with the app, please
              email us at{" "}
              <a
                href="mailto:son.jaehoon0826@gmail.com"
                className="text-primary hover:underline font-medium"
              >
                son.jaehoon0826@gmail.com
              </a>{" "}
              with a description of the problem, the device you're using, and
              any steps to reproduce the issue. Screenshots are also helpful.
            </P>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">
              How do I manage my subscription?
            </h3>
            <P>
              Subscriptions are managed through the App Store. To view, modify,
              or cancel your subscription:
            </P>
            <List>
              <li>Open the Settings app on your device</li>
              <li>Tap your name at the top</li>
              <li>Tap "Subscriptions"</li>
              <li>Select Lobe to manage your subscription</li>
            </List>
          </div>
        </section>

        <section>
          <H2>Additional Resources</H2>
          <List>
            <li>
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>{" "}
              – Learn how we handle your data
            </li>
            <li>
              <a href="/terms" className="text-primary hover:underline">
                Terms of Use
              </a>{" "}
              – Review our terms and conditions
            </li>
            <li>
              <a href="/eula" className="text-primary hover:underline">
                End User License Agreement
              </a>{" "}
              – Read our EULA
            </li>
          </List>
        </section>

        <section>
          <H2>Feedback</H2>
          <P>
            We value your feedback! If you have suggestions for improving Lobe
            or ideas for new features, we'd love to hear from you. Send your
            thoughts to{" "}
            <a
              href="mailto:son.jaehoon0826@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              son.jaehoon0826@gmail.com
            </a>
            .
          </P>
        </section>
      </div>
      <Footer />
    </div>
  );
}
