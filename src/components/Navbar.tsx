import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoUrl from "/logo-opssync.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "block px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800/60 dark:hover:text-white";
  const active =
    "text-slate-900 bg-slate-100 dark:text-white dark:bg-slate-800/60";
  const inactive = "text-slate-600 dark:text-slate-300";

  return (
    <nav className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logoUrl} alt="OpsSync.ai" className="h-7 w-auto" />
          <div className="leading-tight">
            <div className="text-base font-extrabold tracking-tight">
              OpsSync <span className="text-brand-500">Board</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 -mt-0.5">
              Crew &amp; Equipment Board
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink
            to="/features"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Features
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Resources
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Contact
          </NavLink>

          <Link
            to="/pricing"
            className="ml-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-600"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t bg-white/80 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:hidden">
          <div className="grid gap-1">
            <NavLink
              to="/features"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/pricing"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/resources"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Resources
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Contact
            </NavLink>
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-600"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
