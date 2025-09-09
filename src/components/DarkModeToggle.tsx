import { useEffect, useState } from "react";

function getInitial(): boolean {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export default function DarkModeToggle() {
  const [dark, setDark] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(v => !v)}
      className="rounded-full border px-3 py-1 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-800"
      aria-label="Toggle dark mode"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
