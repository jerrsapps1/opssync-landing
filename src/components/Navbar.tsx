import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
        {/* Brand */}
        <Link to="/" className="shrink-0 text-lg font-bold tracking-tight">
          OpsSync<span className="text-sky-600">.ai</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-5 text-slate-600 md:flex">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition hover:text-slate-900 ${isActive ? "text-slate-900" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/pricing"
            className="rounded-xl bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-700"
          >
            Start
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="ml-auto inline-flex items-center rounded-lg border px-3 py-2 text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="i-menu h-4 w-4">☰</span>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-2 transition hover:bg-slate-50 ${
                    isActive ? "bg-slate-50 text-slate-900" : "text-slate-700"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-sky-600 px-4 py-2 text-center font-medium text-white transition hover:bg-sky-700"
            >
              Start
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
