import Navigation from '@/components/navigation';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Jees Jose\'s technical skills and expertise in Full Stack Development. Proficient in Python, Django, React, Next.js, JavaScript, TypeScript, and modern web technologies.',
  keywords: ['Skills', 'Technical Skills', 'Programming Languages', 'Frameworks', 'Python', 'Django', 'React', 'Next.js', 'JavaScript', 'TypeScript'],
  openGraph: {
    title: 'Skills - Jees Jose Portfolio',
    description: 'Jees Jose\'s technical skills and expertise in Full Stack Development. Proficient in modern web technologies.',
    url: '/skills',
  },
  twitter: {
    title: 'Skills - Jees Jose Portfolio',
    description: 'Jees Jose\'s technical skills and expertise in Full Stack Development. Proficient in modern web technologies.',
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Skills />
      <Footer />
    </main>
  );
} 