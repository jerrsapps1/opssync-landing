export default function Features() {
  return (
    <section className="container-ss py-8 md:py-10 space-y-6">
      <h1>Features</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="card p-4">
          <h2>Employee &amp; Equipment Board</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Drag-and-drop across projects</li>
            <li>Filter by trade, certs, attachments, availability</li>
            <li>Quick conflict highlights</li>
            <li>Daily export (PDF / CSV)</li>
          </ul>
        </div>
        <div className="card p-4">
          <h2>Filters &amp; Views</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Instant search, quick filters, saved views</li>
            <li>Project-scoped or cross-project views</li>
            <li>Snapshot previews for hand-off</li>
          </ul>
        </div>
        <div className="card p-4">
          <h2>Roles &amp; Permissions</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Owner/admin, supervisor, read-only</li>
            <li>Granular project access</li>
            <li>Change log</li>
          </ul>
        </div>
      </div>

      <a href="/pricing" className="inline-flex items-center rounded-md bg-brand-500 px-3 py-1 text-[12px] font-medium text-white hover:bg-brand-600 ring-focus">View Pricing</a>
    </section>
  );
}
