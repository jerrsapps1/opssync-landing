export default function Privacy() {
  return (
    <section className="container-ss py-8 md:py-10 space-y-4">
      <h1>Privacy Policy</h1>
      <p className="text-sm muted">Last updated: {new Date().toISOString().slice(0,10)}</p>
      <div className="card p-4 space-y-3 text-sm muted">
        <p>We collect only the data needed to provide the service and improve reliability.</p>
        <p>We never sell your data. You can request export or deletion at any time.</p>
        <p>Contact support@opssync.ai for privacy inquiries.</p>
      </div>
    </section>
  );
}
