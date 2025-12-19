import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SnowEffect from "@/components/SnowEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Take Profit Traders App - Pierwsza bezpłatna aplikacja dla traderów w Polsce",
  description: "Wszystkie najważniejsze narzędzia tradera w jednym miejscu. Kalendarz makroekonomiczny, sygnały, Trading Journal, FedWatch i więcej. Całkowicie bezpłatnie.",
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