// Q We Rise Network - Website Under Development
// Main landing page for the NGO's temporary site

import Hero from "./components/Hero";
import About from "./components/About";
import QueersGotTalent from "./components/QueersGotTalent";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        {/* <Contact /> */}
        <QueersGotTalent />
      </main>
    </div>
  );
}
