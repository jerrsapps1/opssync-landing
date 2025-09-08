export default function Contact() {
  return (
    <section className="section">
      <div className="container-page grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Let’s streamline your operations</h2>
          <p className="text-neutral-600">Tell us about your crew size and current tools.</p>
          <div className="text-sm">support@opssync.ai • (555) 123-4567</div>
        </div>
        <form className="card p-6 space-y-4">
          <input className="w-full rounded-lg px-3 py-2 border border-neutral-200" placeholder="Name" />
          <input className="w-full rounded-lg px-3 py-2 border border-neutral-200" placeholder="Company" />
          <input className="w-full rounded-lg px-3 py-2 border border-neutral-200" placeholder="Email" />
          <textarea className="w-full rounded-lg px-3 py-2 border border-neutral-200" rows={5} placeholder="Message" />
          <button type="submit" className="btn-primary">Send message</button>
        </form>
      </div>
    </section>
  );
}
