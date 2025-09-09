import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-4">
        <div>
          <Link to="/" className="text-lg font-bold tracking-tight">
            OpsSync<span className="text-sky-600">.ai</span>
          </Link>
          <p className="mt-3 text-sm text-slate-600">
            Operations & payroll in sync for construction and demolition teams.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Product</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><NavLink to="/features" className="hover:text-slate-900">Features</NavLink></li>
            <li><NavLink to="/pricing" className="hover:text-slate-900">Pricing</NavLink></li>
            <li><NavLink to="/resources" className="hover:text-slate-900">Resources</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><NavLink to="/about" className="hover:text-slate-900">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-slate-900">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Get Started</h4>
          <p className="mt-3 text-sm text-slate-600">
            Start with your core crew—add users as you grow.
          </p>
          <Link
            to="/pricing"
            className="mt-4 inline-flex rounded-xl bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-700"
          >
            View Pricing
          </Link>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} OpsSync.ai. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
