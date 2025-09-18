// src/pages/Terms.tsx
export default function Terms() {
  const lastUpdated = new Date().toISOString().slice(0, 10);

  return (
    <section className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
      <p className="muted">Last updated: {lastUpdated}</p>

      <div className="card p-6 space-y-4">
        <p className="muted">
          These Terms govern your access to and use of OpsSync.ai’s Crew &amp; Equipment Board (the “Service”).
          By using the Service, you agree to these Terms. If you are agreeing on behalf of an organization,
          you represent you have authority to bind it.
        </p>

        <h2 className="text-xl font-semibold">1. Accounts &amp; Access</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>You are responsible for the activity under your account and for maintaining password security.</li>
          <li>Provide accurate registration information and keep it current.</li>
        </ul>

        <h2 className="text-xl font-semibold">2. Permitted Use</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>Use the Service to plan and organize crews, equipment, and projects.</li>
          <li>No reverse engineering, scraping, interfering with security, or unauthorized access.</li>
          <li>Do not upload unlawful content or content you do not have the right to share.</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Your Content</h2>
        <p className="muted">
          You retain ownership of content you submit. You grant OpsSync.ai a limited license to host, process,
          and display that content solely to provide the Service to you.
        </p>

        <h2 className="text-xl font-semibold">4. Plans &amp; Billing</h2>
        <p className="muted">
          Paid plans are billed in advance per the pricing page. Fees are non-refundable except where required by law.
          We may adjust pricing or features with notice; changes apply on renewal or as otherwise stated.
        </p>

        <h2 className="text-xl font-semibold">5. Confidentiality &amp; Security</h2>
        <p className="muted">
          We implement reasonable administrative, technical, and physical safeguards to protect your content.
          See our Privacy Policy for details.
        </p>

        <h2 className="text-xl font-semibold">6. Service Changes</h2>
        <p className="muted">
          We may update or discontinue features from time to time. If a change materially reduces core board
          functionality for a paid plan, we will provide notice.
        </p>

        <h2 className="text-xl font-semibold">7. Disclaimers</h2>
        <p className="muted">
          THE SERVICE IS PROVIDED “AS IS.” To the fullest extent permitted by law, we disclaim warranties of
          merchantability, fitness for a particular purpose, and non-infringement. You are responsible for how
          you use outputs and exports.
        </p>

        <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
        <p className=
