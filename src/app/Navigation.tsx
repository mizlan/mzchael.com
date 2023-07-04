'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import ThemeToggle from './ThemeToggle'
import NavItem from './NavLink'
import localFont from 'next/font/local'

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2'
    },
    {
      path: '../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-VariableItalic.woff2',
      style: 'italic'
    }
  ]
})


const Navigation = () => {
  return (
    <NavigationMenu.Root className={`uppercase ${satoshi.className} font-medium text-md tracking-wide flex flex-row justify-between items-start gap-12 mt-5 mb-10 md:items-center lg:justify-end px-10 md:px-20 lg:px-32`}>
      <NavigationMenu.List className="flex flex-col justify-between md:items-end md:flex-row md:justify-end md:gap-7">
        <NavItem href="/">home</NavItem>
        <NavItem href="/about-me">about me</NavItem>
        <NavItem href="https://github.com/mizlan">github</NavItem>
        <NavItem href="https://www.youtube.com/c/mzzzchael">youtube</NavItem>
        <NavItem href="/this-site">this site</NavItem>
        <NavItem href="/blog">blog</NavItem>
      </NavigationMenu.List>
      <ThemeToggle />
    </NavigationMenu.Root>
  )
}

export default Navigation
