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
          <nav className="flex flex-row justify-between items-start gap-12 mt-5 mb-10 md:items-center lg:justify-end px-10 md:px-20 lg:px-32">
            <ul className="flex flex-col justify-between md:items-end md:flex-row md:justify-end md:gap-7">
              <li className="mb-1.5 md:mb-0"><NavLink href="/">home</NavLink></li>
              <li className="mb-1.5 md:mb-0"><NavLink href="https://github.com/mizlan">github</NavLink></li>
              <li className="mb-1.5 md:mb-0"><NavLink href="https://www.youtube.com/c/mzzzchael">youtube</NavLink></li>
              <li className="mb-1.5 md:mb-0"><NavLink href="/this-site">this site</NavLink></li>
              <li className="mb-1.5 md:mb-0"><NavLink href="https://blog.mzchael.com">blog</NavLink></li>
            </ul>
            <ThemeToggle />
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  )
}
