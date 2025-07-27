import Navigation from '@/components/navigation';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Skills />
      </div>
      <Footer />
    </main>
  );
} 