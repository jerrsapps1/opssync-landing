export default function About() {
  return (
    <section className="container-capped py-8 md:py-10 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight md:text-[26px]">About OpsSync.ai</h1>
      <p className="text-sm muted">
        We’re builders from the field—streamlining operations so your crews can work, not wrestle software.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="card p-4">
          <h2 className="text-base font-semibold">Our Mission</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Make planning people &amp; machines effortless</li>
            <li>Keep projects on schedule and margins healthy</li>
            <li>Clean, shareable daily plans—not bloat</li>
          </ul>
        </div>

        <div className="card p-4">
          <h2 className="text-base font-semibold">What Makes Us Different</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Focused board for the field &amp; back office</li>
            <li>Supervisor-first interactions</li>
            <li>Exports your teams actually use</li>
          </ul>
        </div>
      </div>

      <div className="card p-4">
        <h2 className="text-base font-semibold">Roadmap Highlights</h2>
        <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
          <li><span className="font-medium">Q3 — Core launch</span>: Board, filters, exports, basic insights</li>
          <li><span className="font-medium">Q4 — Roles &amp; branding</span>: Org roles, refined exports</li>
          <li><span className="font-medium">Q1 — Deeper analytics</span>: Idle time &amp; variance highlights</li>
        </ul>
      </div>
    </section>
  );
}
