import "./globals.css";
import {
  Archivo,
  Geist_Mono,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Outfit,
} from "next/font/google";
import BackgroundGlare from "./BackgroundGlare";
import Navigation from "./Navigation";
import Providers from "./Providers";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsmono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
      className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} ${outfit.variable} ${geistMono.variable}`}
      style={{
        scrollbarGutter: "stable",
        // fontFamily: "-apple-system, BlinkMacSystemFont, var(--font-inter)",
      }}
      suppressHydrationWarning
    >
      <body
        className={`${twScreens} mx-auto flex min-h-screen max-w-[70ch] flex-col bg-white px-8 py-4 text-black selection:bg-wan-blue-300/40 dark:bg-sky-950 dark:text-white dark:selection:bg-slate-500/30 dark:selection:text-current font-archivo`}
        style={{}}
      >
        <Providers>
          <BackgroundGlare />
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
