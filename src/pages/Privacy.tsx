// src/pages/Privacy.tsx
export default function Privacy() {
  const lastUpdated = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  return (
    <section className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p className="muted">Last updated: {lastUpdated}</p>

      <div className="card p-6 space-y-4">
        <p className="muted">
          OpsSync.ai provides a Crew &amp; Equipment Board (the “Service”). This policy explains what we collect and how we use it.
          We keep data collection minimal and never sell your personal information.
        </p>

        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>
            <span className="font-medium">Account info</span> — name, email, company.
          </li>
          <li>
            <span className="font-medium">Board data you provide</span> — employee names/roles, equipment identifiers and attributes,
            project names, assignments, notes, and files you upload or import (e.g., CSVs).
          </li>
          <li>
            <span className="font-medium">Product telemetry</span> — basic usage, device/browser info, and error logs to keep the Service reliable and secure.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">How We Use Information</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>Provide, maintain, and improve the Crew &amp; Equipment Board.</li>
          <li>Support communications and account administration.</li>
          <li>Security, abuse prevention, and to diagnose issues.</li>
        </ul>

        <h2 className="text-xl font-semibold">Sharing</h2>
        <p className="muted">
          We use service providers (cloud hosting, analytics, email) that process data on our behalf under confidentiality obligations.
          We do not sell data. We may disclose information if required by law.
        </p>

        <h2 className="text-xl font-semibold">Data Retention</h2>
        <p className="muted">
          We retain board data for as long as your account is active or as needed to provide the Service. You may request deletion at any time.
        </p>

        <h2 className="text-xl font-semibold">Your Choices</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          <li>Request access, correction, export, or deletion of your data.</li>
          <li>Limit telemetry by browser settings and disabling optional cookies.</li>
        </ul>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="muted">
          Questions or requests? Email <span className="font-medium">privacy@opssync.ai</span> or <span className="font-medium">support@opssync.ai</span>.
        </p>
      </div>
    </section>
  );
}
