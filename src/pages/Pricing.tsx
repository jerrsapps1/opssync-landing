import SEO from "../components/SEO";

export default function Pricing() {
  const plans = [
    { name: 'Single User', price: '$49/mo', perks: ['1 user', 'Core features'] },
    { name: '5 Users', price: '$199/mo', perks: ['Up to 5 users', 'Foundation CSV export'] },
    { name: '10 Users', price: '$349/mo', perks: ['Up to 10 users', 'AI insights'] },
    { name: 'Enterprise', price: 'Custom', perks: ['Unlimited users', 'SLA & Support'] },
  ];

  return (
    <section className="section">
      <SEO
        title="OpsSync.ai — Pricing"
        description="Simple pricing for growing crews. Start small, scale as your operations expand."
        path="/pricing"
      />
      <div className="container-page">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Simple pricing for growing crews</h2>
        <p className="text-neutral-600 mb-8">Start small, scale as your operations expand.</p>
        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="card p-6">
              <div className="font-semibold">{p.name}</div>
              <div className="text-3xl font-extrabold my-3">{p.price}</div>
              <ul className="text-sm space-y-1 mb-4">
                {p.perks.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <a href="https://app.opssync.ai/signup" className="btn-primary w-full text-center block">Choose plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
