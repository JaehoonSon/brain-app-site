import { H1, H2, P, List, Muted } from "@/components/typography";
import { Footer } from "@/components/footer";

export default function EULA() {
  return (
    <div className="container max-w-3xl py-12 mx-auto px-4">
      <div className="text-center mb-10">
        <H1 className="mb-4">End User License Agreement</H1>
        <Muted>Last Updated: January 8, 2026</Muted>
      </div>

      <div className="space-y-8">
        <section>
          <P>
            This End User License Agreement ("EULA") is a legal agreement
            between you ("User") and the operator of Lobe, an individual based
            in Delaware, United States ("Licensor," "we," "us," or "our"),
            governing your use of the Lobe mobile application ("App").
          </P>

          <P>
            By downloading, installing, or using the App, you agree to be bound
            by this EULA. If you do not agree, do not use the App.
          </P>
        </section>

        <section>
          <H2>1. License Grant</H2>
          <P>
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to download and use the App for personal, non-commercial
            purposes on Apple-branded devices that you own or control, in
            accordance with Apple's App Store Terms of Service.
          </P>
          <P>
            All rights not expressly granted to you are reserved by the
            Licensor.
          </P>
        </section>

        <section>
          <H2>2. Ownership</H2>
          <P>The App, including but not limited to:</P>
          <List>
            <li>Software</li>
            <li>Games</li>
            <li>Scoring systems</li>
            <li>Algorithms</li>
            <li>Visual design</li>
            <li>User interface</li>
            <li>Trademarks and logos</li>
          </List>
          <P>
            is owned by the Licensor and protected by intellectual property
            laws.
          </P>
          <P>
            This EULA does not transfer ownership of the App or any intellectual
            property to you.
          </P>
        </section>

        <section>
          <H2>3. Restrictions</H2>
          <P>You agree not to:</P>
          <List>
            <li>Copy, modify, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Attempt to access source code or internal APIs</li>
            <li>Circumvent technical protections or security measures</li>
            <li>Rent, lease, sell, sublicense, or redistribute the App</li>
            <li>Use the App for unlawful purposes</li>
          </List>
          <P>
            Any attempt to do so is a violation of this EULA and may result in
            termination.
          </P>
        </section>

        <section>
          <H2>4. Updates & Modifications</H2>
          <P>We may:</P>
          <List>
            <li>Modify or update the App</li>
            <li>Add or remove features or games</li>
            <li>Change scoring or functionality</li>
            <li>Discontinue the App at any time</li>
          </List>
          <P>
            We are not obligated to provide updates or continued availability.
          </P>
        </section>

        <section>
          <H2>5. Termination</H2>
          <P>This license is effective until terminated.</P>
          <List>
            <li>
              You may terminate this EULA at any time by deleting the App.
            </li>
            <li>
              We may terminate this EULA immediately if you violate any
              provision.
            </li>
            <li>
              Upon termination, you must stop using the App and delete all
              copies.
            </li>
          </List>
        </section>

        <section>
          <H2>6. Disclaimer of Warranties</H2>
          <P>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE."</P>
          <P>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
            INCLUDING BUT NOT LIMITED TO:
          </P>
          <List>
            <li>MERCHANTABILITY</li>
            <li>FITNESS FOR A PARTICULAR PURPOSE</li>
            <li>ACCURACY OR RELIABILITY OF RESULTS</li>
            <li>NON-INFRINGEMENT</li>
          </List>
          <P>
            WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE, UNINTERRUPTED, OR
            MEET YOUR EXPECTATIONS.
          </P>
        </section>

        <section>
          <H2>7. Limitation of Liability</H2>
          <P>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</P>
          <List>
            <li>
              WE ARE NOT LIABLE FOR DATA LOSS, PERFORMANCE INACCURACIES, OR
              THIRD-PARTY FAILURES
            </li>
            <li>
              WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
              DAMAGES
            </li>
            <li>
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR
              THE APP, IF ANY, IN THE PRECEDING 12 MONTHS
            </li>
          </List>
        </section>

        <section>
          <H2>8. No Medical or Professional Use</H2>
          <P>
            Lobe is provided for entertainment and educational purposes only.
          </P>
          <List>
            <li>The App is not a medical device</li>
            <li>It does not provide diagnosis, treatment, or medical advice</li>
            <li>No claims are made regarding cognitive or health outcomes</li>
          </List>
          <P>Do not rely on the App for medical or professional decisions.</P>
        </section>

        <section>
          <H2>9. Third-Party Platforms (Apple)</H2>
          <P>This EULA is between you and the Licensor, not Apple.</P>
          <P>Apple:</P>
          <List>
            <li>Is not responsible for the App</li>
            <li>Has no obligation to provide support</li>
            <li>Is not liable for claims related to the App</li>
          </List>
          <P>
            If the App fails to conform to any applicable warranty, you may
            notify Apple, and Apple may refund the purchase price (if any), but
            Apple has no further obligation.
          </P>
          <P>
            Apple and its subsidiaries are third-party beneficiaries of this
            EULA and may enforce it against you.
          </P>
        </section>

        <section>
          <H2>10. Governing Law</H2>
          <P>
            This EULA is governed by the laws of the United States, without
            regard to conflict-of-law principles.
          </P>
        </section>

        <section>
          <H2>11. Severability</H2>
          <P>
            If any provision of this EULA is held unenforceable, the remaining
            provisions shall remain in full force and effect.
          </P>
        </section>

        <section>
          <H2>12. Contact</H2>
          <P>For questions regarding this EULA:</P>
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
