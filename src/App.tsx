import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 muted">The page you’re looking for doesn’t exist.</p>
      <a href="/" className="mt-6 inline-flex rounded-xl bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600 transition">
        Go Home
      </a>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-8 bg-brand-gradient rounded-2xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
