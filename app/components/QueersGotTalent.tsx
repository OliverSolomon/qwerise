import Image from 'next/image';
import Link from 'next/link';

const marqueeImages = [
    // Queers Got Talent
    "/queers-got-talent/5H0A0008.jpg",
    "/queers-got-talent/5H0A0192.jpg",
    "/queers-got-talent/5H0A0324.jpg",
    "/queers-got-talent/5H0A0516.jpg",
    "/queers-got-talent/5H0A0620.jpg",
    "/queers-got-talent/5H0A0748.jpg",
    "/queers-got-talent/DSC_0023.jpg",
    "/queers-got-talent/_MG_8154.jpg",

    // Gallery Events
    "/queer-gallery-events/CRMCD-14.jpg",
    "/queer-gallery-events/CRMCD-16.jpg",
    "/queer-gallery-events/IMG-20250224-WA0005(1).jpg",
    "/queer-gallery-events/IMG-20250224-WA0006.jpg",
    "/queer-gallery-events/IMG-20250224-WA0008(1).jpg",
    "/queer-gallery-events/IMG_3746.jpg",
    "/queer-gallery-events/IMG_3876.jpg",
    "/queer-gallery-events/IMG_4300.jpg",
    "/queer-gallery-events/IMG_4394.jpg",
    "/queer-gallery-events/IMG_4411.jpg",
    "/queer-gallery-events/IMG_4462.jpg",
    "/queer-gallery-events/IMG_4614 (1).jpg",
    "/queer-gallery-events/Scanned_20251014-2119-01.jpg",
    "/queer-gallery-events/Scanned_20251014-2119-02.jpg",
    "/queer-gallery-events/Scanned_20251014-2119-03.jpg",
    "/queer-gallery-events/WIN03013.jpg",
    "/queer-gallery-events/WIN03024.jpg",
    "/queer-gallery-events/WIN03058.jpg"
];

export default function QueersGotTalent() {
    return (
        <section className="bg-white py-16 overflow-hidden">
            {/* Marquee */}
            <div className="w-full overflow-hidden mb-12">
                <div className="animate-marquee hover:pause flex items-center">
                    {/* First Set */}
                    {marqueeImages.map((src, index) => (
                        <div key={`set1-${index}`} className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[260px] flex-shrink-0 mx-4 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
                            <Image
                                src={src}
                                alt="Queers Got Talent Event Photo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 300px, 400px"
                            />
                        </div>
                    ))}
                    {/* Duplicate Set for Seamless Loop */}
                    {marqueeImages.map((src, index) => (
                        <div key={`set2-${index}`} className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[260px] flex-shrink-0 mx-4 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
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
                    href="/gallery"
                    className="inline-block px-10 py-4 bg-[#7B2CBF] hover:bg-[#6A1BB0] text-white font-bold text-xl rounded-full transition-all hover:scale-105 shadow-xl"
                >
                    See Gallery
                </Link>
            </div>
        </section>
    );
}
