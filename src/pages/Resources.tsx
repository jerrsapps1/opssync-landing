export default function Resources() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Resources</h1>
        <p className="mt-3 text-lg text-slate-600">
          Guides and templates to help you run operations cleanly from day one.
        </p>
      </header>

      {/* Resource cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <a href="#" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
          <div className="h-10 w-10 rounded-xl bg-sky-100 mb-4" />
          <h3 className="text-lg font-semibold group-hover:underline">Supervisor Timekeeping Guide</h3>
          <p className="mt-2 text-slate-600">Best practices for clean week-close with fewer corrections.</p>
          <span className="mt-3 inline-block text-sm text-sky-700">Download PDF →</span>
        </a>

        <a href="#" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 mb-4" />
          <h3 className="text-lg font-semibold group-hover:underline">Crew & Equipment Board Template</h3>
          <p className="mt-2 text-slate-600">A printable daily board for morning huddles.</p>
          <span className="mt-3 inline-block text-sm text-sky-700">Download XLSX →</span>
        </a>

        <a href="#" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
          <div className="h-10 w-10 rounded-xl bg-indigo-100 mb-4" />
          <h3 className="text-lg font-semibold group-hover:underline">Payroll Export Checklist</h3>
          <p className="mt-2 text-slate-600">Ensure job/phase/cost code accuracy before export.</p>
          <span className="mt-3 inline-block text-sm text-sky-700">Download PDF →</span>
        </a>
      </div>

      {/* FAQ */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold">FAQ</h3>
        <div className="mt-4 space-y-4">
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-medium">Can supervisors clock in on behalf of crews?</summary>
            <p className="mt-2 text-slate-600">
              Yes. OpsSync supports supervisor-led entries via QR, PIN, or manual add—with audit trails.
            </p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-medium">Do exports work with Foundation?</summary>
            <p className="mt-2 text-slate-600">
              Exports are formatted with job, phase, and cost code alignment for a clean import workflow.
            </p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-medium">How many users can I add?</summary>
            <p className="mt-2 text-slate-600">
              Start with a single seat and scale to tens or hundreds of users with role-based permissions.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
