export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">About OpsSync.ai</h1>
        <p className="mt-3 text-lg text-slate-600">
          We’re builders from the field—streamlining operations so your crews can work, not wrestle software.
        </p>
      </header>

      {/* Mission */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="mt-2 text-slate-600">
            Make timekeeping, equipment assignment, and payroll alignment effortless for construction
            and demolition teams—so projects run on schedule and margins stay healthy.
          </p>
          <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
            <li>Practical workflows built from real jobsite pain points</li>
            <li>Clean data out, payroll-ready formats</li>
            <li>A foundation for insights—not just another timesheet</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">What Makes Us Different</h3>
          <p className="mt-2 text-slate-600">
            OpsSync.ai isn’t bloated ERP—it's focused tooling for the field and the back office.
          </p>
          <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
            <li>Supervisor-first time capture</li>
            <li>Board view for people & machines</li>
            <li>Exports tailored for Foundation Bookkeeping</li>
          </ul>
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold">Roadmap Highlights</h3>
        <ol className="mt-4 space-y-4">
          <li>
            <div className="font-medium">Q3 — Core launch</div>
            <div className="text-slate-600">Board, timekeeping, payroll exports, basic insights</div>
          </li>
          <li>
            <div className="font-medium">Q4 — Multi-tenant & white-label</div>
            <div className="text-slate-600">Org roles, custom branding, refined reports</div>
          </li>
          <li>
            <div className="font-medium">Q1 — Deeper analytics</div>
            <div className="text-slate-600">Idle time detection, variance alerts, productivity trends</div>
          </li>
        </ol>
      </div>
    </section>
  );
}
