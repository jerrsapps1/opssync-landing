import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import logoUrl from "/logo-opssync.svg";

const nav = [
  { to: "/features", label: "Features" },
  { to: "/pricing",  label: "Pricing"  },
  { to: "/about",    label: "About"    },
  { to: "/resources",label: "Resources"},
  { to: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoUrl} alt="OpsSync.ai" className="h-7 w-auto" />
          <span className="sr-only">OpsSync.ai</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-5 text-slate-700 dark:text-slate-300 md:flex">
          {nav.map(({to,label}) => (
            <NavLink
              key={to}
              to={to}
              className={({isActive}) =>
                `hover:text-slate-900 dark:hover:text-white transition ${isActive ? "text-slate-900 dark:text-white" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
          <DarkModeToggle />
          <Link
            to="/pricing"
            className="rounded-xl bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600 transition"
          >
            Start
          </Link>
        </nav>

        <button
          className="ml-auto inline-flex items-center rounded-lg border px-3 py-2 text-slate-700 dark:text-slate-200 md:hidden dark:border-slate-600"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >☰</button>
      </div>

      {open && (
        <div className="border-t dark:border-slate-700 bg-white dark:bg-slate-900 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {nav.map(({to,label}) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({isActive}) =>
                  `rounded-lg px-2 py-2 transition hover:bg-slate-50 dark:hover:bg-slate-800 ${
                    isActive ? "bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center justify-between">
              <DarkModeToggle />
              <Link
                to="/pricing"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600 transition"
              >
                Start
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
