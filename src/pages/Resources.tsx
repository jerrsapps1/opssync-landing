export default function Resources() {
  return (
    <section className="container-ss py-8 md:py-10 space-y-6">
      <h1>Resources</h1>
      <p className="text-sm muted">Guides and templates to help you run clean daily operations from day one.</p>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="card p-4">
          <h2>Crew &amp; Equipment Board (XLSX)</h2>
          <p className="mt-1 text-sm muted">Printable board for morning huddles.</p>
          <a className="mt-2 inline-flex rounded-md bg-slate-900 px-3 py-1 text-[12px] font-medium text-white dark:bg-slate-700" href="#">Download →</a>
        </div>
        <div className="card p-4">
          <h2>Daily Plan (PDF)</h2>
          <p className="mt-1 text-sm muted">Share the day’s assignments.</p>
          <a className="mt-2 inline-flex rounded-md bg-slate-900 px-3 py-1 text-[12px] font-medium text-white dark:bg-slate-700" href="#">Download →</a>
        </div>
        <div className="card p-4">
          <h2>CSV Import Mapping</h2>
          <p className="mt-1 text-sm muted">Prep your data for quick onboarding.</p>
          <a className="mt-2 inline-flex rounded-md bg-slate-900 px-3 py-1 text-[12px] font-medium text-white dark:bg-slate-700" href="#">Download →</a>
        </div>
      </div>
    </section>
  );
}
