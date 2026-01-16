"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollVideoProps {
    src: string;
    poster?: string;
    className?: string;
    muted?: boolean;
    loop?: boolean;
    playsInline?: boolean;
}

export default function ScrollVideo({
    src,
    poster,
    className = "",
    muted = true,
    loop = true,
    playsInline = true
}: ScrollVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Start playing when 10% is visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!videoRef.current) return;

        if (isVisible) {
            videoRef.current.play().catch(error => {
                // Autoplay might be blocked by browser if not muted or user hasn't interacted
                console.log("Video play failed:", error);
            });
        } else {
            videoRef.current.pause();
        }
    }, [isVisible]);

    return (
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            className={className}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
            preload="metadata"
        />
    );
}
