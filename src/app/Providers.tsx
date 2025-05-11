"use client";

import { Provider as TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "next-themes";
import { Provider as BalancerProvider } from "react-wrap-balancer";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class">
      <BalancerProvider>
        <TooltipProvider delayDuration={500}>{children}</TooltipProvider>
      </BalancerProvider>
    </ThemeProvider>
  );
};

export default Providers;
