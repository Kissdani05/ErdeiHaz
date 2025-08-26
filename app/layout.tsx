import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300","400","500","600","700"] });
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
      { url: "/hero.webp", width: 1200, height: 630, alt: "Mátrai A-frame vendégház" },
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
  <body className={`${cormorant.variable} ${inter.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LodgingBusiness',
              name: 'Kicsim – erdei vendégház a Mátrában',
              description:
                'Modern faház jakuzzival és infraszaunával az erdő szélén. Digitális detox, csönd, romantikus pihenés – 2 főre.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              telephone: '+36 30 123 4567',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'HU',
                addressRegion: 'Heves',
                addressLocality: 'Mátra',
              },
              image: [
                `${process.env.NEXT_PUBLIC_SITE_URL || ''}/hero.webp`,
              ],
              amenities: [
                'Jacuzzi',
                'Infra szauna',
                'Kandalló',
                'Parkoló',
                'Kávégép',
                'Terasz',
                'Grill/Bogrács',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
