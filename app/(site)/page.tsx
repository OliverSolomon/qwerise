// Q We Rise Network home page. Content is managed in Sanity Studio (Pages → Home).

import Hero from "../components/Hero";
import About from "../components/About";
import QueersGotTalent from "../components/QueersGotTalent";
import { fileUrl, getDoc } from "@/sanity/lib/content";

export default async function Home() {
  const [home, general] = await Promise.all([getDoc("homePage"), getDoc("generalSettings")]);
  const videoUrl = await fileUrl(home.qgt?.video);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero data={home.hero} />
        <About home={home} videoUrl={videoUrl} newsletter={general.newsletter} />
        <QueersGotTalent data={home.marquee} />
      </main>
    </div>
  );
}
