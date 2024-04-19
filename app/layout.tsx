import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://johnsyslo.com"),
  title: "John Syslo",
  description: "John Syslo is a high school student learning the world of Computer Science and how to create applications for the web.",
  keywords: [
    "john syslo",
    "computer science",
    "javascript",
    "nextjs",
    "react"
  ],
  openGraph: {
    title: "John Syslo",
    description: "John Syslo is a high school student learning the world of Computer Science and how to create applications for the web.",
    url: "https://johnsyslo.com",
    siteName: "John Syslo",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
