import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Twoja droga do sukcesu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-dark text-white`}>
        <main className="min-h-screen bg-dark text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
