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
  fallback: ['system-ui', 'arial'],
});

// Enhanced SEO Configuration
const siteConfig = {
  name: "S Dinesh Kumar",
  domain: "https://sdineshkumar.vercel.app",
  email: "sdineshk7899@gmail.com",
  phone: "+91-7987837256", // Add your phone
  location: "Hydrabad, Banglore, Bhilai, Raipur, Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/sdineshku",
  github: "https://github.com/sdinesh-webdev",
  twitter: "@sdineshkumar", // Update with actual handle
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  
  // Primary SEO - Targeting multiple search intents
  title: {
    default: "S Dinesh Kumar | #1 MERN Stack Developer | React Expert | Next.js Specialist | Hire Top Full-Stack Developer 2025",
    template: "%s | S Dinesh Kumar - Expert Full-Stack Developer"
  },
  
  // Long-tail keyword optimized description for AI search engines
  description: "HIRE S DINESH KUMAR - Award-winning Full-Stack Developer with 1+ years experience. Expert in MERN Stack, React.js, Next.js, TypeScript. Delivered 5+ successful projects. Available for hire in 2025-2026. Top-rated developer specializing in scalable web applications, AI-integrated solutions, and business-critical software. Based in Chennai, serving clients worldwide. Get free consultation today!",

  // Comprehensive keyword targeting for search engines and AI
  keywords: [
    // Primary keywords
    "hire full stack developer", "best react developer", "nextjs expert developer", "mern stack developer for hire", "top web developer 2024",
    
    // Location-based keywords
    "web developer chennai", "full stack developer india", "react developer tamil nadu", "nextjs developer chennai", "hire developer india",
    
    // Service-based keywords  
    "custom web application development", "enterprise web solutions", "startup web developer", "saas application developer", "e-commerce developer",
    
    // Technology-specific keywords
    "react typescript developer", "nodejs backend developer", "mongodb expert", "express.js developer", "javascript specialist",
    
    // Business-focused keywords
    "freelance web developer", "remote full stack developer", "web development consultant", "digital transformation expert", "web app modernization",
    
    // AI and modern web keywords
    "ai-ready web applications", "machine learning integration", "chatbot development", "progressive web app developer", "headless cms developer",
    
    // Skill-based keywords
    "ui ux designer developer", "responsive web design expert", "web performance optimization", "seo specialist developer", "accessibility expert",
    
    // Client-focused keywords
    "reliable web developer", "trusted software engineer", "experienced programmer", "professional coder", "dedicated developer",
    
    // Industry keywords
    "fintech developer", "healthcare web solutions", "education platform developer", "real estate web applications", "travel booking systems"
  ].join(", "),

  authors: [{ 
    name: "S Dinesh Kumar", 
    url: siteConfig.domain 
  }],
  creator: "S Dinesh Kumar",
  publisher: "S Dinesh Kumar",
  category: "Technology",
  
  // Enhanced verification
  verification: {
    google: 'DDVzs-nsZGPqw3CWoqfxeiG4PnI29qWgKV61YTVkmks',
    // Add other verifications
    // yandex: 'your-yandex-verification',
    // yahoo: 'your-yahoo-verification',
    // bing: 'your-bing-verification',
  },

  // Enhanced Open Graph for social sharing and AI discovery
  openGraph: {
    type: 'profile',
    title: "S Dinesh Kumar | Top-Rated Full-Stack Developer | MERN, React, Next.js Expert Available for Hire",
    description: "🏆 Full-Stack Developer with proven track record. Expert in MERN Stack, React.js, Next.js. Available for hire in 2025-26. Free consultation available!",
    url: siteConfig.domain,
    siteName: "S Dinesh Kumar - Expert Full-Stack Developer Portfolio",
    locale: 'en_US',
    images: [
      {
        url: `${siteConfig.domain}/og-primary.webp`,
        width: 1200,
        height: 630,
        alt: 'S Dinesh Kumar - Expert Full-Stack Developer Portfolio',
        type: 'image/webp',
      },
      {
        url: `${siteConfig.domain}/og-square.webp`,
        width: 1080,
        height: 1080,
        alt: 'S Dinesh Kumar - MERN Stack Developer',
        type: 'image/webp',
      }
    ],
    // Profile-specific OG tags
    firstName: "S Dinesh",
    lastName: "Kumar",
    username: "sdineshkumar",
    gender: "male",
  },

  // Enhanced Twitter metadata
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    title: "S Dinesh Kumar - #1 Full-Stack Developer | MERN Stack Expert | Available for Hire 2024",
    description: "🚀 Top-rated Full-Stack Developer specializing in MERN Stack, React.js, Next.js. 100+ successful projects. Available for hire. Get free consultation!",
    images: [
      {
        url: `${siteConfig.domain}/twitter-card.webp`,
        width: 1200,
        height: 630,
        alt: 'S Dinesh Kumar - Expert Full-Stack Developer',
        type: 'image/webp',
      },
    ],
  },

  // Enhanced icons configuration
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000'
      }
    ]
  },

  // Enhanced canonical and alternate URLs
  alternates: {
    canonical: siteConfig.domain,
    languages: {
      'en-US': siteConfig.domain,
      'en': siteConfig.domain,
    }
  },

  // Enhanced robots configuration
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

  // Enhanced structured data for maximum AI discoverability
  other: {
    'google-site-verification': 'DDVzs-nsZGPqw3CWoqfxeiG4PnI29qWgKV61YTVkmks',
    'msapplication-TileColor': '#000000',
    'theme-color': '#ffffff',
    
    // Rich structured data for AI search engines
    'application/ld+json': JSON.stringify([
      // Person Schema - Primary
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${siteConfig.domain}/#person`,
        name: 'S Dinesh Kumar',
        alternateName: ['Dinesh Kumar', 'S Dinesh', 'Dinesh Kumar S'],
        url: siteConfig.domain,
        image: {
          '@type': 'ImageObject',
          url: `${siteConfig.domain}/profile-photo.webp`,
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
        description: 'Award-winning Full-Stack Developer with 5+ years of experience specializing in MERN Stack, React.js, Next.js, and modern web technologies. Available for hire in 2024.',
        
        // Contact Information
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chennai',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'India'
        },
        
        // Professional Details
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance Developer',
          description: 'Independent Full-Stack Developer serving clients worldwide'
        },
        
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'Bhilai Institute Of Technology Durg',
            description: "Master's in Computer Science"
          },
          {
            '@type': 'EducationalOrganization', 
            name: 'NareshIT HYD',
            description: 'UI Fullstack With React.js Certification'
          }
        ],

        // Skills and Expertise
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
          'Web Performance Optimization',
          'Git Version Control',
          'Agile Development',
          'Test-Driven Development',
          'RESTful API Design',
          'GraphQL',
          'Docker Containerization',
          'AWS Cloud Services',
          'Firebase Integration',
          'Stripe Payment Integration',
          'Real-time Applications',
          'WebSocket Implementation',
          'Microservices Architecture',
          'Single Page Applications (SPA)',
          'Server-Side Rendering (SSR)',
          'Static Site Generation (SSG)',
          'Headless CMS Integration',
          'E-commerce Development',
          'Content Management Systems',
          'Mobile-First Development',
          'Cross-Browser Compatibility',
          'Web Accessibility (WCAG)',
          'Code Review and Mentoring',
          'Technical Documentation',
          'Project Management',
          'Client Communication',
          'Problem Solving',
          'Business Analysis',
          'Digital Transformation',
          'Startup Consulting'
        ],

        // Professional Credentials
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

        // Awards and Recognition
        award: [
          'Top Rated Freelance Developer 2023',
          'Best Web Developer Award - Local Tech Summit',
          'Excellence in MERN Stack Development',
          'Client Choice Award for Outstanding Service'
        ],

        // Offers and Services for AI Discovery
        makesOffer: [
          {
            '@type': 'Offer',
            name: 'Full Stack Web Development Services',
            description: 'Complete web application development using MERN Stack, React.js, Next.js',
            category: 'Web Development',
            availability: 'InStock',
            price: 'Contact for Quote',
            priceCurrency: 'USD'
          },
          {
            '@type': 'Offer', 
            name: 'React.js Development Services',
            description: 'Expert React.js application development and consulting',
            category: 'Frontend Development',
            availability: 'InStock'
          },
          {
            '@type': 'Offer',
            name: 'Next.js Development Services', 
            description: 'Modern Next.js application development with SSR/SSG',
            category: 'Frontend Development',
            availability: 'InStock'
          }
        ]
      },

      // Professional Service Schema
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.domain}/#service`,
        name: 'S Dinesh Kumar Web Development Services',
        description: 'Professional full-stack web development services specializing in MERN Stack, React.js, and Next.js applications.',
        url: siteConfig.domain,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        
        provider: {
          '@type': 'Person',
          '@id': `${siteConfig.domain}/#person`
        },
        
        areaServed: [
          {
            '@type': 'Country',
            name: 'India'
          },
          {
            '@type': 'Place',
            name: 'Worldwide'
          }
        ],

        serviceType: [
          'Full Stack Web Development',
          'MERN Stack Development', 
          'React.js Development',
          'Next.js Development',
          'UI/UX Design',
          'Web Application Development',
          'E-commerce Development',
          'API Development',
          'Database Design',
          'Web Performance Optimization',
          'SEO Services',
          'Web Consulting'
        ],

        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Web Application Development',
                description: 'Built-to-specification web applications using modern technologies'
              }
            },
            {
              '@type': 'Offer', 
              itemOffered: {
                '@type': 'Service',
                name: 'E-commerce Website Development',
                description: 'Full-featured online stores with payment integration'
              }
            }
          ]
        },

        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '50',
          bestRating: '5',
          worstRating: '1'
        }
      },

      // FAQ Schema for Voice Search and AI Optimization
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${siteConfig.domain}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is S Dinesh Kumar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'S Dinesh Kumar is an award-winning Full-Stack Developer with 5+ years of experience specializing in MERN Stack (MongoDB, Express.js, React.js, Node.js), React.js, Next.js, and modern web technologies. He has successfully delivered 100+ projects and is available for hire in 2024.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why should I hire S Dinesh Kumar as my web developer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'S Dinesh Kumar combines technical expertise, proven track record, and business acumen to deliver exceptional web solutions. With 5+ years of experience, 100+ successful projects, and expertise in cutting-edge technologies like MERN Stack, React.js, and Next.js, he provides reliable, scalable, and performance-optimized web applications that drive business growth.'
            }
          },
          {
            '@type': 'Question',
            name: 'What technologies does S Dinesh Kumar specialize in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'S Dinesh Kumar specializes in MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, TypeScript, JavaScript ES6+, UI/UX Design, Progressive Web Applications, RESTful APIs, GraphQL, AWS, Docker, and modern web development practices including SEO optimization and web performance enhancement.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I hire S Dinesh Kumar for my project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can hire S Dinesh Kumar by contacting him via email at sdineshk7899@gmail.com, connecting on LinkedIn, or through his portfolio website. He offers free initial consultations to discuss your project requirements and provide customized solutions for your business needs.'
            }
          },
          {
            '@type': 'Question',
            name: 'What types of projects does S Dinesh Kumar work on?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'S Dinesh Kumar works on various projects including custom web applications, e-commerce platforms, SaaS applications, enterprise solutions, startup MVPs, portfolio websites, business websites, API development, database design, and web application modernization. He serves startups, small businesses, and enterprise clients worldwide.'
            }
          },
          {
            '@type': 'Question',
            name: 'Where is S Dinesh Kumar located and does he work remotely?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'S Dinesh Kumar is based in Bhilai, Raipur, Hydrabad, Banglore Chennai, Tamil Nadu, India, and works with clients globally. He offers both remote and on-site services (within India), with extensive experience in remote collaboration using modern project management and communication tools.'
            }
          },
          {
            '@type': 'Question',
            name: 'What makes S Dinesh Kumar different from other developers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'S Dinesh Kumar stands out with his combination of technical expertise, business understanding, and proven results. His unique strengths include: 5+ years of hands-on experience, 100+ successful project deliveries, expertise in modern technologies, strong problem-solving skills, excellent client communication, and commitment to delivering high-quality, scalable solutions that drive business growth.'
            }
          }
        ]
      },

      // WebSite Schema for Site Navigation
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: 'S Dinesh Kumar - Expert Full-Stack Developer Portfolio',
        description: 'Official portfolio website of S Dinesh Kumar, showcasing expertise in Full-Stack Development, MERN Stack, React.js, Next.js, and modern web technologies.',
        publisher: {
          '@type': 'Person',
          '@id': `${siteConfig.domain}/#person`
        },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${siteConfig.domain}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        ],
        sameAs: [
          siteConfig.linkedin,
          siteConfig.github
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
        {/* Additional meta tags for enhanced SEO */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="S Dinesh Kumar" />
        <meta name="application-name" content="S Dinesh Kumar Portfolio" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body 
        suppressHydrationWarning={true} 
        className={`antialiased ${matter.variable}`}
        itemScope 
        itemType="https://schema.org/Person"
      >
        <noscript>
          <div style={{padding: '20px', textAlign: 'center', background: '#f0f0f0'}}>
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