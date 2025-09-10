import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import BrandMark from "@/components/BrandMark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkBase =
    "block px-2.5 py-1 rounded-md text-[13px] font-medium transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800/60 dark:hover:text-white";
  const active = "text-slate-900 bg-slate-100 dark:text-white dark:bg-slate-800/60";
  const inactive = "text-slate-600 dark:text-slate-300";

  return (
    <nav className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
      <div className="container-ss flex items-center justify-between py-2">
        <Link to="/" className="flex items-center gap-2">
          <BrandMark size={18} />
          <span className="text-sm font-extrabold tracking-tight">OpsSync.ai</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <NavLink to="/features"  className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>Features</NavLink>
          <NavLink to="/pricing"   className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>Pricing</NavLink>
          <NavLink to="/resources" className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>Resources</NavLink>
          <NavLink to="/about"     className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>About</NavLink>
          <NavLink to="/contact"   className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>Contact</NavLink>

          <div className="mx-1 scale-90"><ThemeToggle/></div>

          <Link to="/pricing" className="rounded-md bg-brand-500 px-3 py-1 text-[12px] font-medium text-white transition hover:bg-brand-600">
            Get started
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t bg-white/90 py-2 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90 md:hidden">
          <div className="container-ss grid gap-1">
            <NavLink to="/features"  onClick={()=>setOpen(false)} className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>Features</NavLink>
            <NavLink to="/pricing"   onClick={()=>setOpen(false)} className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>Pricing</NavLink>
            <NavLink to="/resources" onClick={()=>setOpen(false)} className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>Resources</NavLink>
            <NavLink to="/about"     onClick={()=>setOpen(false)} className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>About</NavLink>
            <NavLink to="/contact"   onClick={()=>setOpen(false)} className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>Contact</NavLink>

            <div className="mt-1 scale-90"><ThemeToggle/></div>

            <Link to="/pricing" onClick={()=>setOpen(false)} className="mt-1 rounded-md bg-brand-500 px-3 py-1 text-[12px] font-medium text-white transition hover:bg-brand-600">
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
