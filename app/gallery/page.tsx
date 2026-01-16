
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

const queersGotTalentImages = [
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
];

const galleryEventsImages = [
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
        <div className="min-h-screen bg-[#FFF5F1]">
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

                    {/* Queers Got Talent Section */}
                    <section className="mb-20">
                        <div className="mb-8">
                            <div className="inline-block px-4 py-1 bg-[#7B2CBF] text-white font-bold rounded-full text-sm mb-3">
                                QUEERS GOT TALENT
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
                                Celebrating Queer <span className="text-[#7B2CBF]">Brilliance</span>
                            </h2>
                            <p className="text-gray-600 mt-2 max-w-2xl">Photos from our annual talent showcase celebrating the creativity and expression of our community.</p>
                        </div>
                        <GalleryGrid images={queersGotTalentImages} />
                    </section>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-16">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#7B2CBF]/30 to-transparent"></div>
                        <div className="w-3 h-3 bg-[#7B2CBF] rounded-full"></div>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00B4A6]/30 to-transparent"></div>
                    </div>

                    {/* Gallery Events Section */}
                    <section>
                        <div className="mb-8">
                            <div className="inline-block px-4 py-1 bg-[#00B4A6] text-white font-bold rounded-full text-sm mb-3">
                                COMMUNITY EVENTS
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
                                Moments of <span className="text-[#00B4A6]">Connection</span>
                            </h2>
                            <p className="text-gray-600 mt-2 max-w-2xl">Snapshots from our community gatherings, wellness events, and advocacy activities.</p>
                        </div>
                        <GalleryGrid images={galleryEventsImages} />
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
