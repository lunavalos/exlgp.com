import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import DistribucionLogisticaClient from './DistribucionLogisticaClient';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Truck, Navigation, Route, Lock, ShieldCheck, Eye, ShieldAlert, Cpu } from 'lucide-react';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});

  return {
    title: t('distribution_title'),
    description: t('distribution_desc'),
    keywords: t('distribution_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}/servicios/distribucion-y-logistica`,
      languages: {
        'es': 'https://www.exlgp.com/es/servicios/distribucion-y-logistica',
        'en': 'https://www.exlgp.com/en/servicios/distribucion-y-logistica',
      }
    },
    openGraph: {
      title: t('distribution_title'),
      description: t('distribution_desc'),
      url: `https://www.exlgp.com/${locale}/servicios/distribucion-y-logistica`,
      siteName: 'EXL Group',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

export default function DistribucionLogisticaPage() {
  const t = useTranslations('DistributionLogisticsPage');

  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />

      <InnerHero
        category={t('category')}
        title={t('hero_title')}
        highlight={t('hero_highlight')}
        subtitle={t('hero_subtitle')}
      />

      <DistribucionLogisticaClient />

      <Footer />
    </main>
  );
}
