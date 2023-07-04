'use client'

import { Provider as BalancerProvider } from 'react-wrap-balancer'
import { ThemeProvider } from 'next-themes'
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class">
      <BalancerProvider>
        <TooltipProvider delayDuration={500}>
          {children}
        </TooltipProvider>
      </BalancerProvider>
    </ThemeProvider>
  )
}

export default Providers
