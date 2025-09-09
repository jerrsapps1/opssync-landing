export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text content */}
          <div>
            <span className="inline-block rounded-full border px-3 py-1 text-xs font-medium text-sky-700 border-sky-200 bg-white">
              New • Ops dashboards for crews & payroll
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Run construction ops <span className="text-sky-600">in sync</span>.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              OpsSync.ai keeps employees, equipment, timecards, and payroll aligned—so
              you finish jobs faster and bill cleanly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-sky-600 hover:bg-sky-700 transition"
              >
                Get started
              </a>
              <a
                href="/features"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition"
              >
                See features
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              No cards or certificates here—pure ops & payroll alignment.
            </p>
          </div>

          {/* UI mock card */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-lg p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded bg-slate-100" />
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-200" />
                  <span className="h-2 w-2 rounded-full bg-slate-200" />
                  <span className="h-2 w-2 rounded-full bg-slate-200" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-200 p-3">
                  <div className="h-24 rounded bg-slate-50" />
                  <p className="mt-2 text-sm font-medium">Employee Board</p>
                  <p className="text-xs text-slate-500">Drag & drop crews</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-3">
                  <div className="h-24 rounded bg-slate-50" />
                  <p className="mt-2 text-sm font-medium">Timekeeping</p>
                  <p className="text-xs text-slate-500">Supervisor punches</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-3">
                  <div className="h-24 rounded bg-slate-50" />
                  <p className="mt-2 text-sm font-medium">Payroll Ready</p>
                  <p className="text-xs text-slate-500">Foundation-friendly</p>
                </div>
              </div>
            </div>
            {/* glow effect */}
            <div className="absolute -inset-10 -z-10 blur-3xl opacity-40 bg-gradient-to-tr from-sky-200 via-cyan-100 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
