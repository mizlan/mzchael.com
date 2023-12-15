'use client'

import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

const NavItem = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {

  const segment = useSelectedLayoutSegment()
  const slug = href.slice(1)
  const isActive = slug === "" ? segment === null : slug === segment

  if (!href.startsWith("/")) {
    return (
      <NavigationMenu.Item className="flex flex-row items-center gap-1 mb-1.5 md:mb-0">
        <NavigationMenu.Link className="focus:text-rosePearl-900 dark:focus:text-rosePearl-600" asChild>
          <Link target="_blank" className='text-rosePearl-700 dark:text-rosePearl-600' href={href}>{children}</Link>
        </NavigationMenu.Link>
        <Image src="/arrow.svg" alt="" width={14.1209} height={14.1271} className="w-1.5 h-1.5 -translate-y-1" />
      </NavigationMenu.Item>
    )
  }

  return (
    <NavigationMenu.Item className="flex flex-row items-center gap-1 mb-1.5 md:mb-0">
      <NavigationMenu.Link className="focus:text-rosePearl-900 dark:focus:text-rosePearl-300" asChild>
        <Link className={isActive ? `underline underline-offset-4 decoration-2 text-rosePearl-900 dark:text-rosePearl-300` : `text-rosePearl-700 dark:text-rosePearl-600`} href={href}>{children}</Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}

export default NavItem
