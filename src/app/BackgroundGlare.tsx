"use client";

/**
 * BackgroundGlare
 *
 * Creates an interactive glare effect on the topography background pattern.
 * The glare follows the user's cursor and is masked to only appear on the
 * topography SVG lines (not the gaps between them).
 *
 * Dark mode only: Simple white radial glow that follows cursor.
 * On touch devices: Static glow in bottom-right corner.
 */

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function BackgroundGlare() {
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      containerRef.current?.style.setProperty("--mx", `${e.clientX}px`);
      containerRef.current?.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouchDevice]);

  if (!mounted || resolvedTheme !== "dark") return null;

  const glarePosition = isTouchDevice
    ? "calc(100% + 100px) calc(100% + 100px)"
    : "var(--mx, 0px) var(--my, 0px)";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `radial-gradient(circle 300px at ${glarePosition}, rgba(255, 255, 255, 0.03), transparent)`,
        maskImage: "url(/topography-mask.svg)",
        WebkitMaskImage: "url(/topography-mask.svg)",
        maskSize: "600px 600px",
        WebkitMaskSize: "600px 600px",
        maskRepeat: "repeat",
        WebkitMaskRepeat: "repeat",
        maskPosition: "top left",
        WebkitMaskPosition: "top left",
        maskMode: "alpha",
      }}
    />
  );
}
