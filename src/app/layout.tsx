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
      <body className={`${inter.className} ${process.env.NODE_ENV === 'development' ? 'debug-screens' : ''} flex flex-col min-h-screen`}>
        <Providers>
          <nav className="mt-5 mb-10 sm:items-center md:justify-end px-10 md:px-20 lg:px-32 flex flex-row justify-between items-start gap-12">
            <ul className="sm:items-end sm:flex-row sm:justify-end sm:gap-7 flex flex-col justify-between">
              <li className="mb-1.5 sm:mb-0"><NavLink href="/">home</NavLink></li>
              <li className="mb-1.5 sm:mb-0"><NavLink href="https://github.com/mizlan">github</NavLink></li>
              <li className="mb-1.5 sm:mb-0"><NavLink href="https://www.youtube.com/c/mzzzchael">youtube</NavLink></li>
              <li className="mb-1.5 sm:mb-0"><NavLink href="/this-site">this site</NavLink></li>
              <li className="mb-1.5 sm:mb-0"><NavLink href="https://blog.mzchael.com">blog</NavLink> </li>
            </ul>
            <ThemeToggle />
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  )
}
