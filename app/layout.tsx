// app/layout.tsx - Fixed Open Graph image URLs
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const matter = localFont({
  src: [
    {
      path: '../Public/fonts/Matter-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../Public/fonts/Matter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-matter',
  preload: true,
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

// Enhanced SEO Configuration
const siteConfig = {
  name: "S Dinesh Kumar | SDinesh | SDineshKumar",
  domain: "https://sdineshkumar.vercel.app",
  email: "sdineshk7899@gmail.com",
  phone: "+91-7987837256",
  location: "Hydrabad, Banglore, Bhilai, Raipur, Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/sdineshku",
  github: "https://github.com/sdinesh-webdev",
  twitter: "@sdineshkumar",
  brandNames: ["sdinesh", "sdineshkumar", "s dinesh kumar", "dinesh kumar s"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),

  title: {
    default: "SDinesh | S Dinesh Kumar | MERN Stack Developer | React Expert | Next.js Specialist | Hire Top Full-Stack Developer 2025",
    template: "%s | S Dinesh - Expert Full-Stack Developer"
  },

  description:"SDinesh (S Dinesh Kumar) - Professional Full-Stack Developer specializing in MERN Stack, React.js, Next.js, and TypeScript. Visit sdineshkumar.vercel.app for portfolio, projects, and contact. Award-winning developer with  years of experience, delivering scalable web applications. Available for hire in 2025-2026. Based in Chennai, India, serving clients worldwide.",

  keywords: [
    // Primary Brand Keywords (CRITICAL for ranking)
    "sdinesh", "sdineshkumar", "s dinesh", "s dinesh kumar", "dinesh kumar s", "dinesh",
    "sdinesh portfolio", "sdineshkumar portfolio", "sdinesh developer", "sdineshkumar developer",
    "sdinesh react developer", "sdineshkumar mern stack", "sdinesh web developer",
    
    // Location-based brand keywords
    "sdinesh chennai", "sdineshkumar chennai", "sdinesh tamil nadu", "sdinesh india developer",
    "sdinesh hyderabad", "sdineshkumar bangalore", "sdinesh bhilai developer",
    
    // Professional keywords
    "hire sdinesh", "contact sdineshkumar", "sdinesh freelance developer",
    "sdineshkumar full stack developer", "sdinesh react expert", "sdineshkumar nextjs specialist",
    
    // Technical expertise
    "full stack developer", "mern stack developer", "react developer", "nextjs developer",
    "typescript developer", "nodejs developer", "mongodb expert", "web developer",
    "javascript developer", "frontend developer", "backend developer",
    
    // Service-based keywords
    "hire full stack developer", "react developer for hire", "nextjs expert",
    "web application development", "custom web solutions", "freelance developer india",
    "remote developer", "web development consultant", "ui ux developer",
    
    // Location-based
    "web developer chennai", "full stack developer india", "developer tamil nadu",
    "hyderabad developer", "bangalore developer", "remote developer india"
  ].join(", "),

  authors: [{
    name: "S Dinesh Kumar (SDinesh)",
    url: siteConfig.domain
  }],
  creator: "S Dinesh Kumar",
  publisher: "S Dinesh Kumar",
  category: "Technology",

  verification: {
    google: 'DDVzs-nsZGPqw3CWoqfxeiG4PnI29qWgKV61YTVkmks',
  },

  // Fixed Open Graph with correct image URLs
  openGraph: {
    type: 'profile',
    title: "S Dinesh Kumar | Full-Stack Developer | MERN, React, Next.js Expert Available for Hire",
    description: "Full-Stack Developer with proven track record. Expert in MERN Stack, React.js, Next.js. Available for hire in 2025-26. Free consultation available!",
    url: siteConfig.domain,
    siteName: "S Dinesh Kumar - Expert Full-Stack Developer Portfolio",
    locale: 'en_US',
    images: [
      {
        url: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/opengraph-9bHi4JEfOk210g5P0sIzxO7iIrzN0U.webp",
        width: 1200,
        height: 630,
        alt: 'S Dinesh Kumar - Expert Full-Stack Developer Portfolio',
        type: 'image/webp',
      },
      {
        url: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/opengraph-9bHi4JEfOk210g5P0sIzxO7iIrzN0U.webp",
        width: 1080,
        height: 1080,
        alt: 'S Dinesh Kumar - MERN Stack Developer',
        type: 'image/webp',
      }
    ],
    firstName: "S Dinesh",
    lastName: "Kumar",
    username: "sdineshkumar",
    gender: "male",
  },

  // Fixed Twitter metadata
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    title: "S Dinesh Kumar - #1 Full-Stack Developer | MERN Stack Expert | Available for Hire 2024",
    description: "Top-rated Full-Stack Developer specializing in MERN Stack, React.js, Next.js. 100+ successful projects. Available for hire. Get free consultation!",
    images: [
      {
        url: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/opengraph-9bHi4JEfOk210g5P0sIzxO7iIrzN0U.webp",
        width: 1200,
        height: 630,
        alt: 'S Dinesh Kumar - Expert Full-Stack Developer',
        type: 'image/webp',
      },
    ],
  },

  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-32x32.png',
  },

  alternates: {
    canonical: siteConfig.domain,
    languages: {
      'en-US': siteConfig.domain,
      'en': siteConfig.domain,
    }
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    'google-site-verification': 'DDVzs-nsZGPqw3CWoqfxeiG4PnI29qWgKV61YTVkmks',
    'msapplication-TileColor': '#000000',
    'theme-color': '#ffffff',

    'application/ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${siteConfig.domain}/#person`,
        name: 'S Dinesh Kumar',
        alternateName: ['Dinesh Kumar', 'S Dinesh', 'Dinesh Kumar S'],
        url: siteConfig.domain,
        image: {
          '@type': 'ImageObject',
          url: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/opengraph-9bHi4JEfOk210g5P0sIzxO7iIrzN0U.webp",
          width: 400,
          height: 400
        },
        sameAs: [
          siteConfig.linkedin,
          siteConfig.github,
          `https://twitter.com/${siteConfig.twitter.replace('@', '')}`,
          `${siteConfig.domain}/resume.pdf`
        ],
        jobTitle: [
          'Full Stack Developer',
          'MERN Stack Developer',
          'React.js Expert',
          'Next.js Specialist',
          'UI/UX Designer',
          'Web Development Consultant'
        ],
        description: ' SDinesh (S Dinesh Kumar) Award-winning Full-Stack Developer with  years of experience specializing in MERN Stack, React.js, Next.js, and modern web technologies. Available for hire in 2025-26.',
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bhilai',
          addressRegion: 'Chhattisgarh',
          addressCountry: 'India'
        },
        worksFor: {
          '@type': 'Organization',
          name: 'SDinesh - Freelance Developer',
          description: 'Independent Full-Stack Developer serving clients worldwide'
        },
        knowsAbout: [
          'Full Stack Web Development',
          'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
          'React.js Development',
          'Next.js Development',
          'TypeScript Programming',
          'JavaScript ES6+',
          'Node.js Backend Development',
          'MongoDB Database Design',
          'Express.js API Development',
          'UI/UX Design',
          'Responsive Web Design',
          'Progressive Web Applications (PWA)',
          'Search Engine Optimization (SEO)',
          'Web Performance Optimization'
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Meta Front-End Developer Professional Certificate',
            credentialCategory: 'Professional Certificate',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Meta (Facebook)',
              url: 'https://www.meta.com'
            },
            url: 'https://www.coursera.org/account/accomplishments/specialization/HLJUAPS49XLG'
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'IBM Back-end JavaScript Developer Professional Certificate',
            credentialCategory: 'Professional Certificate',
            recognizedBy: {
              '@type': 'Organization',
              name: 'IBM',
              url: 'https://www.ibm.com'
            },
            url: 'https://www.coursera.org/account/accomplishments/specialization/YAPAFNUL4QA2'
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Search Engine Optimization (SEO) Specialization',
            credentialCategory: 'Professional Certificate',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Coursera',
              url: 'https://www.coursera.org'
            },
            url: 'https://www.coursera.org/account/accomplishments/specialization/ZPTNMXAC7FQB'
          }
        ],
        mainEntityOfPage: {
          '@type': 'ProfilePage',
          '@id': siteConfig.domain,
          name: 'SDinesh Portfolio - Full-Stack Developer',
          description: 'Professional portfolio of SDineshKumar (S Dinesh Kumar), showcasing web development projects, skills, and experience in MERN Stack development.'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: 'SDinesh Portfolio - SDineshKumar',
        description: 'Official portfolio website of SDinesh (S Dinesh Kumar), Full-Stack MERN Developer',
        inLanguage: 'en-US',
        publisher: {
          '@id': `${siteConfig.domain}/#person`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteConfig.domain}?s={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.domain}/#service`,
        name: 'SDinesh Web Development Services',
        description: 'Professional web development services by SDineshKumar specializing in MERN Stack, React, Next.js',
        provider: {
          '@id': `${siteConfig.domain}/#person`
        },
        areaServed: {
          '@type': 'Country',
          name: 'India'
        },
        serviceType: [
          'Full Stack Web Development',
          'MERN Stack Development',
          'React.js Development',
          'Next.js Development',
          'UI/UX Design',
          'Web Consulting'
        ]
      }
    ])
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <head>
  {/* Critical SEO Meta Tags */}
  <meta name="author" content="SDinesh, SDineshKumar, S Dinesh Kumar" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SDinesh Portfolio" />
        <meta name="application-name" content="SDineshKumar Portfolio" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Additional brand-specific meta tags */}
        <meta property="profile:first_name" content="S Dinesh" />
        <meta property="profile:last_name" content="Kumar" />
        <meta property="profile:username" content="sdineshkumar" />

        {/* Performance & Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="dns-prefetch"
          href="https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`antialiased ${matter.variable}`}
        itemScope
        itemType="https://schema.org/Person"
        itemProp="mainEntity"
      >
         {/* Hidden SEO-rich content for crawlers */}
         <div style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
          <h1>SDinesh - SDineshKumar - S Dinesh Kumar</h1>
          <p>
            SDinesh (also known as SDineshKumar or S Dinesh Kumar) is a professional Full-Stack Developer 
            specializing in MERN Stack development, React.js, Next.js, and TypeScript. Visit sdineshkumar.vercel.app 
            to see portfolio, projects, and contact information. SDinesh is available for hire in 2025-2026.
          </p>
          <p>
            Keywords: sdinesh, sdineshkumar, s dinesh kumar, sdinesh portfolio, sdineshkumar developer, 
            sdinesh react developer, sdineshkumar mern stack, sdinesh web developer chennai
          </p>
        </div>
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', background: '#f0f0f0' }}>
            <h1>S Dinesh Kumar - Expert Full-Stack Developer</h1>
            <p>This website requires JavaScript to function properly. Please enable JavaScript in your browser.</p>
            <p>Contact: <a href="mailto:sdineshk7899@gmail.com">sdineshk7899@gmail.com</a></p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}