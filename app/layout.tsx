import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const matter = localFont({
  src: [
    {
      path: '../public/Matter-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/Matter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-matter'
});

export const metadata: Metadata = {
  title: "S Dinesh Kumar - Portfolio",
  description: "Full-stack developer portfolio showcasing creative digital experiences",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`antialiased ${matter.variable}`}>
        {children}
      </body>
    </html>
  );
}
