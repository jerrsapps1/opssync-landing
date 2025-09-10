export default function About() {
  return (
    <section className="container-ss py-8 md:py-10 space-y-6">
      <h1>About OpsSync.ai</h1>
      <p className="text-sm muted">We streamline field operations so crews can work—without wrestling software.</p>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="card p-4">
          <h2>Our Mission</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Effortless planning for people &amp; machines</li>
            <li>Keep projects on schedule and margins healthy</li>
            <li>Clean, shareable plans—not bloat</li>
          </ul>
        </div>
        <div className="card p-4">
          <h2>What Makes Us Different</h2>
          <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
            <li>Focused board for field &amp; back office</li>
            <li>Supervisor-first interactions</li>
            <li>Exports your teams actually use</li>
          </ul>
        </div>
      </div>

      <div className="card p-4">
        <h2>Roadmap Highlights</h2>
        <ul className="mt-2 list-disc pl-5 text-sm muted space-y-1">
          <li><span className="font-medium">Q3 — Core launch</span>: Board, filters, exports, basic insights</li>
          <li><span className="font-medium">Q4 — Roles &amp; branding</span>: Org roles, refined exports</li>
          <li><span className="font-medium">Q1 — Deeper analytics</span>: Idle time &amp; variance highlights</li>
        </ul>
      </div>
    </section>
  );
}
