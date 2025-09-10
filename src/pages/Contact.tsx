export default function Contact() {
  return (
    <section className="py-6">
      <div className="container-ss">
        <h1>Contact</h1>
        <p className="muted text-sm mt-1">Questions about pricing, onboarding, or exports? We’ll help you get set up.</p>

        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {/* Form */}
          <form className="card p-4 space-y-3">
            <div>
              <label className="label">Name</label>
              <input className="input" type="text" placeholder="Your name" />
            </div>
            <div>
              <label className="label">Email</label>
              <input className="input" type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label className="label">Company</label>
              <input className="input" type="text" placeholder="Company" />
            </div>
            <div>
              <label className="label">Message</label>
              <textarea className="textarea h-28" placeholder="How can we help?" />
            </div>
            <button type="button" className="btn btn-primary w-max">Send message</button>
            <p className="text-[12px] muted">Demo form—wire up your email when you’re ready.</p>
          </form>

          {/* Info */}
          <div className="card p-4 text-[13px] space-y-3">
            <h3 className="text-[13px] font-semibold">OpsSync.ai</h3>
            <p className="muted">Built for construction &amp; demolition operations—so your field and accounting teams run in sync.</p>
            <div>
              <div className="font-medium">Email</div>
              <div className="muted">hello@opssync.ai</div>
            </div>
            <div>
              <div className="font-medium">Support</div>
              <div className="muted">support@opssync.ai</div>
            </div>
            <div>
              <div className="font-medium">Hours</div>
              <div className="muted">Mon–Fri, 8am–6pm CT</div>
            </div>
            <div className="pt-2">
              <div className="font-medium">Topics we can help with</div>
              <ul className="list-disc pl-4 muted">
                <li>Onboarding your first projects</li>
                <li>Setting up roles &amp; permissions</li>
                <li>Export mapping for Foundation Bookkeeping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
