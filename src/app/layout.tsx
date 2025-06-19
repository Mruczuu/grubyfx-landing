import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAKE PROFIT - Trading Mentorship",
  description: "Dołącz do społeczności traderów i zacznij zarabiać na rynkach finansowych",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}