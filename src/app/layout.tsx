import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: {
    default: "Jees Jose - Full Stack Developer",
    template: "%s | Jees Jose"
  },
  description: "Full Stack Developer specializing in Python, Django, React, Next.js, and modern web technologies. Experienced in building scalable web applications and APIs.",
  keywords: ["Full Stack Developer", "Python", "Django", "React", "Next.js", "Web Development", "JavaScript", "TypeScript", "API Development"],
  authors: [{ name: "Jees Jose" }],
  creator: "Jees Jose",
  publisher: "Jees Jose",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Remove metadataBase for GitHub Pages - use relative URLs
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Jees Jose - Full Stack Developer',
    description: 'Full Stack Developer specializing in Python, Django, React, Next.js, and modern web technologies.',
    siteName: 'Jees Jose Portfolio',
    images: [
      {
        url: '/images/jees_photo.png', // Fixed: using .png extension that exists
        width: 1200,
        height: 630,
        alt: 'Jees Jose - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jees Jose - Full Stack Developer',
    description: 'Full Stack Developer specializing in Python, Django, React, Next.js, and modern web technologies.',
    images: ['/images/jees_photo.png'], // Fixed: using .png extension that exists
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
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
  verification: {
    google: 'YjxZq278ONGWrFm6z33Q2BtRfFKMxE--5lscFslRlYY', // Your actual Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
