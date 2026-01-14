// Q We Rise Network - Website Under Development
// Main landing page for the NGO's temporary site

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MaintenanceBadge from "./components/MaintenanceBadge";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
      <MaintenanceBadge />
    </div>
  );
}
