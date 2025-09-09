export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Features</h1>
        <p className="mt-3 text-lg muted">
          Everything you need to keep crews, equipment, and payroll perfectly aligned.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-sky-100 dark:bg-sky-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Employee &amp; Equipment Board</h3>
          <p className="mt-2 muted">
            Drag-and-drop employees and machines onto active projects. Filter by trade,
            certifications, attachments, or availability.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Crew assignment snapshots</li>
            <li>Equipment utilization at a glance</li>
            <li>Export daily board as PDF</li>
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Supervisor Timekeeping</h3>
          <p className="mt-2 muted">
            Supervisor-led clock-ins via QR, PIN, or manual entry—validated against job assignments and shifts.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Shifts &amp; cost codes</li>
            <li>Overtime &amp; per diem rules</li>
            <li>Offline capture (syncs later)</li>
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Payroll-Ready Exports</h3>
          <p className="mt-2 muted">
            Foundation-friendly summaries with job, phase, and cost code alignment—no manual cleanup.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>CSV / XLSX exports</li>
            <li>Week-close validation checks</li>
            <li>Variance flags &amp; audit trail</li>
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Project Insights</h3>
          <p className="mt-2 muted">
            Spot anomalies in hours, equipment idle time, and production rates to keep jobs on schedule and margin.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Trendlines &amp; anomaly checks</li>
            <li>Crew productivity snapshots</li>
            <li>Exportable reports</li>
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-rose-100 dark:bg-rose-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Roles &amp; Permissions</h3>
          <p className="mt-2 muted">
            Owner-admin, org-admin, supervisor, and employee views; control who sees and edits what across projects.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Granular access by role</li>
            <li>Project-scoped permissions</li>
            <li>Audit log of changes</li>
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="h-10 w-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 mb-4" />
          <h3 className="text-xl font-semibold">Branding &amp; White-Label</h3>
          <p className="mt-2 muted">
            Bring your company identity with logos, colors, and project headers on PDFs and reports.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Custom logo &amp; colors</li>
            <li>Report headers/footers</li>
            <li>Multi-tenant friendly</li>
          </ul>
        </div>
      </div>

      <div className="card p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to put ops in sync?</h2>
        <p className="mt-2 muted">Start with your core crew, add users as you grow.</p>
        <a href="/pricing" className="ring-focus mt-4 inline-flex items-center rounded-xl bg-brand-500 px-5 py-3 font-medium text-white hover:bg-brand-600 transition">
          View Pricing
        </a>
      </div>
    </section>
  );
}
