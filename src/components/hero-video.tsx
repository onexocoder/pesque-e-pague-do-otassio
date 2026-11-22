"use client";
import { useEffect, useRef, useState } from "react";
import { business } from "@/content/business";
export function HeroVideo() {
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const update = () => setEnabled(!media.matches && !connection?.saveData);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  if (!enabled || !business.heroVideo) return null;
  return (
    <>
      <video
        ref={ref}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={business.heroPoster}
        aria-hidden="true"
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {business.heroVideo.webm && (
          <source src={business.heroVideo.webm} type="video/webm" />
        )}
        {business.heroVideo.mp4 && (
          <source src={business.heroVideo.mp4} type="video/mp4" />
        )}
      </video>
      <button
        className="video-toggle"
        onClick={() => {
          if (ref.current?.paused) void ref.current.play();
          else ref.current?.pause();
        }}
      >
        {playing ? "Pausar vídeo" : "Reproduzir vídeo"}
      </button>
    </>
  );
}
