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
        className="focus:text-rosePearl-900 dark:focus:text-rosePearl-300"
        asChild
      >
        <Link
          className={
            isActive
              ? `text-rosePearl-900 underline decoration-2 underline-offset-4 dark:text-rosePearl-300`
              : `text-rosePearl-700 dark:text-rosePearl-600`
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
