import type { Metadata } from "next";
import SplashGate from "@/components/SplashGate";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flashy | Smart Flashcards",
  description: "Smart flashcards for smarter learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SplashGate>{children}</SplashGate>
      </body>
    </html>
  );
}
