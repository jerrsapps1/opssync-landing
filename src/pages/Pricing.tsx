export default function Pricing() {
  const card = "card p-4 flex flex-col gap-3";
  const li = "flex items-center gap-2 text-sm muted";

  return (
    <section className="container-capped py-8 md:py-10 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight md:text-[26px]">Pricing</h1>
      <p className="text-sm muted">Simple, per-user pricing. Start small and add users as you grow.</p>

      <div className="grid gap-3 md:grid-cols-4">
        <div className={card}>
          <h2 className="text-base font-semibold">Solo</h2>
          <div className="text-2xl font-extrabold">$29<span className="text-sm font-semibold">/mo</span></div>
          <ul className="space-y-1">
            <li className={li}>1 seat</li>
            <li className={li}>Board &amp; filters</li>
            <li className={li}>PDF / CSV exports</li>
          </ul>
          <a href="/contact" className="mt-2 inline-flex items-center rounded-md bg-slate-900 px-3 py-1 text-xs font-medium text-white dark:bg-slate-700 ring-focus">Choose Solo</a>
        </div>

        <div className={`${card} border-brand-500`}>
          <div className="text-[11px] font-medium text-brand-500">Most Popular</div>
          <h2 className="text-base font-semibold">Team (5 users)</h2>
          <div className="text-2xl font-extrabold">$119<span className="text-sm font-semibold">/mo</span></div>
          <ul className="space-y-1">
            <li className={li}>5 seats</li>
            <li className={li}>All Solo features</li>
            <li className={li}>Roles &amp; permissions</li>
          </ul>
          <a href="/contact" className="mt-2 inline-flex items-center rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600 ring-focus">Choose Team</a>
        </div>

        <div className={card}>
          <h2 className="text-base font-semibold">Crew (10 users)</h2>
          <div className="text-2xl font-extrabold">$199<span className="text-sm font-semibold">/mo</span></div>
          <ul className="space-y-1">
            <li className={li}>10 seats</li>
            <li className={li}>All Team features</li>
            <li className={li}>Basic insights</li>
          </ul>
          <a href="/contact" className="mt-2 inline-flex items-center rounded-md bg-slate-900 px-3 py-1 text-xs font-medium text-white dark:bg-slate-700 ring-focus">Choose Crew</a>
        </div>

        <div className={card}>
          <h2 className="text-base font-semibold">Plus</h2>
          <div className="text-2xl font-extrabold">$399<span className="text-sm font-semibold">/mo</span></div>
          <ul className="space-y-1">
            <li className={li}>20 seats</li>
            <li className={li}>Org roles &amp; branding (soon)</li>
            <li className={li}>Priority support</li>
          </ul>
          <a href="/contact" className="mt-2 inline-flex items-center rounded-md bg-slate-900 px-3 py-1 text-xs font-medium text-white dark:bg-slate-700 ring-focus">Choose Plus</a>
        </div>
      </div>

      <p className="text-xs muted">Need more seats or multi-org? <a href="/contact" className="underline">Contact us</a> for a custom plan.</p>
    </section>
  );
}
