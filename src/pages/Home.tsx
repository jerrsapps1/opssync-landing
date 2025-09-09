export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-gradient" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border px-3 py-1 text-xs font-medium text-sky-700 border-sky-200 bg-white dark:bg-slate-900 dark:text-sky-300 dark:border-slate-700">
              New • Ops dashboards for crews &amp; payroll
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Run construction ops <span className="text-brand-500">in sync</span>.
            </h1>
            <p className="mt-4 text-lg muted">
              OpsSync.ai keeps employees, equipment, timecards, and payroll aligned—so you finish jobs faster and bill cleanly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-brand-500 hover:bg-brand-600 transition ring-focus">
                Get started
              </a>
              <a href="/features" className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition dark:text-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 ring-focus">
                See features
              </a>
            </div>
            <p className="mt-3 text-sm muted">No cards or certificates here—pure ops &amp; payroll alignment.</p>
          </div>

          <div className="relative">
            <div className="card p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded bg-slate-100 dark:bg-slate-800" />
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <span className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <span className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="card card-hover p-3">
                  <div className="h-24 rounded bg-slate-50 dark:bg-slate-800" />
                  <p className="mt-2 text-sm font-medium">Employee Board</p>
                  <p className="text-xs muted">Drag &amp; drop crews</p>
                </div>
                <div className="card card-hover p-3">
                  <div className="h-24 rounded bg-slate-50 dark:bg-slate-800" />
                  <p className="mt-2 text-sm font-medium">Timekeeping</p>
                  <p className="text-xs muted">Supervisor punches</p>
                </div>
                <div className="card card-hover p-3">
                  <div className="h-24 rounded bg-slate-50 dark:bg-slate-800" />
                  <p className="mt-2 text-sm font-medium">Payroll Ready</p>
                  <p className="text-xs muted">Foundation-friendly</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-10 -z-10 opacity-40 blur-3xl bg-gradient-to-tr from-sky-200 via-cyan-100 to-transparent dark:from-sky-900/30 dark:via-cyan-900/20 dark:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
