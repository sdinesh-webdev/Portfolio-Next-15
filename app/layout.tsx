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
  title: "SDineshKumar | Full-stack Developer Portfolio | Official Website",
  description: "Official portfolio of SDineshKumar - Full-stack Developer from India. Specializing in React, Next.js, and modern web development. View my projects and professional work.",
  keywords: "sdineshkumar, sdinesh kumar, dinesh kumar s, dinesh kumar portfolio, sdineshkumar developer, sdineshkumar portfolio, sdineshkumar website, full stack developer india",
  authors: [{ name: "S Dinesh Kumar" }],
  creator: "S Dinesh Kumar",
  verification: {
    google: 'DDVzs-nsZGPqw3CWoqfxeiG4PnI29qWgKV61YTVkmks',
  },
  openGraph: {
    type: 'website',
    title: "S Dinesh Kumar | Full-stack Developer & UI/UX Designer",
    description: "Portfolio of S Dinesh Kumar - Specialized in React, Next.js, and modern full-stack development. Explore my projects and professional work in web development.",
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
  alternates: {
    canonical: 'https://sdineshkumar.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-site-verification': 'DDVzs-nsZGPqw3CWoqfxeiG4PnI29qWgKV61YTVkmks',
    structured_data: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'S Dinesh Kumar',
      url: 'https://sdineshkumar.vercel.app',
      sameAs: [
        'https://github.com/sdinesh-kumar',
        'https://linkedin.com/in/sdineshkumar',
      ],
      jobTitle: 'Full-stack Developer',
      image: 'https://sdineshkumar.vercel.app/profile.webp',
      description: 'Full-stack Developer specializing in React and Next.js',
    })
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
