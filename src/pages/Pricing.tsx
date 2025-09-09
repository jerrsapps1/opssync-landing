export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Pricing</h1>
        <p className="mt-3 text-lg text-slate-600">
          Simple per-user tiers. Scale your team as projects ramp.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {/* Single User */}
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Single User</h3>
          <p className="mt-1 text-slate-600">Solo operator or pilot usage.</p>
          <div className="mt-6">
            <span className="text-4xl font-extrabold">$29</span>
            <span className="text-slate-500"> /mo</span>
          </div>
          <ul className="mt-6 flex-1 list-disc pl-5 text-slate-700 space-y-2">
            <li>1 seat</li>
            <li>Employee & Equipment board</li>
            <li>Timekeeping & exports</li>
            <li>Basic reports</li>
          </ul>
          <a
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800 transition"
          >
            Choose Single
          </a>
        </div>

        {/* 5 Users */}
        <div className="flex flex-col rounded-2xl border-2 border-sky-600 bg-white p-6 shadow-sm">
          <div className="mb-2 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
            Most Popular
          </div>
          <h3 className="text-xl font-semibold">5 Users</h3>
          <p className="mt-1 text-slate-600">Great for a core field team.</p>
          <div className="mt-6">
            <span className="text-4xl font-extrabold">$119</span>
            <span className="text-slate-500"> /mo</span>
          </div>
          <ul className="mt-6 flex-1 list-disc pl-5 text-slate-700 space-y-2">
            <li>5 seats</li>
            <li>All Single features</li>
            <li>Role-based permissions</li>
            <li>Project insights</li>
          </ul>
          <a
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700 transition"
          >
            Choose 5 Users
          </a>
        </div>

        {/* 10 Users */}
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">10 Users</h3>
          <p className="mt-1 text-slate-600">For multi-crew operations.</p>
          <div className="mt-6">
            <span className="text-4xl font-extrabold">$199</span>
            <span className="text-slate-500"> /mo</span>
          </div>
          <ul className="mt-6 flex-1 list-disc pl-5 text-slate-700 space-y-2">
            <li>10 seats</li>
            <li>All 5-User features</li>
            <li>Advanced exports & checks</li>
            <li>Priority support</li>
          </ul>
          <a
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800 transition"
          >
            Choose 10 Users
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
        <p className="text-slate-700">
          Need more seats or multi-org? <a className="text-sky-700 underline" href="/contact">Contact us</a> for custom plans.
        </p>
      </div>
    </section>
  );
}
