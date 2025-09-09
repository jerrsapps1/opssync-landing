// src/pages/About.tsx
export default function About() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-brand-gradient" />
      <div className="mx-auto max-w-6xl px-6 py-14 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">About OpsSync.ai</h1>
          <p className="mt-3 text-lg muted">
            We’re builders from the field—streamlining operations so your crews can work, not wrestle software.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="mt-2 muted">
              Make timekeeping, equipment assignment, and payroll alignment effortless for construction and demolition teams—
              so projects run on schedule and margins stay healthy.
            </p>
            <ul className="mt-4 list-disc pl-5 muted space-y-1">
              <li>Practical workflows built from real jobsite pain points</li>
              <li>Clean data out, payroll-ready formats</li>
              <li>A foundation for insights—not just another timesheet</li>
            </ul>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold">What Makes Us Different</h2>
            <p className="mt-2 muted">OpsSync.ai isn’t bloated ERP—it’s focused tooling for the field and the back office.</p>
            <ul className="mt-4 list-disc pl-5 muted space-y-1">
              <li>Supervisor-first time capture</li>
              <li>Board view for people &amp; machines</li>
              <li>Exports tailored for Foundation Bookkeeping</li>
            </ul>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold">Roadmap Highlights</h2>
          <div className="mt-4 space-y-4 muted">
            <div>
              <div className="font-medium">Q3 — Core launch</div>
              <div>Board, timekeeping, payroll exports, basic insights</div>
            </div>
            <div>
              <div className="font-medium">Q4 — Multi-tenant &amp; white-label</div>
              <div>Org roles, custom branding, refined reports</div>
            </div>
            <div>
              <div className="font-medium">Q1 — Deeper analytics</div>
              <div>Idle time detection, variance alerts, productivity trends</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
