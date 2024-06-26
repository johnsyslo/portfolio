import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://johnsyslo.com'),
  title: 'John Syslo',
  description:
    'John Syslo is a high school student learning the world of Computer Science and how to create applications for the web.',
  keywords: ['john syslo', 'computer science', 'javascript', 'nextjs', 'react'],
  openGraph: {
    title: 'John Syslo',
    description:
      'John Syslo is a high school student learning the world of Computer Science and how to create applications for the web.',
    url: 'https://johnsyslo.com',
    siteName: 'John Syslo',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
