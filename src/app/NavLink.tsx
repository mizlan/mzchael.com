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
    <NavigationMenu.Item className="mb-1.5 flex flex-row items-center gap-1 md:mb-0">
      <NavigationMenu.Link
        className="after:block after:h-0.5 focus:text-rosePearl-900 dark:focus:text-rosePearl-300"
        asChild
      >
        <Link
          className={
            isActive
              ? `text-rosePearl-900 after:w-full after:bg-rosePearl-900 dark:text-rosePearl-300 dark:after:bg-rosePearl-300`
              : `text-rosePearl-700 after:w-0 after:bg-rosePearl-700 after:transition-[width] after:duration-500 hover:after:w-full focus:after:bg-rosePearl-900 dark:text-rosePearl-600 dark:after:bg-rosePearl-600 dark:focus:after:bg-rosePearl-300`
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
