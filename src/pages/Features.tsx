export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Features</h1>
        <p className="mt-3 text-lg text-slate-600">
          Everything you need to keep crews, equipment, and payroll perfectly aligned.
        </p>
      </header>

      {/* Feature grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Employee & Equipment Board */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-sky-100 mb-4" />
          <h3 className="text-xl font-semibold">Employee & Equipment Board</h3>
          <p className="mt-2 text-slate-600">
            Drag-and-drop employees and machines onto active projects. Filter by trade,
            certifications, attachments, or availability.
          </p>
          <ul className="mt-4 list-disc pl-5 text-slate-700">
            <li>Crew assignment snapshots</li>
            <li>Equipment utilization at a glance</li>
            <li>Export daily board as PDF</li>
          </ul>
        </div>

        {/* Timekeeping */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 mb-4" />
          <h3 className="text-xl font-semibold">Supervisor Timekeeping</h3>
          <p className="mt-2 text-slate-600">
            Supervisor-led clock-ins via QR, PIN, or manual entry—validated against
            job assignments and shifts.
          </p>
          <ul className="mt-4 list-disc pl-5 text-slate-700">
            <li>Shifts & cost codes</li>
            <li>Overtime & per diem rules</li>
            <li>Offline capture (syncs later)</li>
          </ul>
        </div>

        {/* Payroll-ready */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-indigo-100 mb-4" />
          <h3 className="text-xl font-semibold">Payroll-Ready Exports</h3>
          <p className="mt-2 text-slate-600">
            Produce clean, Foundation-friendly summaries with job, phase, and cost code
            alignment—no more manual cleanup.
          </p>
          <ul className="mt-4 list-disc pl-5 text-slate-700">
            <li>CSV / XLSX exports</li>
            <li>Week-close validation checks</li>
            <li>Variance flags & audit trail</li>
          </ul>
        </div>

        {/* Project insights */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-amber-100 mb-4" />
          <h3 className="text-xl font-semibold">Project Insights</h3>
          <p className="mt-2 text-slate-600">
            Spot anomalies in hours, equipment idle time, and production rates to keep
            jobs on schedule and margin.
          </p>
          <ul className="mt-4 list-disc pl-5 text-slate-700">
            <li>Trendlines & basic anomaly checks</li>
            <li>Crew productivity snapshots</li>
            <li>Exportable reports</li>
          </ul>
        </div>

        {/* Roles & permissions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-rose-100 mb-4" />
          <h3 className="text-xl font-semibold">Roles & Permissions</h3>
          <p className="mt-2 text-slate-600">
            Owner-admin, org-admin, supervisor, and employee views; control who sees and
            edits what across projects.
          </p>
          <ul className="mt-4 list-disc pl-5 text-slate-700">
            <li>Granular access by role</li>
            <li>Project-scoped permissions</li>
            <li>Audit log of changes</li>
          </ul>
        </div>

        {/* White-label & branding */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-cyan-100 mb-4" />
          <h3 className="text-xl font-semibold">Branding & White-Label</h3>
          <p className="mt-2 text-slate-600">
            Bring your company identity with logos, colors, and project headers on
            PDFs and reports.
          </p>
          <ul className="mt-4 list-disc pl-5 text-slate-700">
            <li>Custom logo & colors</li>
            <li>Report headers/footers</li>
            <li>Multi-tenant friendly</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-sky-50 to-cyan-50 p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to put ops in sync?</h2>
        <p className="mt-2 text-slate-600">Start with your core crew, add users as you grow.</p>
        <a
          href="/pricing"
          className="mt-4 inline-flex items-center rounded-xl bg-sky-600 px-5 py-3 font-medium text-white hover:bg-sky-700 transition"
        >
          View Pricing
        </a>
      </div>
    </section>
  );
}
