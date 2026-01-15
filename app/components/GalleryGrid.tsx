'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

interface GalleryGridProps {
    images: string[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openModal = (index: number) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);

    const showNext = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0)); // Loop to start
    };

    const showPrev = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1)); // Loop to end
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-100 aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {/* Optional icon on hover */}
                            {/* <span className="text-white bg-black/30 p-2 rounded-full">🔍</span> */}
                        </div>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <ImageModal
                    isOpen={selectedIndex !== null}
                    imageSrc={images[selectedIndex]}
                    altText={`Gallery image ${selectedIndex + 1}`}
                    onClose={closeModal}
                    onNext={showNext}
                    onPrev={showPrev}
                    hasNext={true} // Since we loop
                    hasPrev={true} // Since we loop
                />
            )}
        </>
    );
}
