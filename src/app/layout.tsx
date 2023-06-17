import Image from 'next/image'
import Providers from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

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
    <html lang="en">
      <body className={"${inter.className} min-h-screen flex flex-col"}>
        <nav>
          <ul>
            <li><Link href="/">home</Link></li>
            <li><a href="https://github.com/mizlan">github</a></li>
            <li><a href="https://www.youtube.com/c/mzzzchael">youtube</a></li>
            <li><Link href="/this-site">this site</Link></li>
            <li><a href="https://blog.mzchael.com">blog</a> </li>
          </ul>
        </nav>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
