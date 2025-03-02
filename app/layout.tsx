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
  title: "SDineshKumar | React & Next.js Developer | MERN Stack Expert | Frontend Specialist",
  description: "Experienced Full-stack Developer specializing in MERN Stack, React.js, Next.js 14, TypeScript, and modern web development. Building responsive, scalable web applications with modern tech stack. Expertise in Frontend development and UI/UX design.",
  keywords: "sdineshkumar, sdinesh, dineshkumar, full stack web developer, react developer india, nextjs developer, mern stack developer,react developer CG, mern developer chhatisgarh, react developer raipur, webdeveloper raipur, mern developer raipur CG, frontend developer chennai, javascript engineer, typescript expert, react.js programmer, next.js 14 applications, web application developer, responsive web design, modern javascript development, ui ux engineer india, node.js backend developer, express.js developer, mongodb expert, tailwind css developer, frontend specialist india, react native developer, progressive web apps, web performance optimization, modern web development 2024, frontend architecture, react hooks expert, server side rendering, jamstack developer",
  authors: [{ name: "S Dinesh Kumar" }],
  creator: "S Dinesh Kumar",
  verification: {
    google: 'DDVzs-nsZGPqw3CWoqfxeiG4PnI29qWgKV61YTVkmks',
  },
  openGraph: {
    type: 'website',
    title: "SDineshKumar | MERN Stack & Next.js Developer Portfolio",
    description: "Expert Full-stack Developer specializing in React.js, Next.js 14, and MERN Stack. View my professional work in modern web development, responsive design, and frontend architecture.",
    url: 'https://sdineshkumar.vercel.app',
    siteName: "S Dinesh Kumar Portfolio",
    images: [{
      url: 'https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/open_graph-64ddAIk8bmnSyjbhHqO4NbV6jh7oG1.webp',
      width: 1200,
      height: 630,
      alt: 'S Dinesh Kumar Portfolio - FullStack Developer',
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
        url: '/favicon.ico',
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
      jobTitle: 'Full stack Developer, Web Developer, UI/UX Designer',
      knowsAbout: [
        'React.js',
        'Next.js',
        'MERN Stack',
        'Frontend Development',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'UI/UX Design',
        'Web Performance Optimization'
      ],
      image: 'https://sdineshkumar.vercel.app/profile.webp',
      description: 'Full-stack Developer specializing in MERN Stack, React.js, and Next.js development with expertise in modern frontend architecture and responsive design.',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance Developer'
      },
      alumniOf: {
        '@type': 'Organization',
        name: 'Bhilai Institute Of Technology Durg'  // Replace with your actual university
      }
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
