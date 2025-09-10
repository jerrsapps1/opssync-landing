export default function Resources() {
  return (
    <section className="container-capped py-8 md:py-10 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight md:text-[26px]">Resources</h1>
      <p className="text-sm muted">Guides and templates to help you run clean daily operations from day one.</p>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="card p-4">
          <h2 className="text-base font-semibold">Crew &amp; Equipment Board Template</h2>
          <p className="mt-1 text-sm muted">A printable daily board for morning huddles.</p>
          <a className="mt-2 inline-flex rounded-md bg-slate-900 px-3 py-1 text-xs font-medium text-white dark:bg-slate-700" href="#">Download XLSX →</a>
        </div>

        <div className="card p-4">
          <h2 className="text-base font-semibold">Daily Plan PDF</h2>
          <p className="mt-1 text-sm muted">Share the day’s assignments with the field.</p>
          <a className="mt-2 inline-flex rounded-md bg-slate-900 px-3 py-1 text-xs font-medium text-white dark:bg-slate-700" href="#">Download PDF →</a>
        </div>

        <div className="card p-4">
          <h2 className="text-base font-semibold">CSV Import Mapping</h2>
          <p className="mt-1 text-sm muted">Prep your data for quick onboarding.</p>
          <a className="mt-2 inline-flex rounded-md bg-slate-900 px-3 py-1 text-xs font-medium text-white dark:bg-slate-700" href="#">Download CSV →</a>
        </div>
      </div>
    </section>
  );
}
