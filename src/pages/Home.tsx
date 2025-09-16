import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="OpsSync.ai — Single source of truth for field operations"
        description="Simplify timekeeping, payroll, and equipment management with one platform."
        path="/"
      />
      <section className="section">
        <div className="container-page grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-gradient">The single source of truth</span> for your field operations.
            </h1>
            <p className="text-lg text-neutral-700">
              Simplify timekeeping, payroll, and equipment management with one platform.
            </p>
            <div className="flex gap-3">
              <a href="https://app.opssync.ai/signup" className="btn-primary">Get Started</a>
              <a href="/features" className="link">See features</a>
            </div>
          </div>
          <div className="card min-h-[260px] flex items-center justify-center text-neutral-500">
            Product preview
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { title: 'Employee & Equipment Board', desc: 'Assign crews and machines in seconds.' },
            { title: 'Timekeeping & Payroll', desc: 'Supervisor-led QR clock-ins, payroll-ready exports.' },
            { title: 'Project Insights', desc: 'AI-powered trends for hours, costs, and utilization.' },
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <div className="font-semibold mb-1">{f.title}</div>
              <p className="text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page card p-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-lg font-semibold">Ready to streamline payroll and ops?</div>
            <p className="text-sm text-neutral-600">Start your free trial today.</p>
          </div>
          <a href="https://app.opssync.ai/signup" className="btn-primary">Start Free Trial</a>
        </div>
      </section>
    </>
  );
}
