import SEO from "../components/SEO";

export default function Features() {
  const items = [
    {
      title: 'Employee & Equipment Board',
      body: 'Drag-and-drop assignments, availability color-coding, supervisor vs. PM views, multi-project days.',
    },
    {
      title: 'Timekeeping & Payroll',
      body: 'Supervisor-led QR clock-ins, offline support with auto-sync, approval flows, Foundation CSV export.',
    },
    {
      title: 'Project Insights',
      body: 'Dashboards with trendlines for overtime and absenteeism, equipment usage, anomaly alerts.',
    },
    {
      title: 'Notifications & Reporting',
      body: 'Daily recap emails, weekly payroll-ready summaries, export to PDF/Excel.',
    },
  ];

  return (
    <section className="section">
      <SEO
        title="OpsSync.ai — Features"
        description="Employee & equipment board, timekeeping & payroll, project insights, notifications & reporting."
        path="/features"
      />
      <div className="container-page space-y-8">
        <header className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-bold">Features</h2>
          <p className="text-neutral-600">Built for construction & demolition operations.</p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="card p-6">
              <div className="text-lg font-semibold mb-2">{it.title}</div>
              <p className="text-sm text-neutral-700">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
