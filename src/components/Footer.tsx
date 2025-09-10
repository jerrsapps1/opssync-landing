import BrandMark from "@/components/BrandMark";

export default function Footer() {
  return (
    <footer className="border-t py-8 text-sm">
      <div className="container-ss grid gap-6 md:grid-cols-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <BrandMark size={16}/>
            <span className="text-sm font-semibold">OpsSync.ai</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Operations in sync for construction &amp; demo teams.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-[13px] font-semibold">Product</h3>
          <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
            <li><a href="/features"  className="hover:underline">Features</a></li>
            <li><a href="/pricing"   className="hover:underline">Pricing</a></li>
            <li><a href="/resources" className="hover:underline">Resources</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-[13px] font-semibold">Company</h3>
          <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
            <li><a href="/about"   className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/terms"   className="hover:underline">Terms</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-[13px] font-semibold">Get Started</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Start with your core crew—add users as you grow.</p>
          <a href="/pricing" className="inline-flex rounded-md bg-brand-500 px-3 py-1 text-[12px] font-medium text-white hover:bg-brand-600">
            View Pricing
          </a>
        </div>
      </div>

      <div className="container-ss mt-6 border-t pt-4 text-[11px] text-slate-500 dark:text-slate-400">
        © 2025 OpsSync.ai. All rights reserved.
      </div>
    </footer>
  );
}
