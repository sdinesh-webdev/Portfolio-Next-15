import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const matter = localFont({
  src: [
    {
      path: '../Public/Matter-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../Public/Matter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-matter',
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sdineshkumar.vercel.app'),
  title: "S Dinesh Kumar - Full-stack Developer",
  description: "Explore the portfolio of S Dinesh Kumar, a creative and full-stack developer specializing in crafting exceptional digital experiences.",
  keywords: "sdinesh, sdineshkumar, dinesh, dineshwebdev, Full-stack developer, Web development, uiux, S Dinesh Kumar, Portfolio",
  authors: [{ name: "S Dinesh Kumar" }],
  creator: "S Dinesh Kumar",
  verification: {
    google: 'DDVzs-nsZGPqw3CWoqfxeiG4PnI29qWgKV61YTVkmks',
  },
  openGraph: {
    type: 'website',
    title: "S Dinesh Kumar - Full-stack Developer",
    description: "Discover the work of S Dinesh Kumar, a full-stack developer with a passion for creating dynamic and modern engaging web applications",
    url: 'https://sdineshkumar.vercel.app',
    siteName: "S Dinesh Kumar Portfolio",
    images: [{
      url: 'https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/open_graph-64ddAIk8bmnSyjbhHqO4NbV6jh7oG1.webp',
      width: 1200,
      height: 630,
      alt: 'S Dinesh Kumar Portfolio - Full-stack Developer',
      type: 'image/webp',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "S Dinesh Kumar - Full-stack Developer",
    description: "Explore my portfolio, showcasing innovative Modern projects and creative digital solutions.",
    images: [{
      url: 'https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/open_graph-64ddAIk8bmnSyjbhHqO4NbV6jh7oG1.webp',
      width: 1200,
      height: 630,
      alt: 'S Dinesh Kumar Portfolio - Full-stack Developer',
      type: 'image/webp',
    }],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/webp',
        sizes: '32x32'
      },
      {
        url: '/favicon.ico',
        type: 'image/webp',
        sizes: '16x16'
      }
    ],
    shortcut: '/icon.webp',
    apple: [
      {
        url: '/icon.webp',
        type: 'image/webp',
        sizes: '180x180'
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.ico',
      }
    ]
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
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
