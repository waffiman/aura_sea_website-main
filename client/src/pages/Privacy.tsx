import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen pb-16">
      <section className="maritime-gradient py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-6" data-testid="heading-privacy">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 maritime-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-premium border-2">
            <CardContent className="p-8 sm:p-12 prose prose-lg max-w-none">
              <h2 className="font-headline text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-6">
                AURA SEA ("we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="font-headline text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect personal information that you provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Submit a vacancy application through our online form</li>
                <li>Contact us via our contact form or email</li>
                <li>Register interest in our crewing services</li>
                <li>Communicate with us for business purposes</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                The personal information we collect may include: name, email address, phone number, nationality, professional qualifications, years of experience, certificates and licenses, employment history, and any other information you choose to provide.
              </p>

              <h2 className="font-headline text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect or receive:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>To process vacancy applications and assess candidate suitability</li>
                <li>To communicate with ship-owners and seafarers about our services</li>
                <li>To maintain our database of qualified seafarers</li>
                <li>To respond to inquiries and provide customer support</li>
                <li>To comply with legal obligations and maritime industry regulations</li>
                <li>To improve our website and services</li>
              </ul>

              <h2 className="font-headline text-2xl font-bold mb-4">4. Data Storage and Processing</h2>
              <p className="text-muted-foreground mb-6">
                Currently, information submitted through our contact forms and vacancy applications is processed and may be stored in various systems including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Internal database systems for crew management</li>
                <li>Email correspondence and communication platforms</li>
                <li>Potential future integration with Google Sheets or other cloud-based systems for application tracking</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="font-headline text-2xl font-bold mb-4">5. Sharing Your Information</h2>
              <p className="text-muted-foreground mb-6">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Ship-owners and vessel operators (for qualified candidates applying for specific positions)</li>
                <li>Training institutions and certification bodies (as required for crew qualifications)</li>
                <li>Regulatory authorities (when required by maritime law or regulation)</li>
                <li>Service providers who assist in our business operations (under strict confidentiality agreements)</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                We will not sell or rent your personal information to third parties.
              </p>

              <h2 className="font-headline text-2xl font-bold mb-4">6. Cookies and Analytics</h2>
              <p className="text-muted-foreground mb-6">
                Our website may use cookies and similar tracking technologies to improve user experience and analyze website traffic. We may use Google Analytics or similar services to understand how visitors interact with our site. You can control cookie preferences through your browser settings.
              </p>

              <h2 className="font-headline text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Seafarer application data may be retained for up to 2 years to facilitate future vacancy matching, unless you request earlier deletion.
              </p>

              <h2 className="font-headline text-2xl font-bold mb-4">8. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Under applicable data protection laws (including GDPR where applicable), you have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent (where processing is based on consent)</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                To exercise any of these rights, please contact us using the contact information provided below.
              </p>

              <h2 className="font-headline text-2xl font-bold mb-4">9. International Data Transfers</h2>
              <p className="text-muted-foreground mb-6">
                Given the international nature of maritime operations, your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
              </p>

              <h2 className="font-headline text-2xl font-bold mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground mb-6">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>

              <h2 className="font-headline text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="font-headline text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-foreground mb-2"><strong>AURA SEA Maritime Services</strong></p>
                <p className="text-muted-foreground mb-1">Email: privacy@aurasea.com</p>
                <p className="text-muted-foreground mb-1">Phone: +1 (234) 567-890</p>
                <p className="text-muted-foreground">Address: Maritime Business Center, Harbor District, Port City</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
