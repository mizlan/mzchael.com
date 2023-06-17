import Image from 'next/image'
import Providers from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'

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
            <li><a href="https://github.com/mizlan">github</a></li>
            <li><a href="https://www.youtube.com/c/mzzzchael">youtube</a></li>
            <li><a href="https://www.instagram.com/mzzzchael/">portfolio</a></li>
            <li><a href="https://www.instagram.com/mzzzchael/">this site</a></li>
            <li><a href="https://blog.mzchael.com">blog</a> </li>
            {/* <li><a href="https://www.instagram.com/mzzzchael/">instagram</a></li> */}
          </ul>
        </nav>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
