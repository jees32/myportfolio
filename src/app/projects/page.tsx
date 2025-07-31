import Navigation from '@/components/navigation';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Jees Jose\'s portfolio of web development projects. Full Stack applications built with Python, Django, React, Next.js, and modern technologies.',
  keywords: ['Projects', 'Portfolio', 'Web Applications', 'Full Stack Development', 'Python', 'Django', 'React', 'Next.js'],
  openGraph: {
    title: 'Projects - Jees Jose Portfolio',
    description: 'Explore Jees Jose\'s portfolio of web development projects. Full Stack applications built with modern technologies.',
    url: '/projects',
  },
  twitter: {
    title: 'Projects - Jees Jose Portfolio',
    description: 'Explore Jees Jose\'s portfolio of web development projects. Full Stack applications built with modern technologies.',
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Projects />
      <Footer />
    </main>
  );
} 