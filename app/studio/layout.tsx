import Image from "next/image";

// Studio shell: a simple top bar that scrolls with the page (not fixed), then the Studio
// filling the rest of the viewport. No site header, footer or accessibility widget here.
const BAR_HEIGHT = "56px";

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`.studio-shell > div { height: calc(100dvh - ${BAR_HEIGHT}) !important; max-height: calc(100dvh - ${BAR_HEIGHT}) !important; }`}</style>
      <div
        style={{ height: BAR_HEIGHT, position: "static" }}
        className="flex items-center justify-between px-4 bg-[#1A1A2E] text-white"
      >
        <div className="flex items-center gap-3">
          <Image src="/Q We Rise Transparent logo.png" alt="Q We Rise Network" width={32} height={32} className="w-8 h-8 object-contain bg-white rounded-full p-0.5" />
          <span className="text-sm font-bold uppercase tracking-wide">Q We Rise · Content Studio</span>
        </div>
        <a href="/" className="text-sm font-semibold text-[#E0AAFF] hover:text-white transition-colors">← Back to website</a>
      </div>
      <div className="studio-shell">{children}</div>
    </>
  );
}
