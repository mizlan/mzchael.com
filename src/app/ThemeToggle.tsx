"use client";

import { Sun } from "@phosphor-icons/react/dist/ssr/Sun";
import { SunHorizon } from "@phosphor-icons/react/dist/ssr/SunHorizon";
import { MoonStars } from "@phosphor-icons/react/dist/ssr/MoonStars";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface ThemeOptionProps {
  position: "first" | "middle" | "last";
  value: string;
  ariaLabel: string;
  toolTip: string;
  icon(cls: string): React.ReactNode;
}

const ThemeOption = ({
  position,
  value,
  ariaLabel,
  toolTip,
  icon,
}: ThemeOptionProps) => {
  let rounding = "";
  let spacing = "ml-[1px]";
  switch (position) {
    case "first":
      rounding = "rounded-l-lg";
      spacing = "";
      break;
    case "last":
      rounding = "rounded-r-lg";
      break;
  }

  const twItemClassName = `
    bg-stone-200/20
    data-[state=on]:bg-stone-200/50
    dark:bg-white/5
    dark:data-[state=on]:bg-white/10
  `.trim();
  const twIconClassName = `
    fill-stone-300
    group-data-[state=on]:fill-stone-400
    dark:fill-white/40
    dark:group-data-[state=on]:fill-white
  `.trim();

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        {/* span is a hack: https://github.com/radix-ui/primitives/discussions/560 */}
        <span>
          <ToggleGroup.Item
            className={`group ${rounding} ${spacing} flex h-7 w-8 items-center justify-center ${twItemClassName}`}
            value={value}
            aria-label={ariaLabel}
          >
            {icon(twIconClassName)}
          </ToggleGroup.Item>
        </span>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className={`rounded-md bg-white/10 px-2 py-1 text-xs text-white/70 dark:text-white/70`}
          side="bottom"
          sideOffset={5}
        >
          {toolTip}
          <Tooltip.Arrow className="fill-white/10" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ToggleGroup.Root
      className="inline-flex rounded-[0.55rem] p-[0.05rem] dark:bg-white/5"
      type="single"
      disabled={!mounted}
      value={!mounted ? undefined : theme}
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
      aria-label="Color theme"
    >
      <ThemeOption
        position="first"
        value="system"
        ariaLabel="System theme"
        toolTip="system theme"
        icon={(cls) => (
          <SunHorizon
            weight={mounted && theme === "system" ? "fill" : "light"}
            className={cls}
          />
        )}
      />
      <ThemeOption
        position="middle"
        value="light"
        ariaLabel="Light theme"
        toolTip="light theme"
        icon={(cls) => (
          <Sun
            weight={mounted && theme === "light" ? "fill" : "light"}
            className={cls}
          />
        )}
      />
      <ThemeOption
        position="last"
        value="dark"
        ariaLabel="Dark theme"
        toolTip="dark theme"
        icon={(cls) => (
          <MoonStars
            weight={mounted && theme === "dark" ? "fill" : "light"}
            className={cls}
          />
        )}
      />
    </ToggleGroup.Root>
  );
};

export default ThemeToggle;
