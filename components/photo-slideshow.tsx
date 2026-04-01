"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const SLIDESHOW_IMAGES = [
  "/slideshow-images/1.jpg",
  "/slideshow-images/2.jpg",
  "/slideshow-images/3.jpg",
  "/slideshow-images/4.jpg",
  "/slideshow-images/5.jpg",
];

const AUTOPLAY_INTERVAL = 4000;
const FADE_DURATION = 600;
const SWIPE_THRESHOLD = 10;

interface PhotoSlideshowProps {
  mode: "desktop" | "mobile";
}

export function PhotoSlideshow({ mode }: PhotoSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchLockedRef = useRef<"horizontal" | "vertical" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === activeIndex) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), FADE_DURATION);
    },
    [isTransitioning, activeIndex]
  );

  const goNext = useCallback(() => {
    const next =
      mode === "desktop"
        ? (activeIndex + 1) % SLIDESHOW_IMAGES.length
        : Math.min(activeIndex + 1, SLIDESHOW_IMAGES.length - 1);
    goToSlide(next);
  }, [activeIndex, goToSlide, mode]);

  const goPrev = useCallback(() => {
    const prev = Math.max(activeIndex - 1, 0);
    goToSlide(prev);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    if (mode !== "desktop") return;

    const startAutoplay = () => {
      autoplayRef.current = setInterval(goNext, AUTOPLAY_INTERVAL);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    };

    startAutoplay();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAutoplay();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [mode, goNext]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    touchLockedRef.current = null;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current || e.touches.length !== 1) return;

    const deltaX = e.touches[0].clientX - touchStartRef.current.x;
    const deltaY = e.touches[0].clientY - touchStartRef.current.y;

    if (!touchLockedRef.current) {
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);
      if (absDeltaX < SWIPE_THRESHOLD && absDeltaY < SWIPE_THRESHOLD) return;
      touchLockedRef.current =
        absDeltaX > absDeltaY ? "horizontal" : "vertical";
    }

    if (touchLockedRef.current === "horizontal") {
      e.preventDefault();
    }
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (
        !touchStartRef.current ||
        touchLockedRef.current !== "horizontal" ||
        e.changedTouches.length !== 1
      )
        return;

      const deltaX =
        e.changedTouches[0].clientX - touchStartRef.current.x;

      if (Math.abs(deltaX) > 40) {
        if (deltaX < 0) goNext();
        else goPrev();
      }

      touchStartRef.current = null;
      touchLockedRef.current = null;
    },
    [goNext, goPrev]
  );

  return (
    <div className={mode === "mobile" ? "flex flex-col items-center gap-3" : "absolute inset-0"}>
      <div
        ref={containerRef}
        className={`relative overflow-hidden ${
          mode === "mobile"
            ? "mx-4 rounded-[14px] h-[220px] w-[calc(100%-32px)]"
            : "absolute inset-0 rounded-2xl"
        }`}
        style={{ backgroundColor: "#132015" }}
        onTouchStart={mode === "mobile" ? handleTouchStart : undefined}
        onTouchMove={mode === "mobile" ? handleTouchMove : undefined}
        onTouchEnd={mode === "mobile" ? handleTouchEnd : undefined}
      >
        {SLIDESHOW_IMAGES.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity"
            style={{
              transitionDuration: `${FADE_DURATION}ms`,
              opacity: index === activeIndex ? 1 : 0,
            }}
          >
            <Image
              src={src}
              alt={`Courtyard Pickle facility photo ${index + 1}`}
              fill
              className="object-cover object-center"
              sizes={
                mode === "desktop"
                  ? "(min-width: 1024px) 50vw, 0vw"
                  : "(max-width: 768px) 100vw, 0vw"
              }
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {mode === "mobile" && (
        <div className="flex items-center justify-center gap-2">
          {SLIDESHOW_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to photo ${index + 1}`}
              className="flex items-center justify-center py-[19px] bg-transparent border-none cursor-pointer"
              onClick={() => goToSlide(index)}
            >
              <span
                className="block transition-all duration-300 rounded-[3px]"
                style={{
                  width: index === activeIndex ? 14 : 6,
                  height: 6,
                  backgroundColor:
                    index === activeIndex
                      ? "#ccff00"
                      : "rgba(255,255,255,0.2)",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
