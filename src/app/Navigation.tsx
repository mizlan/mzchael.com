"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import ThemeToggle from "./ThemeToggle";
import NavItem from "./NavLink";

const Navigation = () => {
  return (
    <NavigationMenu.Root
      className={`mb-16 mt-1 flex flex-row items-center justify-between gap-12 font-medium uppercase tracking-wide md:mt-5 md:items-center`}
    >
      <NavigationMenu.List className="flex flex-row items-end justify-end gap-4 text-sm md:gap-7 md:text-base">
        <NavItem href="/">home</NavItem>
        <NavItem href="/about">about</NavItem>
        <NavItem href="/blog">blog</NavItem>
      </NavigationMenu.List>

      <ThemeToggle />
    </NavigationMenu.Root>
  );
};

export default Navigation;
