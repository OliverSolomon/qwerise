
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

const allImages = [
    // Queers Got Talent
    "/queers-got-talent/5H0A0008.jpg",
    "/queers-got-talent/5H0A0192.jpg",
    "/queers-got-talent/5H0A0324.jpg",
    "/queers-got-talent/5H0A0516.jpg",
    "/queers-got-talent/5H0A0620.jpg",
    "/queers-got-talent/5H0A0748.jpg",
    "/queers-got-talent/DSC_0023.jpg",
    "/queers-got-talent/_MG_8154.jpg",
    "/queers-got-talent/5H0A0198.jpg",
    "/queers-got-talent/5H0A0328.jpg",
    "/queers-got-talent/5H0A0336.jpg",
    "/queers-got-talent/5H0A0531.jpg",
    "/queers-got-talent/5H0A0534.jpg",
    "/queers-got-talent/5H0A0603.jpg",
    "/queers-got-talent/5H0A0678.jpg",
    "/queers-got-talent/5H0A0689.jpg",
    "/queers-got-talent/5H0A0752.jpg",
    "/queers-got-talent/5H0A0777.jpg",
    "/queers-got-talent/5H0A0805.jpg",
    "/queers-got-talent/5H0A0829.jpg",
    "/queers-got-talent/DSC_0070.jpg",
    "/queers-got-talent/DSC_0086 (1).jpg",
    "/queers-got-talent/DSC_0095 (1).jpg",
    "/queers-got-talent/DSC_0175.jpg",
    "/queers-got-talent/DSC_0267.jpg",
    "/queers-got-talent/DSC_0924.jpg",
    // Note: Skipping BMP files for now as next/image optimization might be tricky or file size too large for web.
    // "P1051621.MOV.02_13_37_44.Still002.bmp"
    // "P1051634.MOV.02_17_07_10.Still004.bmp"

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

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">
                            Our <span className="font-script text-5xl sm:text-6xl text-[#7B2CBF]">Gallery</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Visual stories of our community, events, and moments of joy.
                        </p>
                    </div>

                    <GalleryGrid images={allImages} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
