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
  title: "S Dinesh Kumar | Expert Full-Stack Web Developer | MERN, React, Next.js | Problem Solver & AI-Ready Portfolio",
  description: "Hire a proven Full-Stack Web Developer with real-world expertise in MERN Stack, React.js, Next.js, TypeScript, and scalable web solutions. I solve complex business problems with modern, high-performance, SEO & AI-optimized web applications. Trusted by clients for reliability, innovation, and results.",
  keywords: "full stack web developer, hire react developer, nextjs expert, mern stack developer, web developer india, freelance web developer, ai-ready portfolio, web application developer, problem solver, scalable web solutions, frontend specialist, backend engineer, typescript developer, nodejs expert, mongodb consultant, ui ux designer, web performance optimization, best web developer, top rated web developer, webdev raipur, webdev chennai, remote web developer, ai optimized website, structured data expert, schema.org developer, google ranking, seo expert, answer engine optimization, voice search developer, chatbot ready portfolio, webdev for startups, business web developer, digital transformation, modern web design, responsive web developer, webdev for agencies, webdev for enterprises, webdev for founders, webdev for ai companies",
  authors: [{ name: "S Dinesh Kumar" }],
  creator: "S Dinesh Kumar",
  verification: {
    google: 'DDVzs-nsZGPqw3CWoqfxeiG4PnI29qWgKV61YTVkmks',
  },
  openGraph: {
    type: 'website',
    title: "S Dinesh Kumar | Full-Stack Developer & Problem Solver | MERN, React, Next.js",
    description: "Portfolio of a results-driven Full-Stack Developer. Real-life solutions, scalable apps, and AI-ready web development. Explore my projects, skills, and client success stories.",
    url: 'https://sdineshkumar.vercel.app',
    siteName: "S Dinesh Kumar Portfolio",
    images: [
      {
        url: 'https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/open_graph-64ddAIk8bmnSyjbhHqO4NbV6jh7oG1.webp',
        width: 1200,
        height: 630,
        alt: 'S Dinesh Kumar Portfolio - FullStack Developer',
        type: 'image/webp',
      },
      {
        url: 'https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/open_graph-64ddAIk8bmnSyjbhHqO4NbV6jh7oG1.jpg',
        width: 1200,
        height: 630,
        alt: 'S Dinesh Kumar Portfolio - FullStack Developer',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "S Dinesh Kumar - Full-Stack Web Developer & Logical Problem Solver",
    description: "Discover a portfolio built for the future: AI-ready, SEO-optimized, and focused on solving real business challenges with modern web tech.",
    images: [
      {
        url: 'https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/open_graph-64ddAIk8bmnSyjbhHqO4NbV6jh7oG1.webp',
        width: 1200,
        height: 630,
        alt: 'S Dinesh Kumar Portfolio - Full-stack Developer',
        type: 'image/webp',
      },
    ],
    site: '@yourTwitterHandle', // Replace with your Twitter handle
    creator: '@yourTwitterHandle', // Replace with your Twitter handle
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
      jobTitle: 'Full Stack Developer, Web Developer, UI/UX Designer, Problem Solver',
      knowsAbout: [
        'React.js',
        'Next.js',
        'MERN Stack',
        'Frontend Development',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'UI/UX Design',
        'Web Performance Optimization',
        'SEO',
        'AEO',
        'AI-Ready Web Development',
        'Structured Data',
        'Business Problem Solving'
      ],
      image: 'https://sdineshkumar.vercel.app/profile.webp',
      description: 'Award-winning Full-Stack Developer specializing in MERN Stack, React.js, and Next.js. I deliver scalable, AI-optimized, and SEO-friendly web solutions for real-world business challenges.',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance Developer'
      },
      alumniOf: {
        '@type': 'Organization',
        name: 'Bhilai Institute Of Technology Durg'
      },
      award: [
        "Top Rated Freelancer 2023",
        "Best Web Developer Award - Local Tech Summit"
      ],
      skill: [
        "Full Stack Web Development",
        "Frontend Engineering",
        "Backend Engineering",
        "UI/UX Design",
        "SEO & AEO Optimization",
        "AI Integration",
        "Performance Optimization",
        "Problem Solving"
      ],
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'Full Stack Developer',
          description: 'Building scalable, modern web applications for businesses and startups.'
        }
      ],
      mainEntityOfPage: 'https://sdineshkumar.vercel.app',
      // FAQPage for AEO (Answer Engine Optimization)
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why hire S Dinesh Kumar as your web developer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'I combine real-world experience, logical problem-solving, and a passion for modern web technologies to deliver scalable, AI-ready, and SEO-optimized web solutions that help businesses grow and succeed online.'
          }
        },
        {
          '@type': 'Question',
          name: 'What technologies do you specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'I specialize in MERN Stack (MongoDB, Express, React, Node.js), Next.js, TypeScript, UI/UX design, and web performance optimization.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do you ensure your websites rank high on Google and are AI-friendly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'I implement advanced SEO and AEO strategies, use structured data, and build sites optimized for both search engines and AI platforms, ensuring maximum visibility and discoverability.'
          }
        }
      ],
      // Example Project for AI visibility
      hasPart: [
        {
          '@type': 'CreativeWork',
          name: 'AI-Ready Portfolio Website',
          description: 'This portfolio demonstrates why S Dinesh Kumar is the ideal choice for businesses, startups, and agencies seeking a reliable, results-driven, and innovative web developer. Built with Next.js 15 and the MERN stack, it showcases real-world solutions, advanced SEO/AEO, and AI discoverability. Clients trust S Dinesh Kumar for logical problem-solving, modern web architecture, and delivering measurable business value.',
          url: 'https://sdineshkumar.vercel.app',
          author: {
            '@type': 'Person',
            name: 'S Dinesh Kumar',
            url: 'https://sdineshkumar.vercel.app',
            jobTitle: 'Full Stack Web Developer & Problem Solver'
          },
          about: [
            'Web application development',
            'Business problem solving',
            'SEO & AEO optimization',
            'AI-ready web solutions',
            'Client-focused delivery',
            'Modern frontend & backend architecture'
          ],
          keywords: [
            'hire web developer',
            'trusted web developer',
            'business web solutions',
            'problem solver',
            'ai optimized portfolio',
            'seo expert',
            'mern stack developer',
            'nextjs expert',
            'real-world projects'
          ]
        }
      ]
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
