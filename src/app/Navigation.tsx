"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import ThemeToggle from "./ThemeToggle";
import NavItem from "./NavLink";

const Navigation = () => {
  return (
    <NavigationMenu.Root
      className={`text-sm md:text-base mb-3 md:mb-10 mt-5 flex flex-row items-start justify-between gap-12 px-10 font-generalsans font-medium uppercase tracking-wide md:items-center md:px-20 lg:px-32 xl:justify-end`}
    >
      <NavigationMenu.List className="flex flex-row items-end justify-end gap-7">
        <NavItem href="/">home</NavItem>
        <NavItem href="/about">about</NavItem>
        <NavItem href="/site">site</NavItem>
        <NavItem href="/blog">blog</NavItem>
      </NavigationMenu.List>
      <ThemeToggle />
    </NavigationMenu.Root>
  );
};

export default Navigation;
