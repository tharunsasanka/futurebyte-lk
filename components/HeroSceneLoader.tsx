"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
});

export default function HeroSceneLoader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine)"
    );

    const update = () => {
      setEnabled(media.matches);
    };

    update();

    media.addEventListener?.("change", update);

    return () => {
      media.removeEventListener?.("change", update);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div className="hero-render-canvas">
      <HeroScene />
    </div>
  );
}