import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="container-page h-16 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-extrabold">
          <span className="text-gradient">OpsSync.ai</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/features" className="hover:opacity-80">Features</NavLink>
          <NavLink to="/pricing" className="hover:opacity-80">Pricing</NavLink>
          <NavLink to="/resources" className="hover:opacity-80">Resources</NavLink>
          <NavLink to="/about" className="hover:opacity-80">About</NavLink>
          <NavLink to="/contact" className="hover:opacity-80">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://app.opssync.ai/login" className="text-sm hover:opacity-80">Log in</a>
          <a href="https://app.opssync.ai/signup" className="btn-primary text-sm">Get Started</a>
        </div>
      </div>
    </header>
  );
}
