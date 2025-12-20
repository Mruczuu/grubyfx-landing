import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SnowEffect from "@/components/SnowEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAKE PROFIT GRUBYFX - Bezpłatna społeczność dla traderów",
  description: "Dołącz do 1000+ traderów! Sygnały, analizy, społeczność - wszystko za darmo. Kalendarz makroekonomiczny, Trading Journal, FedWatch i więcej.",
  openGraph: {
    title: "TAKE PROFIT GRUBYFX - Dołącz za darmo!",
    description: "Dołącz do 1000+ traderów, którzy już zarabiają z nami każdego dnia! Sygnały, analizy, społeczność - wszystko za darmo.",
    url: "https://grubyfx.pl",
    siteName: "TAKE PROFIT GRUBYFX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TAKE PROFIT GRUBYFX",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAKE PROFIT GRUBYFX - Dołącz za darmo!",
    description: "Dołącz do 1000+ traderów! Sygnały, analizy, społeczność - wszystko za darmo.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <SnowEffect />
        {children}
        <Footer />
      </body>
    </html>
  );
}