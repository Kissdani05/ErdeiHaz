import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Kicsim – erdei vendégház a Mátrában | páros elvonulás",
  description:
    "Modern faház jakuzzival és infraszaunával az erdő szélén. Digitális detox, csönd, romantikus pihenés – 2 főre.",
  openGraph: {
    title: "Kicsim – erdei vendégház a Mátrában",
    description:
      "Modern faház jakuzzival és infraszaunával az erdő szélén. Digitális detox, csönd, romantikus pihenés – 2 főre.",
    type: "website",
    locale: "hu_HU",
    images: [
      { url: "/kepek/Dani Honlap Apr 16 2025.jpg", width: 1200, height: 630, alt: "Mátrai A-frame vendégház" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F1E6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
