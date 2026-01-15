// Hero section with main message and call-to-action
// Features the organization's mission and development status

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/carousel/carousel-1.jpg",
    "/carousel/carousel-2.jpg",
    "/carousel/carousel-3.jpg",
    "/carousel/carousel-4.jpg",
    "/carousel/carousel-5.jpg",
    "/carousel/carousel-6.jpg",
    "/carousel/carousel-7.bmp",
    "/carousel/carousel-8.jpg",
    "/carousel/carousel-9.jpg",
    "/carousel/carousel-10.jpg",
    "/carousel/carousel-11.jpg",
    "/carousel/carousel-12.jpg",
    "/carousel/carousel-13.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative bg-[#FF6B35] text-white py-16 sm:py-24 lg:py-32 overflow-hidden min-h-[600px]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="relative z-20">
            {/* Main heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              You deserve a <span className="font-script text-5xl sm:text-7xl lg:text-8xl block mt-2">welcoming, loving world.</span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-xl text-white/95 mb-8 max-w-2xl leading-relaxed">
              Empowering ITGNC and LBQ individuals through rights-based advocacy, inclusive SRHR education, economic justice, and creative expression that centers healing and communal care.
            </p>
          </div>

          {/* Right side - Carousel */}
          <div className="relative h-[350px] sm:h-[500px] lg:h-[600px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
              {/* Carousel images */}
              <div className="relative w-full h-full">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <Image
                      src={src}
                      alt={`Queer artwork ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
