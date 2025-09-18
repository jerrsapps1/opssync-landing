export default function Contact() {
  return (
    <section className="container-capped py-8 md:py-10 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight md:text-[26px]">Contact</h1>
      <p className="text-sm muted">Questions about pricing, onboarding, or exports? We’ll help you get set up.</p>

      <div className="grid gap-3 md:grid-cols-2">
        <form className="card p-4 space-y-3">
          <label className="text-sm">Name
            <input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900" />
          </label>
          <label className="text-sm">Email
            <input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900" />
          </label>
          <label className="text-sm">Company
            <input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900" />
          </label>
          <label className="text-sm">Message
            <textarea rows={4} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900" />
          </label>
          <button type="button" className="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white hover:bg-brand-600">
            Send message
          </button>
          <p className="text-[11px] muted">This is a demo form. We’ll connect it to your backend/email when you’re ready.</p>
        </form>

        <div className="card p-4 space-y-2">
          <h2 className="text-base font-semibold">OpsSync.ai</h2>
          <p className="text-sm muted">Built for construction &amp; demolition operations—so your field and back office stay in sync.</p>
          <p className="text-sm"><span className="muted">Email:</span> hello@opssync.ai</p>
          <p className="text-sm"><span className="muted">Support:</span> support@opssync.ai</p>
          <p className="text-sm"><span className="muted">Hours:</span> Mon–Fri, 8am–6pm CT</p>
        </div>
      </div>
    </section>
  );
}
