import SEO from "../components/SEO";

export default function About() {
  return (
    <section className="section">
      <SEO
        title="OpsSync.ai — About"
        description="Built for field ops reality. We streamline construction & demolition operations."
        path="/about"
      />
      <div className="container-page prose prose-neutral max-w-none">
        <h2>Built for field ops reality</h2>
        <p>OpsSync.ai streamlines construction & demolition operations with modern software that fits how crews actually work.</p>
        <h3>Team</h3>
        <p>Placeholder bios for leadership focused on safety, operations, and product.</p>
        <h3>Careers</h3>
        <p>We hire operators and builders. Sample roles: Project Specialist, Customer Success Manager.</p>
      </div>
    </section>
  );
}
