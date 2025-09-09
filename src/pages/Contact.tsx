export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>
        <p className="mt-3 text-lg text-slate-600">
          Questions about pricing, onboarding, or exports? We’ll help you get set up.
        </p>
      </header>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* Form (non-functional placeholder) */}
        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Company</label>
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <button
            type="button"
            className="w-full rounded-xl bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700 transition"
            onClick={() => alert("Thanks! This demo form isn’t wired yet.")}
          >
            Send message
          </button>
          <p className="text-xs text-slate-500">
            This is a demo form. We’ll connect it to your backend/email when you’re ready.
          </p>
        </form>

        {/* Company info */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">OpsSync.ai</h3>
          <p className="mt-2 text-slate-600">
            Built for construction & demolition operations—so your field and accounting teams run in sync.
          </p>

          <div className="mt-6 space-y-3 text-slate-700">
            <p><span className="font-medium">Email:</span> hello@opssync.ai</p>
            <p><span className="font-medium">Support:</span> support@opssync.ai</p>
            <p><span className="font-medium">Hours:</span> Mon–Fri, 8am–6pm CT</p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Topics we can help with</h4>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>Onboarding your first projects</li>
              <li>Setting up roles & permissions</li>
              <li>Export mapping for Foundation Bookkeeping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
