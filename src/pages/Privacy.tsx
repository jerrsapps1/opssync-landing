// src/pages/Privacy.tsx
export default function Privacy() {
  const lastUpdated = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  return (
    <section className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p className="muted">Last updated: {lastUpdated}</p>

      <div className="glass p-6 space-y-4">
        <p className="muted">
          We collect only what’s needed to run OpsSync.ai and provide support. We never sell your data.
        </p>

        <h2 className="text-xl font-semibold">Information we collect</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>Account details (name, email, company)</li>
          <li>Usage and device data (for performance &amp; security)</li>
          <li>Content you upload or input into the product</li>
        </ul>

        <h2 className="text-xl font-semibold">How we use it</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>Provide and improve OpsSync.ai</li>
          <li>Billing, account, and support communications</li>
          <li>Security &amp; abuse prevention</li>
        </ul>

        <h2 className="text-xl font-semibold">Sharing</h2>
        <p className="muted">
          We may share data with processors that help us operate the service (e.g., cloud hosting, analytics).
          These providers are bound by confidentiality and only process data on our instructions.
        </p>

        <h2 className="text-xl font-semibold">Your choices</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>Request data export or deletion by emailing <span className="font-medium">support@opssync.ai</span></li>
          <li>Opt-out of marketing emails anytime</li>
        </ul>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="muted">Questions about privacy? Reach us at <span className="font-medium">support@opssync.ai</span>.</p>
      </div>
    </section>
  );
}
