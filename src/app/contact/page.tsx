import Navigation from '@/components/navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Jees Jose for web development projects, collaborations, or opportunities. Full Stack Developer available for freelance and full-time positions.',
  keywords: ['Contact', 'Get in Touch', 'Hire Developer', 'Freelance', 'Web Development', 'Full Stack Developer'],
  openGraph: {
    title: 'Contact - Jees Jose Portfolio',
    description: 'Get in touch with Jees Jose for web development projects, collaborations, or opportunities.',
    url: '/contact',
  },
  twitter: {
    title: 'Contact - Jees Jose Portfolio',
    description: 'Get in touch with Jees Jose for web development projects, collaborations, or opportunities.',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Contact />
      <Footer />
    </main>
  );
} 