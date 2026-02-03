"use client";

/**
 * BackgroundGlare
 *
 * Creates an interactive glare effect on the topography background pattern.
 * The glare follows the user's cursor and is masked to only appear on the
 * topography SVG lines (not the gaps between them).
 *
 * Light mode: Fixed rainbow gradient with cursor-following spotlight.
 * Two layers - subtle everywhere + stronger on topography lines.
 *
 * Dark mode: Simple white radial glow that follows cursor.
 *
 * Note: Light mode disabled on Firefox due to lack of mask-composite support.
 */

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const _RAINBOW_BACKGROUND = `
  radial-gradient(circle 400px at 10% 20%, hsl(0, 100%, 55%), transparent),
  radial-gradient(circle 350px at 80% 10%, hsl(30, 100%, 55%), transparent),
  radial-gradient(circle 300px at 90% 50%, hsl(60, 100%, 55%), transparent),
  radial-gradient(circle 450px at 70% 80%, hsl(90, 100%, 55%), transparent),
  radial-gradient(circle 380px at 30% 90%, hsl(120, 100%, 55%), transparent),
  radial-gradient(circle 320px at 5% 60%, hsl(150, 100%, 55%), transparent),
  radial-gradient(circle 400px at 50% 40%, hsl(180, 100%, 55%), transparent),
  radial-gradient(circle 350px at 40% 15%, hsl(210, 100%, 55%), transparent),
  radial-gradient(circle 280px at 25% 45%, hsl(240, 100%, 55%), transparent),
  radial-gradient(circle 420px at 65% 25%, hsl(270, 100%, 55%), transparent),
  radial-gradient(circle 360px at 15% 75%, hsl(300, 100%, 55%), transparent),
  radial-gradient(circle 330px at 85% 70%, hsl(330, 100%, 55%), transparent),
  radial-gradient(circle 290px at 55% 85%, hsl(15, 100%, 55%), transparent),
  radial-gradient(circle 380px at 95% 30%, hsl(75, 100%, 55%), transparent),
  radial-gradient(circle 310px at 45% 5%, hsl(195, 100%, 55%), transparent),
  radial-gradient(circle 370px at 20% 55%, hsl(255, 100%, 55%), transparent)
`;

const _SPOTLIGHT = `radial-gradient(circle 300px at var(--mx, 0px) var(--my, 0px), black, transparent)`;

export default function BackgroundGlare() {
  const [mounted, setMounted] = useState(false);
  const [isFirefox, setIsFirefox] = useState(false);
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setIsFirefox(navigator.userAgent.toLowerCase().includes("firefox"));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      containerRef.current?.style.setProperty("--mx", `${e.clientX}px`);
      containerRef.current?.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  if (isDark) {
    return (
      <div
        ref={containerRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: `radial-gradient(circle 300px at var(--mx, 0px) var(--my, 0px), rgba(255, 255, 255, 0.03), transparent)`,
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

  if (isFirefox) return null;

  return null;

  // Light-mode glare (disabled)
  // return (
  //   <div ref={containerRef} style={{ display: "contents" }}>
  //     <div
  //       aria-hidden="true"
  //       style={{
  //         position: "fixed",
  //         inset: 0,
  //         pointerEvents: "none",
  //         zIndex: 0,
  //         opacity: 0.05,
  //         background: RAINBOW_BACKGROUND,
  //         maskImage: SPOTLIGHT,
  //         WebkitMaskImage: SPOTLIGHT,
  //         maskMode: "alpha",
  //       }}
  //     />
  //     <div
  //       aria-hidden="true"
  //       style={{
  //         position: "fixed",
  //         inset: 0,
  //         pointerEvents: "none",
  //         zIndex: 0,
  //         opacity: 0.02,
  //         background: RAINBOW_BACKGROUND,
  //         maskImage: `${SPOTLIGHT}, url(/topography-mask.svg)`,
  //         WebkitMaskImage: `${SPOTLIGHT}, url(/topography-mask.svg)`,
  //         maskSize: "100% 100%, 600px 600px",
  //         WebkitMaskSize: "100% 100%, 600px 600px",
  //         maskRepeat: "no-repeat, repeat",
  //         WebkitMaskRepeat: "no-repeat, repeat",
  //         maskPosition: "top left, top left",
  //         WebkitMaskPosition: "top left, top left",
  //         maskComposite: "intersect",
  //         WebkitMaskComposite: "source-in",
  //         maskMode: "alpha, alpha",
  //       }}
  //     />
  //   </div>
  // );
}
