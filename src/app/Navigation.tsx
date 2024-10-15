"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import ThemeToggle from "./ThemeToggle";
import NavItem from "./NavLink";
import { useMediaQuery } from "usehooks-ts";

const Navigation = () => {
  const matches = useMediaQuery("(min-width: 640px)");
  return (
    <NavigationMenu.Root
      className={`mb-3 mt-5 flex flex-row items-start justify-between gap-12 px-10 font-generalsans text-sm font-medium uppercase tracking-wide md:mb-10 md:items-center md:px-20 md:text-base lg:px-32 xl:justify-end`}
    >
      <NavigationMenu.List className="flex flex-row items-end justify-end gap-7">
        <NavItem href="/">home</NavItem>
        <NavItem href="/about">about</NavItem>
        <NavItem href="/site">site</NavItem>
        <NavItem href="/blog">blog</NavItem>
      </NavigationMenu.List>

      {matches && <ThemeToggle />}
    </NavigationMenu.Root>
  );
};

export default Navigation;
