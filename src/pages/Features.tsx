export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Features</h1>
        <p className="mt-3 text-lg muted">
          A focused board for people &amp; machines—fast to plan, clear to read.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-sky-100 dark:bg-sky-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Drag-and-Drop Board</h3>
          <p className="mt-2 muted">Plan the day visually. Assign employees and equipment to projects with simple drag &amp; drop.</p>
          <ul className="mt-4 list-disc pl-5">
            <li>Day &amp; week views</li>
            <li>Project lanes</li>
            <li>Saved board layouts</li>
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Filters &amp; Search</h3>
          <p className="mt-2 muted">Find the right person or machine by trade, certifications, attachments, or availability window.</p>
          <ul className="mt-4 list-disc pl-5">
            <li>Trade &amp; cert filters</li>
            <li>Attachment &amp; power class</li>
            <li>Availability ranges</li>
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Conflicts &amp; Utilization</h3>
          <p className="mt-2 muted">Spot double-booking and idle equipment early. Keep crews balanced across jobs.</p>
          <ul className="mt-4 list-disc pl-5">
            <li>Double-book checks</li>
            <li>Utilization hints</li>
            <li>Simple conflict badges</li>
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Snapshots &amp; Exports</h3>
          <p className="mt-2 muted">Share the plan with the yard and the field—clean PDFs or CSVs of the current board.</p>
          <ul className="mt-4 list-disc pl-5">
            <li>PDF board snapshots</li>
            <li>CSV exports</li>
            <li>Daily email option</li>
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Saved Views</h3>
          <p className="mt-2 muted">Create views per dispatcher, region, or project type and switch fast during morning huddles.</p>
          <ul className="mt-4 list-disc pl-5">
            <li>Personal &amp; shared views</li>
            <li>Quick filters</li>
            <li>Keyboard shortcuts</li>
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-rose-100 dark:bg-rose-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Branding &amp; White-Label</h3>
          <p className="mt-2 muted">Use your logo and colors in the board and on exported PDFs.</p>
          <ul className="mt-4 list-disc pl-5">
            <li>Logo &amp; color theme</li>
            <li>Report headers/footers</li>
            <li>Multi-org friendly</li>
          </ul>
        </div>
      </div>

      <div className="card p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to organize your day?</h2>
        <p className="mt-2 muted">Start with your core crew, add users as you grow.</p>
        <a href="/pricing" className="ring-focus mt-4 inline-flex items-center rounded-xl bg-brand-500 px-5 py-3 font-medium text-white hover:bg-brand-600 transition">
          View Pricing
        </a>
      </div>
    </section>
  );
}
