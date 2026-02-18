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

// Enhanced SEO Configuration - Optimized for "sdinesh webdev" + Software Engineer ranking
const siteConfig = {
  name: "sdinesh webdev | S Dinesh Kumar | SDinesh | SDineshKumar",
  domain: "https://sdineshkumar.vercel.app",
  email: "sdineshk7899@gmail.com",
  resume: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/1_S_DINESH_KUMAR_FULLSTACK_DEV_2026.pdf",
  location: "Bhilai, Chhattisgarh | Bangalore, Hyderabad, Chennai, Pune, Mumbai, India",
  linkedin: "https://www.linkedin.com/in/sdineshku",
  github: "https://github.com/sdinesh-webdev",
  twitter: "@sdineshkumar",
  brandNames: ["sdinesh webdev", "sdinesh", "sdineshkumar", "s dinesh kumar", "dinesh kumar s", "Dinesh S", "S Dinesh"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),

  title: {
    default: "sdinesh webdev | S Dinesh Kumar | Software Engineer | Full-Stack Developer | Gen AI Developer 2026",
    template: "%s | sdinesh webdev - Software Engineer & Full-Stack Developer"
  },

  description: "sdinesh webdev (S Dinesh Kumar) is a results-driven Software Engineer and Full-Stack Developer specializing in MERN Stack, React.js, Next.js 15, TypeScript, and Gen AI (RAG, LLM). Portfolio scores 99/100 PageSpeed. Currently Backend Developer Intern at Botivate. Targeting SDE-1, Full-Stack, Frontend, Backend, and Gen AI Engineer roles in 2026. Open to Remote (Global) and Onsite (Bangalore, Hyderabad, Pune, Chennai, Mumbai). Visit sdineshkumar.vercel.app for projects, resume, and contact.",

  keywords: [
    // PRIMARY TARGET KEYWORD
    "sdinesh webdev",

    // Primary Brand Keywords (CRITICAL for ranking)
    "sdinesh", "sdineshkumar", "s dinesh", "s dinesh kumar", "dinesh kumar s", "dinesh", "Dinesh S",
    "sdinesh webdev portfolio", "sdinesh portfolio", "sdineshkumar portfolio", "sdinesh developer", "sdineshkumar developer",
    "sdinesh webdev developer", "sdinesh react developer", "sdineshkumar mern stack", "sdinesh web developer",
    "dinesh webdev developer", "sdinesh fullstack",

    // Role Titles — 2025-2026 Hiring Market (ATS-Optimized)
    "Software Engineer", "Software Developer", "SDE", "SDE-1", "SDE I", "SDE-2", "Associate Software Engineer",
    "Full Stack Developer", "Full-Stack Engineer", "Full Stack Web Developer",
    "Frontend Developer", "Frontend Engineer", "UI Developer", "UI Engineer",
    "Backend Developer", "Backend Engineer", "API Developer", "Server-Side Developer",
    "React Developer", "React.js Engineer", "Next.js Developer", "Next.js Engineer",
    "Node.js Developer", "Node.js Engineer", "JavaScript Developer", "JavaScript Engineer",
    "TypeScript Developer", "TypeScript Engineer", "MERN Stack Developer", "MERN Developer",
    "Web Developer", "Web Engineer", "Web Application Developer",
    "Gen AI Developer", "AI Developer", "AI Engineer", "LLM Engineer", "Prompt Engineer",
    "AI Application Developer", "Generative AI Developer", "LLM Application Developer",
    "Software Engineer Intern", "Developer Intern", "Tech Intern 2026",
    "Junior Developer", "Junior Software Engineer", "Junior Full Stack Developer",
    "Entry Level Software Engineer", "Entry Level Developer", "Fresher Software Engineer",
    "Graduate 2026", "2026 batch",

    // Technical Skills — ATS Variants
    "React.js", "ReactJS", "React", "Next.js", "NextJS", "Node.js", "NodeJS",
    "Express.js", "ExpressJS", "MongoDB", "Mongoose", "PostgreSQL", "SQL", "NoSQL",
    "Redis", "Firebase", "TypeScript", "JavaScript", "ES6", "HTML5", "CSS3", "Tailwind CSS",
    "REST API", "RESTful API", "GraphQL", "WebSockets", "JSON",
    "Git", "GitHub", "CI/CD", "GitHub Actions", "Docker", "Vercel", "AWS", "GCP", "Cloud",
    "GSAP", "Framer Motion", "Lenis",
    "OpenAI API", "Anthropic API", "Claude API", "LLM", "RAG", "Retrieval-Augmented Generation",
    "Vector Database", "Pinecone", "LangChain", "Prompt Engineering", "AI Integration", "Generative AI",
    "Large Language Models", "LLM Fine-tuning", "PyTorch", "MLOps", "Vector Databases",
    "Web Performance", "Core Web Vitals", "Lighthouse", "PageSpeed", "SEO", "Schema Markup",
    "Microservices", "API Design", "System Design", "Scalability", "Clean Code", "SOLID", "Design Patterns",
    "Agile", "Scrum", "Code Review", "Open Source",

    // India-Specific Project Keywords
    "UPI integration", "Aadhaar eSign workflow", "ONDC API",

    // Location Keywords
    "Bangalore Developer", "Hyderabad Developer", "Chennai Developer", "Pune Developer",
    "Mumbai Developer", "India Developer", "Remote Developer India",
    "India Software Engineer", "Indian Full Stack Developer", "Bhilai Developer",
    "Chhattisgarh Developer", "Pan-India Remote", "South Asia Remote Developer",
    "sdinesh chennai", "sdineshkumar chennai", "sdinesh tamil nadu", "sdinesh india developer",
    "sdinesh hyderabad", "sdineshkumar bangalore", "sdinesh bhilai developer",

    // Hiring Intent Keywords
    "hire sdinesh", "contact sdineshkumar", "sdinesh freelance developer",
    "Hire Full Stack Developer", "Hire React Developer", "Hire MERN Developer",
    "Hire Node.js Developer", "Hire Next.js Developer", "Hire JavaScript Developer",
    "Hire Gen AI Developer", "Hire AI Engineer", "Hire Frontend Developer",
    "Hire Software Engineer India", "Hire Remote Developer India",
    "Hire Fresher Software Engineer 2026", "Entry Level Hire 2026",
    "Available for hire", "Open to work", "Actively job searching 2026",
    "Looking for SDE-1 role", "Looking for Full Stack role", "Seeking remote opportunities",
    "2026 batch hiring", "Campus hire", "Graduate hire", "Fresher hire",

    // Company Type Targeting
    "Product Company", "Product-Based Company", "SaaS", "B2B SaaS",
    "Startup", "Funded Startup", "Remote-First Company", "YC Startup",
    "FAANG", "Big Tech", "MAANG", "Indian Unicorn",

    // Service-based keywords
    "web application development", "custom web solutions", "freelance developer india",
    "remote developer", "web development consultant", "ui ux developer"
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
    title: "S Dinesh Kumar | Software Engineer | Full-Stack Developer | Gen AI Developer | Available 2026",
    description: "Software Engineer & Full-Stack Developer. Expert in React.js, Next.js 15, MERN Stack, Gen AI (RAG, LLM). 99/100 PageSpeed. Targeting SDE-1 roles globally. Open to Remote & Onsite.",
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
    title: "S Dinesh Kumar - Software Engineer | Full-Stack & Gen AI Developer | Open to Work 2026",
    description: "Software Engineer specializing in MERN Stack, React.js, Next.js 15, Gen AI. 99/100 PageSpeed portfolio. Targeting SDE-1, Full-Stack, Gen AI roles globally in 2026.",
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
        // CRITICAL: Include "sdinesh webdev" as primary alternate name for search ranking
        alternateName: ['sdinesh webdev', 'SDinesh', 'SDineshKumar', 'sdinesh-webdev', 'Dinesh Kumar', 'S Dinesh', 'Dinesh Kumar S'],
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
          siteConfig.resume,
          'https://aipdfsummarizer-sigma.vercel.app',
          'https://awwards-site-phi.vercel.app',
          'https://password-generator-five-delta-31.vercel.app',
          'https://todomern-two.vercel.app',
          'https://librarysearch.vercel.app'
        ],
        jobTitle: [
          'Software Engineer',
          'Full Stack Web Developer',
          'Full-Stack Engineer',
          'MERN Stack Developer',
          'React.js Engineer',
          'Next.js Developer',
          'Gen AI Developer',
          'Backend Developer',
          'Frontend Engineer',
          'JavaScript Developer',
          'TypeScript Developer',
          'Web Developer'
        ],
        description: 'sdinesh webdev (S Dinesh Kumar) is a results-driven Software Engineer and Full-Stack Developer from India with expertise in MERN Stack, Next.js 15, TypeScript, and Gen AI (RAG, LLM). Portfolio scores 99/100 PageSpeed. Targeting SDE-1, Full-Stack, and Gen AI Engineer roles in 2026. Open to Remote (Global) and Onsite.',
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bhilai',
          addressRegion: 'Chhattisgarh',
          addressCountry: 'India'
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Botivate',
          description: 'Backend Developer Intern — Node.js backend development, REST API design'
        },
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Software Engineer',
          occupationLocation: [
            { '@type': 'City', name: 'Bangalore' },
            { '@type': 'City', name: 'Hyderabad' },
            { '@type': 'City', name: 'Chennai' },
            { '@type': 'City', name: 'Pune' },
            { '@type': 'City', name: 'Mumbai' },
            { '@type': 'Country', name: 'Remote (Global)' }
          ],
          skills: 'React.js, Next.js 15, Node.js, Express.js, MongoDB, TypeScript, Gen AI, RAG, LLM, OpenAI API, Docker, AWS, System Design',
          qualifications: 'Meta Front-End Developer Certificate, IBM Back-End JavaScript Developer Certificate, SEO Specialization'
        },
        knowsAbout: [
          'Full Stack Web Development',
          'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
          'React.js (v19) Development',
          'Next.js 15 (App Router, Server Components, SSR, SSG, ISR)',
          'TypeScript Programming',
          'JavaScript ES6+',
          'Node.js Backend Development',
          'Express.js API Development',
          'MongoDB Database Design',
          'PostgreSQL',
          'Redis Caching',
          'Gen AI Development',
          'LLM Integration (OpenAI API, Anthropic Claude API)',
          'RAG (Retrieval-Augmented Generation)',
          'Prompt Engineering',
          'Vector Databases (Pinecone, ChromaDB)',
          'LangChain',
          'AI Agents',
          'Distributed Systems',
          'Microservices Architecture',
          'System Design',
          'API Gateway',
          'WebSockets & Real-time Applications',
          'JWT Authentication & OAuth 2.0',
          'Web Performance Optimization (Core Web Vitals, Lighthouse 99+)',
          'GSAP Animation',
          'Framer Motion',
          'Tailwind CSS',
          'Docker Containerization',
          'GitHub Actions CI/CD',
          'AWS Lambda & S3',
          'GCP Compute',
          'UPI Integration',
          'Aadhaar eSign Workflow',
          'ONDC API',
          'Technical SEO & AEO',
          'JSON-LD Schema Markup',
          'UI/UX Design',
          'Responsive Web Design',
          'Progressive Web Applications (PWA)',
          'Agile & Scrum'
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
              name: 'UC Davis / Coursera',
              url: 'https://www.coursera.org'
            },
            url: 'https://www.coursera.org/account/accomplishments/specialization/ZPTNMXAC7FQB'
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'UI FullStack With React.js',
            credentialCategory: 'Professional Certificate',
            recognizedBy: {
              '@type': 'Organization',
              name: 'NareshIT Hyderabad'
            }
          }
        ],
        mainEntityOfPage: {
          '@type': 'ProfilePage',
          '@id': siteConfig.domain,
          name: 'sdinesh webdev Portfolio - Software Engineer & Full-Stack Developer',
          description: 'Official portfolio of sdinesh webdev (S Dinesh Kumar), Software Engineer, Full-Stack Developer, and Gen AI Developer. 99/100 PageSpeed. Ranks on Google, Google AI Mode, and ChatGPT.'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: 'sdinesh webdev Portfolio - SDineshKumar',
        alternateName: ['sdinesh webdev', 'SDinesh Portfolio', 'S Dinesh Kumar Portfolio'],
        description: 'Official portfolio website of sdinesh webdev (S Dinesh Kumar), Full-Stack MERN Developer',
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
        name: 'sdinesh webdev - Software Engineering & Web Development Services',
        alternateName: 'SDinesh Web Development Services',
        description: 'Professional Software Engineering and Web Development by sdinesh webdev. Specializing in MERN Stack, React, Next.js 15, Gen AI, and RAG pipelines.',
        provider: {
          '@id': `${siteConfig.domain}/#person`
        },
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'City', name: 'Bangalore' },
          { '@type': 'City', name: 'Hyderabad' },
          { '@type': 'City', name: 'Chennai' },
          { '@type': 'City', name: 'Pune' },
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'AdministrativeArea', name: 'Remote (Global)' }
        ],
        serviceType: [
          'Software Engineering',
          'Full Stack Web Development',
          'MERN Stack Development',
          'React.js Development',
          'Next.js 15 Development',
          'Gen AI & LLM Integration',
          'RAG Pipeline Development',
          'API Development',
          'UI/UX Design',
          'Technical SEO & AEO',
          'Web Performance Optimization'
        ]
      },
      // Live Projects as CreativeWork schema
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        '@id': `${siteConfig.domain}/#portfolio`,
        name: 'sdinesh webdev Portfolio',
        url: siteConfig.domain,
        author: { '@id': `${siteConfig.domain}/#person` },
        description: 'Next.js 15 App Router portfolio with 99/100 PageSpeed. Ranks on Google, Google AI Mode, and ChatGPT.',
        keywords: 'Next.js 15, React 19, GSAP, TypeScript, Lenis, Vercel Blob, SEO, AEO'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        '@id': `${siteConfig.domain}/#ai-pdf-summarizer`,
        name: 'AI PDF Summarizer',
        url: 'https://aipdfsummarizer-sigma.vercel.app',
        author: { '@id': `${siteConfig.domain}/#person` },
        applicationCategory: 'Productivity',
        description: 'Gen AI project using LLM APIs and RAG to summarize PDF documents. Built with React.js, Node.js, OpenAI API.',
        keywords: 'Gen AI, LLM, RAG, OpenAI API, PDF Summarizer, React.js, Node.js'
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
        {/* Critical SEO Meta Tags - Optimized for "sdinesh webdev" */}
        <meta name="author" content="sdinesh webdev, SDinesh, SDineshKumar, S Dinesh Kumar" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="sdinesh webdev" />
        <meta name="application-name" content="sdinesh webdev Portfolio" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Additional brand-specific meta tags */}
        <meta property="profile:first_name" content="S Dinesh" />
        <meta property="profile:last_name" content="Kumar" />
        <meta property="profile:username" content="sdinesh-webdev" />

        {/* AI/AEO specific meta tags — comprehensive signal layer */}
        <meta name="ai-search-terms" content="sdinesh webdev, sdinesh, sdineshkumar, s dinesh kumar, Software Engineer, SDE, SDE-1, Full Stack Developer, Frontend Developer, Backend Developer, React Developer, Next.js Developer, Gen AI Developer, AI Engineer, LLM Engineer, Web Developer, MERN Developer, JavaScript Developer, TypeScript Developer, Node.js Developer, Fresher Software Engineer, Graduate 2026, Remote Software Engineer, India Software Engineer" />
        <meta name="career-status" content="Actively looking — Open to Work in 2026" />
        <meta name="role-preferences" content="Software Engineer SDE-1, Full-Stack Developer, Frontend Engineer, Backend Engineer, Gen AI Developer, AI Engineer, React Developer, Next.js Developer" />
        <meta name="work-mode" content="Remote (Global preferred) | Onsite (Bangalore, Hyderabad, Pune, Chennai, Mumbai)" />
        <meta name="employment-type" content="Full-Time, Contract, Freelance, Internship-to-hire" />
        <meta name="batch" content="2026 Graduate | Fresher with internship + project experience" />
        <meta name="notice-period" content="Immediate / 15 days" />
        <meta name="resume" content="https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/1_S_DINESH_KUMAR_FULLSTACK_DEV_2026.pdf" />
        <meta name="company-targeting" content="Product Company, SaaS, Startup, Funded Startup, YC Startup, FAANG, Remote-First Company, Indian Unicorn" />

        {/* PWA Manifest & SEO Files */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="author" href="/humans.txt" type="text/plain" />

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
        {/* Hidden SEO-rich content for crawlers — comprehensive ATS + AEO signal layer */}
        <div style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
          <h1>sdinesh webdev — Software Engineer | SDE-1 | Full Stack Developer | Gen AI Developer | React Developer</h1>
          <h2>S Dinesh Kumar — Available for Hire 2026 — Remote & Onsite</h2>
          <p>
            sdinesh webdev (S Dinesh Kumar) is a results-driven Software Engineer and Full-Stack Developer from India with
            hands-on expertise in MERN Stack, Next.js 15, TypeScript, and Gen AI technologies including RAG pipelines, LLM
            integrations (OpenAI API, Anthropic Claude API), Prompt Engineering, Vector Databases (Pinecone, ChromaDB), and LangChain.
          </p>
          <p>
            Currently Backend Developer Intern at Botivate. Targeting SDE-1, Software Engineer, Full-Stack Developer, Frontend Engineer,
            Backend Engineer, Gen AI Developer, AI Engineer, React Developer, and Next.js Developer roles in 2026.
            Open to Remote (Global) and Onsite (Bangalore, Hyderabad, Pune, Chennai, Mumbai). 2026 Graduate Batch.
            Immediate availability / 15 days notice. Full-Time, Contract, Freelance, Internship-to-hire.
          </p>
          <p>
            Core skills: React.js v19, Next.js 15 App Router, Node.js, Express.js, MongoDB, PostgreSQL, Redis, TypeScript,
            JavaScript ES6+, Tailwind CSS, GSAP, Framer Motion, REST API, GraphQL, WebSockets, JWT, OAuth 2.0,
            Microservices Architecture, System Design, Docker, GitHub Actions CI/CD, AWS Lambda, GCP Compute,
            Core Web Vitals (Lighthouse 99+), Technical SEO, AEO, JSON-LD Schema Markup.
          </p>
          <p>
            Live projects: AI PDF Summarizer (Gen AI, RAG, OpenAI API), Awwwards Gaming Site (GSAP animations),
            Crypt Vault Password Manager (MERN encryption), TodoMERN App, Library Search.
            Portfolio scores 99/100 Google PageSpeed. Ranks on Google Search, Google AI Mode, and ChatGPT.
          </p>
          <p>
            Certifications: Meta Front-End Developer (Coursera), IBM Back-End JavaScript Developer (Coursera),
            SEO Specialization (UC Davis/Coursera), UI FullStack React.js (NareshIT Hyderabad).
          </p>
          <p>
            Targeting: Product-Based Companies, SaaS, Funded Startups, YC Startups, FAANG, Remote-First Companies,
            Indian Unicorns, Global Tech Teams. SDE-1, Associate Software Engineer, Junior Software Engineer, Entry Level.
          </p>
          <p>
            Contact: sdineshk7899@gmail.com | LinkedIn: linkedin.com/in/sdineshku | GitHub: github.com/sdinesh-webdev
          </p>
        </div>
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', background: '#f0f0f0' }}>
            <h1>sdinesh webdev - S Dinesh Kumar - Expert Full-Stack Developer</h1>
            <p>This website requires JavaScript to function properly. Please enable JavaScript in your browser.</p>
            <p>Contact sdinesh webdev: <a href="mailto:sdineshk7899@gmail.com">sdineshk7899@gmail.com</a></p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}