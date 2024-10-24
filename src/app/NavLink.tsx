"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

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
        className="after:content-[''] after:block after:h-0.5 focus:text-black dark:focus:text-white dark:focus:text-current"
        asChild
      >
        <Link
          className={
            isActive
              ? `text-black after:w-full after:bg-indigo-500 dark:text-white dark:after:bg-white`
              : `text-black/40 after:w-0 after:bg-indigo-500 after:transition-[width] after:duration-500 hover:after:w-full focus:after:bg-indigo-500 dark:text-white/40 dark:after:bg-white/40 dark:focus:after:bg-white`
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
