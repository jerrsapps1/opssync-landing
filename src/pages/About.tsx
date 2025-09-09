export default function About() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-brand-gradient" />
      <div className="mx-auto max-w-6xl px-6 py-14 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">About OpsSync.ai</h1>
          <p className="mt-3 text-lg muted">
            We build practical tools for dispatchers, supers, and the yard—so planning the day is fast and clear.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-semibold">Our Focus</h2>
            <p className="mt-2 muted">
              A single source of truth for crews and equipment. Visual planning, useful filters, and clean exports—without the bloat.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold">What We Value</h2>
            <ul className="mt-2 list-disc pl-5 muted space-y-1">
              <li>Speed over complexity</li>
              <li>Clarity during morning huddles</li>
              <li>Exportable plans the whole org can use</li>
            </ul>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold">Roadmap</h2>
          <div className="mt-4 space-y-4 muted">
            <div>
              <div className="font-medium">Q3 — Board Launch</div>
              <div>Drag-and-drop day board, filters, conflicts, PDF/CSV exports</div>
            </div>
            <div>
              <div className="font-medium">Q4 — Saved Views &amp; Templates</div>
              <div>Personal/shared views, board templates, week view</div>
            </div>
            <div>
              <div className="font-medium">Q1 — Utilization &amp; Alerts</div>
              <div>Deeper utilization, conflict badges, optional daily email</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
