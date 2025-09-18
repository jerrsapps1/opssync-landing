import React from "react";

export default function Terms() {
  return (
    <main className="container-page section">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-neutral-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      <div className="prose prose-neutral max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using OpsSync.ai, you agree to be bound by these Terms
          of Service and our Privacy Policy. If you do not agree, do not use the
          Service.
        </p>

        <h2>2. Use of the Service</h2>
        <p>
          You may use the Service only in compliance with applicable laws and these
          Terms. You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your account.
        </p>

        <h2>3. Subscription & Billing</h2>
        <p>
          Some features require a paid subscription. Fees are billed in advance and
          are non-refundable except as required by law or explicitly stated.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          The Service, including all content, features, and functionality, are owned
          by OpsSync.ai or its licensors and are protected by applicable laws.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, OpsSync.ai shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages, or any
          loss of profits or revenues, whether incurred directly or indirectly, or any
          loss of data, use, goodwill, or other intangible losses.
        </p>

        <h2>6. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time, with or
          without cause or notice, if we believe you have violated these Terms.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We may modify these Terms from time to time. The updated Terms will be posted
          on this page with a revised “Last updated” date.
        </p>

        <h2>8. Contact</h2>
        <p>
          Questions? Contact us at <a href="mailto:support@opssync.ai">support@opssync.ai</a>.
        </p>
      </div>
    </main>
  );
}
