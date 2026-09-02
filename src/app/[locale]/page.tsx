import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutWhatWeDo from '@/components/AboutWhatWeDo';
import OpenAISection from '@/components/OpenAISection';
import ServicesSection from '@/components/ServicesSection';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});

  return {
    title: t('home_title'),
    description: t('home_desc'),
    keywords: t('home_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}`,
      languages: {
        'es': 'https://www.exlgp.com/es',
        'en': 'https://www.exlgp.com/en',
      }
    },
    openGraph: {
      title: t('home_title'),
      description: t('home_desc'),
      url: `https://www.exlgp.com/${locale}`,
      siteName: 'EXL Group',
      images: [
        {
          url: '/images/EXLGroup-building-scaled.jpg',
          width: 1200,
          height: 630,
          alt: 'EXL Group - Soluciones de Innovación en Procesos Aduanales',
        }
      ],
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

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
