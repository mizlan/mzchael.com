"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import ThemeToggle from "./ThemeToggle";
import NavItem from "./NavLink";
import { useMediaQuery } from "usehooks-ts";

const Navigation = () => {
  const matches = useMediaQuery("(min-width: 640px)");
  return (
    <NavigationMenu.Root
      className={`mt-1 md:mt-5 flex flex-row items-center justify-between gap-12 font-sans font-medium uppercase tracking-wide mb-16 md:items-center`}
    >
      <NavigationMenu.List className="flex flex-row items-end justify-end gap-4 md:gap-7 text-sm md:text-base">
        <NavItem href="/">home</NavItem>
        <NavItem href="/about">about</NavItem>
        {/* <NavItem href="/site">site</NavItem> */}
        <NavItem href="/blog">blog</NavItem>
      </NavigationMenu.List>

      <ThemeToggle />
      {/* {matches && <ThemeToggle />} */}
    </NavigationMenu.Root>
  );
};

export default Navigation;
