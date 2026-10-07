import GalleryGrid from "../components/GalleryGrid";
import { getDoc } from "@/sanity/lib/content";
import { imgUrl } from "@/sanity/lib/image";
import { brand } from "../components/icons";

export default async function GalleryPage() {
    const page = await getDoc("galleryPage");
    return (
        <div className="min-h-screen bg-[#FFF5F1]">
            <main className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">
                            {page.header.title} <span className="font-script text-5xl sm:text-6xl text-[#7B2CBF]">{page.header.titleHighlight}</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            {page.header.intro}
                        </p>
                    </div>

                    {(page.sections ?? []).map((sec: { _key: string; badge: string; title: string; titleHighlight: string; description: string; color: string; images?: unknown[] }, idx: number) => {
                        const color = brand(sec.color);
                        return (
                            <div key={sec._key}>
                                {idx > 0 && (
                                    <div className="flex items-center gap-4 my-16">
                                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#7B2CBF]/30 to-transparent"></div>
                                        <div className="w-3 h-3 bg-[#7B2CBF] rounded-full"></div>
                                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00B4A6]/30 to-transparent"></div>
                                    </div>
                                )}
                                <section>
                                    <div className="mb-8">
                                        <div className="inline-block px-4 py-1 text-white font-bold rounded-full text-sm mb-3" style={{ backgroundColor: color }}>
                                            {sec.badge}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
                                            {sec.title} <span style={{ color }}>{sec.titleHighlight}</span>
                                        </h2>
                                        <p className="text-gray-600 mt-2 max-w-2xl">{sec.description}</p>
                                    </div>
                                    <GalleryGrid images={(sec.images ?? []).map((i) => imgUrl(i, 1400)).filter(Boolean)} />
                                </section>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
