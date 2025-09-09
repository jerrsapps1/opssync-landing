// src/pages/Contact.tsx
export default function Contact() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-brand-gradient" />
      <div className="mx-auto max-w-6xl px-6 py-14 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>
          <p className="mt-3 text-lg muted">
            Questions about pricing, onboarding, or exports? We’ll help you get set up.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <form className="card p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Jane Crewlead"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-brand-500
                           dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-brand-500
                           dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500"
              />
            </div>

            <div>
              <label htmlFor="company" className="text-sm font-medium">Company</label>
              <input
                id="company"
                type="text"
                placeholder="Acme Demolition"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-brand-500
                           dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us a bit about your crews and current process…"
                className="mt-1 w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-brand-500
                           dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500"
              />
            </div>

            <button
              type="submit"
              className="ring-focus mt-2 inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-5 py-3 font-medium text-white hover:bg-brand-600 transition"
            >
              Send message
            </button>

            <p className="mt-1 text-xs muted">This is a demo form. We’ll connect it to your backend/email when you’re ready.</p>
          </form>

          <div className="card p-6">
            <h2 className="text-xl font-semibold">OpsSync.ai</h2>
            <p className="mt-2 muted">
              Built for construction &amp; demolition operations—so your field and accounting teams run in sync.
            </p>

            <dl className="mt-6 space-y-2">
              <div className="flex gap-2">
                <dt className="w-16 text-sm font-medium">Email</dt>
                <dd className="muted">hello@opssync.ai</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-16 text-sm font-medium">Support</dt>
                <dd className="muted">support@opssync.ai</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-16 text-sm font-medium">Hours</dt>
                <dd className="muted">Mon–Fri, 8am–6pm CT</dd>
              </div>
            </dl>

            <h3 className="mt-6 text-sm font-medium">Topics we can help with</h3>
            <ul className="mt-2 list-disc pl-5 muted space-y-1">
              <li>Onboarding your first projects</li>
              <li>Setting up roles &amp; permissions</li>
              <li>Export mapping for Foundation Bookkeeping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
