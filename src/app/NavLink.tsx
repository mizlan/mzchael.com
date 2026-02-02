"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const segment = useSelectedLayoutSegment();
  const slug = href.slice(1);
  const isActive = slug === "" ? segment === null : slug === segment;

  return (
    <NavigationMenu.Item className="flex flex-row items-center gap-1">
      <NavigationMenu.Link
        className="after:block after:h-0.5 after:content-[''] after:-mt-[0.02em] focus:text-black dark:focus:text-current dark:focus:text-white"
        asChild
      >
        <Link
          className={
            isActive
              ? "text-black after:w-full after:bg-amber-500 dark:text-white dark:after:bg-white"
              : "text-slate-400/70 after:w-0 after:bg-current after:transition-[width] after:duration-500 hover:after:w-full focus:after:bg-amber-500 dark:text-white/40 dark:after:bg-white/40 dark:focus:after:bg-white"
          }
          href={href}
        >
          {children}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

export default NavItem;
