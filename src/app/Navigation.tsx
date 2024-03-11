"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import ThemeToggle from "./ThemeToggle";
import NavItem from "./NavLink";

const Navigation = () => {
  return (
    <NavigationMenu.Root
      className={`uppercase font-generalsans font-medium text-md tracking-wide flex flex-row justify-between items-start gap-12 mt-5 mb-10 md:items-center xl:justify-end px-10 md:px-20 lg:px-32`}
    >
      <NavigationMenu.List className="flex items-end flex-row justify-end gap-7">
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
