export default function Pricing() {
  const tiers = [
    {
      name: "Solo",
      subtitle: "One dispatcher or owner-operator.",
      price: "$19", unit: "/mo",
      features: ["1 seat", "Drag-and-drop day board", "Filters & search", "PDF/CSV exports"],
      cta: "Choose Solo", featured: false,
    },
    {
      name: "Team 5",
      subtitle: "Core dispatch team.",
      price: "$89", unit: "/mo",
      features: ["5 seats", "All Solo features", "Saved views", "Basic conflict checks"],
      cta: "Choose Team 5", featured: true, badge: "Most Popular",
    },
    {
      name: "Team 10",
      subtitle: "Multi-crew operations.",
      price: "$159", unit: "/mo",
      features: ["10 seats", "All Team 5 features", "Week view & snapshots", "Utilization hints"],
      cta: "Choose Team 10", featured: false,
    },
    {
      name: "Business 25",
      subtitle: "Growing orgs that need scale.",
      price: "$349", unit: "/mo",
      features: ["25 seats", "All Team 10 features", "Shared templates", "Priority support"],
      cta: "Choose Business 25", featured: false,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Pricing</h1>
        <p className="mt-3 text-lg muted">Simple per-seat plans for the Crew &amp; Equipment Board.</p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map(t => (
          <div key={t.name} className={`card card-hover p-6 ${t.featured ? "border-2 border-brand-500" : ""}`}>
            {t.badge && (
              <div className="mb-2 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-slate-800/60 dark:text-brand-200">
                {t.badge}
              </div>
            )}
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="mt-1 muted">{t.subtitle}</p>

            <div className="mt-6">
              <span className="text-4xl font-extrabold">{t.price}</span>
              <span className="muted"> {t.unit}</span>
            </div>

            <ul className="mt-6 flex-1 list-disc pl-5 space-y-2 muted">
              {t.features.map(f => <li key={f}>{f}</li>)}
            </ul>

            <a href="#" className={`ring-focus mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition
                ${t.featured
                  ? "bg-brand-500 text-white hover:bg-brand-600"
                  : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white"
                }`}>
              {t.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 card p-6 text-center">
        <p className="muted">
          Need more seats, multi-org, or custom exports?{" "}
          <a className="text-brand-600 hover:underline" href="/contact">Contact us</a> for tailored plans.
        </p>
      </div>
    </section>
  );
}
