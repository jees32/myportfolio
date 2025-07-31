import Navigation from '@/components/navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Jees Jose\'s portfolio. Full Stack Developer with expertise in Python, Django, React, and Next.js. View my projects, skills, and experience.',
  keywords: ['Portfolio', 'Home', 'Full Stack Developer', 'Jees Jose', 'Web Development'],
  openGraph: {
    title: 'Jees Jose - Full Stack Developer Portfolio',
    description: 'Welcome to Jees Jose\'s portfolio. Full Stack Developer with expertise in Python, Django, React, and Next.js.',
    url: '/',
  },
  twitter: {
    title: 'Jees Jose - Full Stack Developer Portfolio',
    description: 'Welcome to Jees Jose\'s portfolio. Full Stack Developer with expertise in Python, Django, React, and Next.js.',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
