export default function Resources() {
  const faqs = [
    ['How do I invite new users?', 'Go to Settings → User Management → Invite.'],
    ['How do payroll exports work?', 'CSV sync with Foundation Bookkeeping.'],
    ['Can supervisors clock in offline?', 'Yes, auto-syncs when online.'],
    ['What’s in project insights?', 'Trendlines, anomaly alerts, equipment usage.'],
  ];
  const templates = [
    'Daily Project Log Template',
    'Payroll CSV Export Sample',
    'Equipment Assignment Sheet',
    'OSHA Jobsite Safety Checklist',
    'Employee Timecard QR Guide',
  ];

  return (
    <section className="section">
      <div className="container-page space-y-10">
        <header className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-bold">Resources</h2>
          <p className="text-neutral-600">Guides, FAQs, and templates to help you get the most out of OpsSync.ai.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="text-lg font-semibold mb-3">Help Center</div>
            <ul className="text-sm space-y-2">
              {faqs.map(([q, a]) => (
                <li key={q}><span className="font-medium">{q}</span> — {a}</li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <div className="text-lg font-semibold mb-3">Templates & Guides</div>
            <ul className="text-sm space-y-2">
              {templates.map((t) => (
                <li key={t}><a href="#" className="link">{t}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card p-6">
          <div className="text-lg font-semibold mb-2">Case Studies</div>
          <ul className="text-sm space-y-2">
            <li>Contractor A: From 10-hour payroll headaches to 30-minute exports</li>
            <li>Contractor B: Improved equipment utilization by 15%</li>
            <li>Contractor C: Supervisors adopted QR clock-ins in under a week</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
