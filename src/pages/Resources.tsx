export default function Resources() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Resources</h1>
        <p className="mt-3 text-lg muted">Guides and templates to get your Crew &amp; Equipment Board humming.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <a href="#" className="card card-hover group block p-6">
          <div className="h-10 w-10 rounded-xl bg-sky-100 dark:bg-sky-900/40 mb-4" />
          <h3 className="text-lg font-semibold group-hover:underline">Daily Board Snapshot Template</h3>
          <p className="mt-2 muted">Printable layout for morning huddles.</p>
          <span className="mt-3 inline-block text-sm text-brand-600">Download PDF →</span>
        </a>

        <a href="#" className="card card-hover group block p-6">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 mb-4" />
          <h3 className="text-lg font-semibold group-hover:underline">CSV Import Structure</h3>
          <p className="mt-2 muted">Sample CSVs for employees, equipment, projects.</p>
          <span className="mt-3 inline-block text-sm text-brand-600">Download CSVs →</span>
        </a>

        <a href="#" className="card card-hover group block p-6">
          <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 mb-4" />
          <h3 className="text-lg font-semibold group-hover:underline">Dispatch Playbook</h3>
          <p className="mt-2 muted">Best practices for filters, saved views, and conflict checks.</p>
          <span className="mt-3 inline-block text-sm text-brand-600">Download PDF →</span>
        </a>
      </div>

      <div className="card p-6">
        <h3 className="text-xl font-semibold">FAQ</h3>
        <div className="mt-4 space-y-4">
          <details className="card-hover rounded-lg border border-transparent p-4">
            <summary className="cursor-pointer font-medium">Can I import employees and equipment?</summary>
            <p className="mt-2 muted">Yes—use the CSV structure template to import people, machines, and projects.</p>
          </details>
          <details className="card-hover rounded-lg border border-transparent p-4">
            <summary className="cursor-pointer font-medium">Do you support saved views?</summary>
            <p className="mt-2 muted">Yes—create personal or shared views for dispatchers, regions, or project types.</p>
          </details>
          <details className="card-hover rounded-lg border border-transparent p-4">
            <summary className="cursor-pointer font-medium">Can I export the board?</summary>
            <p className="mt-2 muted">Yes—PDF snapshots for the field and CSV for spreadsheets or archiving.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
