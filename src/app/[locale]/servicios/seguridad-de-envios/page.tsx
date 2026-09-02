import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import SeguridadEnviosClient from './SeguridadEnviosClient';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ShieldAlert, ShieldCheck, Eye, Lock, Smartphone, Video, KeyRound, Radio } from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});

  return {
    title: t('security_title'),
    description: t('security_desc'),
    keywords: t('security_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}/servicios/seguridad-de-envios`,
      languages: {
        'es': 'https://www.exlgp.com/es/servicios/seguridad-de-envios',
        'en': 'https://www.exlgp.com/en/servicios/seguridad-de-envios',
      }
    },
    openGraph: {
      title: t('security_title'),
      description: t('security_desc'),
      url: `https://www.exlgp.com/${locale}/servicios/seguridad-de-envios`,
      siteName: 'EXL Group',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

export default function SeguridadEnviosPage() {
  const t = useTranslations('ShipmentSecurityPage');

  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />

      <InnerHero
        category={t('category')}
        title={t('hero_title')}
        highlight={t('hero_highlight')}
        subtitle={t('hero_subtitle')}
      />

      <SeguridadEnviosClient />

      <Footer />
    </main>
  );
}
