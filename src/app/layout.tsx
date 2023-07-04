import './globals.css'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navigation from './Navigation'

const inter = Inter({ style: ['normal'], subsets: ['latin'] })

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


export const metadata = {
  title: 'mzchael.com',
  description: 'michael\'s homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const font = inter.className
  const twScreens = process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
  return (
    <html lang="en" style={{ scrollbarGutter: 'stable' }} suppressHydrationWarning>
      <body
        className={`${font} ${twScreens} flex flex-col min-h-screen text-night-700 bg-day-50 dark:text-day-50 dark:bg-theme-dark`}
        style={{}}
      >
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
