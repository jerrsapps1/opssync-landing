export default function Terms() {
  return (
    <section className="container-ss py-8 md:py-10 space-y-4">
      <h1>Terms of Service</h1>
      <p className="text-sm muted">Last updated: {new Date().toISOString().slice(0,10)}</p>
      <div className="card p-4 space-y-3 text-sm muted">
        <p>By using OpsSync.ai you agree to these terms. If you do not agree, do not use the service.</p>
        <p>We may change these terms; continued use means acceptance of the changes.</p>
        <p>Contact support@opssync.ai with questions.</p>
      </div>
    </section>
  );
}
