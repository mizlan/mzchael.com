'use client'

import Image from "next/image"
import Link from "next/link"
import squareArrow from "public/square-arrow.svg"
import { useSelectedLayoutSegment } from 'next/navigation'

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  if (!href.startsWith("/")) {
    return (
      <div className="flex flex-row items-center gap-1">
        <Link target="_blank" className='text-rosePearl-700 dark:text-rosePearl-600' href={href}>{children}</Link>
        <Image src={squareArrow} alt="" className="w-2 h-2 -translate-y-1" />
      </div >
    )
  }
const slug = href.slice(1)
const segment = useSelectedLayoutSegment()
const isActive = slug === "" ? segment === null : slug === segment
console.log(slug, segment)
return (
  <Link className={isActive ? `underline text-rosePearl-900 dark:text-rosePearl-300` : `text-rosePearl-700 dark:text-rosePearl-600`} href={href}>{children}</Link>
)
}

export default NavLink
