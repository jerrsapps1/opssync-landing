export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-90" />
      <div className="container-ss py-8 md:py-10">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h1>Plan crews &amp; equipment <span className="text-brand-500">in minutes</span>.</h1>
            <p className="mt-2 text-sm muted">
              Drag, drop, filter, avoid conflicts, and export the daily plan—built for construction &amp; demo operations.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="/pricing"  className="inline-flex items-center rounded-md px-3 py-1 text-[12px] text-white bg-brand-500 hover:bg-brand-600 transition ring-focus">Get started</a>
              <a href="/features" className="inline-flex items-center rounded-md px-3 py-1 text-[12px] border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition dark:text-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 ring-focus">See features</a>
            </div>
          </div>

          <div className="relative">
            <div className="card p-3">
              <div className="flex items-center justify-between">
                <div className="h-2 w-16 rounded bg-slate-100 dark:bg-slate-800" />
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div className="card card-hover p-3">
                  <div className="h-16 rounded bg-slate-50 dark:bg-slate-800" />
                  <p className="mt-1 text-[12px] font-medium">Drag &amp; Drop</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Visual day board</p>
                </div>
                <div className="card card-hover p-3">
                  <div className="h-16 rounded bg-slate-50 dark:bg-slate-800" />
                  <p className="mt-1 text-[12px] font-medium">Filters</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Trade, certs, availability</p>
                </div>
                <div className="card card-hover p-3">
                  <div className="h-16 rounded bg-slate-50 dark:bg-slate-800" />
                  <p className="mt-1 text-[12px] font-medium">Exports</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">PDF / CSV snapshots</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-10 -z-10 opacity-25 blur-3xl bg-gradient-to-tr from-sky-200 via-cyan-100 to-transparent dark:from-sky-900/30 dark:via-cyan-900/20 dark:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
