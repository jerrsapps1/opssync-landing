import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import logoUrl from "/logo-opssync.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Smaller link/button sizing
  const linkBase =
    "block px-2 py-1 rounded-md text-[12px] font-medium transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800/60 dark:hover:text-white";
  const active =
    "text-slate-900 bg-slate-100 dark:text-white dark:bg-slate-800/60";
  const inactive = "text-slate-600 dark:text-slate-300";

  return (
    <nav className="sticky top-0 z-40 border-b bg-white/75 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-1.5">
        {/* Brand: show ONLY the logo image (no duplicate text) */}
        <Link to="/" className="flex items-center">
          <img src={logoUrl} alt="OpsSync.ai" className="h-5 w-auto" />
          <span className="sr-only">OpsSync.ai</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <NavLink to="/features" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
            Features
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
            Pricing
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
            Resources
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
            Contact
          </NavLink>

          {/* Slightly smaller toggle via scale */}
          <div className="mx-1 scale-90">
            <ThemeToggle />
          </div>

          <Link
            to="/pricing"
            className="rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white transition hover:bg-brand-600"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t bg-white/85 px-3 py-2 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/85 md:hidden">
          <div className="grid gap-1">
            <NavLink to="/features" onClick={() => setOpen(false)} className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>Features</NavLink>
            <NavLink to="/pricing" onClick={() => setOpen(false)} className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>Pricing</NavLink>
            <NavLink to="/resources" onClick={() => setOpen(false)} className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>Resources</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>About</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>Contact</NavLink>

            <div className="mt-2 scale-90">
              <ThemeToggle />
            </div>

            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-brand-500 px-3 py-1 text-xs font-medium text-white transition hover:bg-brand-600"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
