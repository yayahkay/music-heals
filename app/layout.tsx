import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";

// Body text font — stored in app/fonts, no internet needed
const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

// Heading font — used wherever the code says "font-serif"
const playfair = localFont({
  src: "./fonts/playfair-display-variable.woff2",
  variable: "--font-playfair",
  weight: "400 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.musichealsinitiative.org"),
  title: {
    default: "Music Heals Initiative Sierra Leone | Music for Healing & Empowerment",
    template: "%s | Music Heals Initiative Sierra Leone",
  },
  description:
    "Music Heals Initiative Sierra Leone (MHISL) uses music and the creative arts to support healing, education, empowerment and social inclusion for vulnerable young people in Freetown and across Sierra Leone.",
  openGraph: {
    siteName: "Music Heals Initiative Sierra Leone",
    locale: "en_GB",
    type: "website",
    images: ["/images/hero/hero-live-music-performance.jpg"],
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}