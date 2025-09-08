export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200">
      <div className="container-page py-8 text-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="font-semibold">© {new Date().getFullYear()} OpsSync.ai</div>
        <div className="text-neutral-600 flex gap-6">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/pricing">Pricing</a>
        </div>
      </div>
    </footer>
  );
}
