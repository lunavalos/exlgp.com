import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutWhatWeDo from '@/components/AboutWhatWeDo';
import OpenAISection from '@/components/OpenAISection';
import ServicesSection from '@/components/ServicesSection';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />
      <Hero />
      <AboutWhatWeDo />
      <OpenAISection />
      <ServicesSection />
      <Certifications />
      <Footer />
    </main>
  );
}
