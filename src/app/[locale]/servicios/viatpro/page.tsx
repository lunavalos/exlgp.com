import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import ViatProServiceClient from './ViatProServiceClient';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { 
  FileText, Bell, Truck, ShieldCheck, CheckCircle2, 
  Users, Navigation, MapPin, 
  AlertTriangle, Warehouse, Camera, 
  BarChart2
} from 'lucide-react';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});

  return {
    title: t('viatpro_title'),
    description: t('viatpro_desc'),
    keywords: t('viatpro_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}/servicios/viatpro`,
      languages: {
        'es': 'https://www.exlgp.com/es/servicios/viatpro',
        'en': 'https://www.exlgp.com/en/servicios/viatpro',
      }
    },
    openGraph: {
      title: t('viatpro_title'),
      description: t('viatpro_desc'),
      url: `https://www.exlgp.com/${locale}/servicios/viatpro`,
      siteName: 'EXL Group',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

export default function ViatProIndividualPage() {
  const t = useTranslations('ViatProPage');

  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />

      <InnerHero
        category={t('category')}
        title={t('hero_title')}
        highlight={t('hero_highlight')}
        subtitle={t('hero_subtitle')}
      />

      <ViatProServiceClient />

      <Footer />
    </main>
  );
}
