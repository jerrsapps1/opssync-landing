import { Link, NavLink } from "react-router-dom";
import logoUrl from "/logo-opssync.svg";

export default function Footer() {
  return (
    <footer className="mt-16 border-t dark:border-slate-700">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-4">
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <img src={logoUrl} alt="OpsSync.ai" className="h-7 w-auto" />
            <span className="sr-only">OpsSync.ai</span>
          </Link>
          <p className="mt-3 text-sm muted">
            Operations & payroll in sync for construction and demolition teams.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Product</h4>
          <ul className="mt-3 space-y-2 muted">
            <li><NavLink to="/features" className="hover:text-slate-900 dark:hover:text-white">Features</NavLink></li>
            <li><NavLink to="/pricing" className="hover:text-slate-900 dark:hover:text-white">Pricing</NavLink></li>
            <li><NavLink to="/resources" className="hover:text-slate-900 dark:hover:text-white">Resources</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 muted">
            <li><NavLink to="/about" className="hover:text-slate-900 dark:hover:text-white">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-slate-900 dark:hover:text-white">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Get Started</h4>
          <p className="mt-3 text-sm muted">Start with your core crew—add users as you grow.</p>
          <Link to="/pricing" className="mt-4 inline-flex rounded-xl bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600 transition">
            View Pricing
          </Link>
        </div>
      </div>

      <div className="border-t dark:border-slate-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm muted md:flex-row">
          <p>© {new Date().getFullYear()} OpsSync.ai. All rights reserved.</p>
          <div className="flex gap-4">
            <NavLink to="/terms" className="hover:text-slate-700 dark:hover:text-slate-200">Terms</NavLink>
            <NavLink to="/privacy" className="hover:text-slate-700 dark:hover:text-slate-200">Privacy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
