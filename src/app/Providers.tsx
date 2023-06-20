'use client'

import { Provider as BalancerProvider } from 'react-wrap-balancer'
import { ThemeProvider } from 'next-themes'

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <BalancerProvider>
        {children}
      </BalancerProvider>
    </ThemeProvider>
  )
}

export default Providers
