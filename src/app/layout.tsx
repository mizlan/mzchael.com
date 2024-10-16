import "./globals.css";
import localFont from "next/font/local";
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

const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Variable.woff2",
    },
    {
      path: "../../public/fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-generalsans",
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
  const font = inter.className;
  const twScreens =
    process.env.NODE_ENV === "development" ? "debug-screens" : "";
  return (
    <html
      lang="en"
      className={`font-sans ${jetbrainsMono.variable}`}
      style={{ scrollbarGutter: "stable" }}
      suppressHydrationWarning
    >
      <body
        className={`${font} ${twScreens} mx-auto flex min-h-screen max-w-[60ch] px-8 py-4 flex-col bg-yellow-600 text-white selection:bg-wanBlue-800/20 dark:bg-indigo-950 dark:text-day-50 dark:selection:bg-wanBlue-500/30`}
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
