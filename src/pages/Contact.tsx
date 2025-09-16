import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: connect to your real endpoint (Formspree/Resend/API)
      await new Promise((res) => setTimeout(res, 600));
      setForm({ name: "", company: "", email: "", message: "" });
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section">
      <div className="container-page grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Let’s streamline your operations</h2>
          <p className="text-neutral-700">Tell us about your crew size and current tools.</p>
          <div className="text-base">support@opssync.ai • (555) 123-4567</div>
        </div>

        <form onSubmit={onSubmit} className="card p-6 space-y-4">
          <input
            className="w-full rounded-lg px-3 py-2 border border-neutral-200"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="w-full rounded-lg px-3 py-2 border border-neutral-200"
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
          <input
            type="email"
            className="w-full rounded-lg px-3 py-2 border border-neutral-200"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            className="w-full rounded-lg px-3 py-2 border border-neutral-200"
            rows={5}
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button type="submit" className="btn-primary disabled:opacity-60" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && <div className="text-green-600 text-sm">Thanks! We’ll be in touch.</div>}
          {status === "error" && <div className="text-red-600 text-sm">Something went wrong. Try again.</div>}
        </form>
      </div>
    </section>
  );
}
