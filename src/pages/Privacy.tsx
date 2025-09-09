export default function Privacy() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p className="muted">Last updated: {{ new Date().toISOString().slice(0,10) }}</p>

      <div className="glass p-6 space-y-4">
        <p className="muted">
          We collect only what’s needed to run OpsSync.ai and provide support. We never sell your data.
        </p>
        <h2 className="text-xl font-semibold">Information we collect</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>Account details (name, email, company)</li>
          <li>Usage and device data (for performance & security)</li>
          <li>Content you upload or input into the product</li>
        </ul>

        <h2 className="text-xl font-semibold">How we use it</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>Provide and improve OpsSync.ai</li>
          <li>Billing, account, and support communications</li>
          <li>Security & abuse prevention</li>
        </ul>

        <h2 className="text-xl font-semibold">Your choices</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>Request data export or deletion by emailing support@opssync.ai</li>
          <li>Opt-out of marketing emails anytime</li>
        </ul>
      </div>
    </section>
  );
}
