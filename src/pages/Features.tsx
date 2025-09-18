export default function Features() {
  return (
    <section className="container-capped py-8 md:py-10 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight md:text-[26px]">Features</h1>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="card p-4">
          <h2 className="text-base font-semibold">Employee &amp; Equipment Board</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Drag-and-drop crews and machines across projects</li>
            <li>Filter by trade, certifications, attachments, availability</li>
            <li>Quick conflict highlights and warnings</li>
            <li>Daily board export (PDF / CSV)</li>
          </ul>
        </div>

        <div className="card p-4">
          <h2 className="text-base font-semibold">Filters &amp; Views</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Instant search, quick filters, saved views</li>
            <li>Project-scoped or cross-project views</li>
            <li>Snapshot previews for hand-off</li>
          </ul>
        </div>

        <div className="card p-4">
          <h2 className="text-base font-semibold">Roles &amp; Permissions</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Owner/admin, supervisor, and read-only roles</li>
            <li>Granular project access controls</li>
            <li>Audit of changes to the plan</li>
          </ul>
        </div>

        <div className="card p-4">
          <h2 className="text-base font-semibold">Project Insights</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Basic anomalies (over-booked, idle equipment)</li>
            <li>Trend snapshots to keep jobs on schedule</li>
          </ul>
        </div>

        <div className="card p-4">
          <h2 className="text-base font-semibold">Exports</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Board to PDF for morning huddles</li>
            <li>CSV for reporting or sharing</li>
          </ul>
        </div>

        <div className="card p-4">
          <h2 className="text-base font-semibold">Branding (Soon)</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Logo and color accents</li>
            <li>Headers/footers on exports</li>
          </ul>
        </div>
      </div>

      <div className="mt-2">
        <a href="/pricing" className="inline-flex items-center rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white transition hover:bg-brand-600 ring-focus">
          View Pricing
        </a>
      </div>
    </section>
  );
}
