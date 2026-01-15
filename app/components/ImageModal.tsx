'use client';

import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useCallback } from 'react';

interface ImageModalProps {
    isOpen: boolean;
    imageSrc: string;
    altText: string;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}

export default function ImageModal({
    isOpen,
    imageSrc,
    altText,
    onClose,
    onNext,
    onPrev,
    hasNext,
    hasPrev,
}: ImageModalProps) {
    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;

        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight' && hasNext) onNext();
        if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors z-10"
                aria-label="Close modal"
            >
                <X size={32} />
            </button>

            {/* Navigation Buttons */}
            {hasPrev && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors z-20"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={32} className="sm:w-10 sm:h-10" />
                </button>
            )}

            {hasNext && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors z-20"
                    aria-label="Next image"
                >
                    <ChevronRight size={32} className="sm:w-10 sm:h-10" />
                </button>
            )}

            {/* Main Image Container */}
            <div
                className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full h-full">
                    <Image
                        src={imageSrc}
                        alt={altText}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        priority
                    />
                </div>
            </div>

            {/* Bottom Text/Counter (Optional) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm font-medium tracking-wide bg-black/40 px-4 py-2 rounded-full">
                Use arrow keys to navigate
            </div>
        </div>
    );
}
