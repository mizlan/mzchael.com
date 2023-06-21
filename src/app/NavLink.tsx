'use client'

import Image from "next/image"
import Link from "next/link"
import arrow from "public/arrow.svg"
import { useSelectedLayoutSegment } from 'next/navigation'

const NavLink = ({
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
      <div className="flex flex-row items-center gap-1">
        <Link target="_blank" className='text-rosePearl-700 dark:text-rosePearl-600' href={href}>{children}</Link>
        <Image src={arrow} alt="" className="w-1.5 h-1.5 -translate-y-1" />
      </div >
    )
  }

  return (
    <Link className={isActive ? `underline text-rosePearl-900 dark:text-rosePearl-300` : `text-rosePearl-700 dark:text-rosePearl-600`} href={href}>{children}</Link>
  )
}

export default NavLink
