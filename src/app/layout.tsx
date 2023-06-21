import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import ThemeToggle from './ThemeToggle'
import NavLink from './NavLink'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'mzchael.com',
  description: 'michael\'s homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Providers>
          <nav>
            <ul>
              <li><NavLink href="/">home</NavLink></li>
              <li><NavLink href="https://github.com/mizlan">github</NavLink></li>
              <li><NavLink href="https://www.youtube.com/c/mzzzchael">youtube</NavLink></li>
              <li><NavLink href="/this-site">this site</NavLink></li>
              <li><NavLink href="https://blog.mzchael.com">blog</NavLink> </li>
              <ThemeToggle />
            </ul>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  )
}
