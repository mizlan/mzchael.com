import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Providers from "./Providers";
import Navigation from "./Navigation";

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsmono",
});

export const metadata = {
  title: "mzchael.com",
  description: "michael's homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const twScreens =
    process.env.NODE_ENV === "development" ? "debug-screens" : "";
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      style={{
        scrollbarGutter: "stable",
        fontFamily: "-apple-system, BlinkMacSystemFont, var(--font-inter)",
      }}
      suppressHydrationWarning
    >
      <body
        className={`${twScreens} mx-auto flex min-h-screen max-w-[60ch] flex-col bg-yellow-600 px-8 py-4 text-white selection:bg-slate-500/30 dark:bg-sky-950`}
        style={{}}
      >
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
