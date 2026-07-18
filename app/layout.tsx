import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/FloatingButtons/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HECS — India's Leading Environmental Solutions Provider",
  description: "HECS Official Website",
  icons: {
    icon: "/images/logo-local.png",
    shortcut: "/images/logo-local.png",
    apple: "/images/logo-local.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />

        <main>{children}</main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
