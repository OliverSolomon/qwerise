import Image from 'next/image';
import Link from 'next/link';
import type { Doc } from "@/sanity/lib/content";
import { imgUrl } from "@/sanity/lib/image";

export default function QueersGotTalent({ data }: { data: Doc }) {
    const images: string[] = (data.images ?? []).map((i: Doc) => imgUrl(i, 800)).filter(Boolean);
    // Rendered twice so the marquee loops seamlessly.
    const loop = [...images, ...images];

    return (
        <section className="bg-white py-16 overflow-hidden">
            {/* Marquee */}
            <div className="w-full overflow-hidden mb-12">
                <div className="animate-marquee hover:pause flex items-center">
                    {loop.map((src, index) => (
                        <div key={index} className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[260px] flex-shrink-0 mx-4 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
                            <Image
                                src={src}
                                alt="Queers Got Talent Event Photo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 300px, 400px"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Button */}
            <div className="text-center">
                <Link
                    href={data.buttonLink || "#"}
                    className="inline-block px-10 py-4 bg-[#7B2CBF] hover:bg-[#6A1BB0] text-white font-bold text-xl rounded-full transition-all hover:scale-105 shadow-xl"
                >
                    {data.buttonLabel}
                </Link>
            </div>
        </section>
    );
}
