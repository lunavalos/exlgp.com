import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import AgenciaAduanalClient from './AgenciaAduanalClient';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});

  return {
    title: t('customs_title'),
    description: t('customs_desc'),
    keywords: t('customs_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}/servicios/agencia-aduanal`,
      languages: {
        'es': 'https://www.exlgp.com/es/servicios/agencia-aduanal',
        'en': 'https://www.exlgp.com/en/servicios/agencia-aduanal',
      }
    },
    openGraph: {
      title: t('customs_title'),
      description: t('customs_desc'),
      url: `https://www.exlgp.com/${locale}/servicios/agencia-aduanal`,
      siteName: 'EXL Group',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

export default function AgenciaAduanalPage() {
  const t = useTranslations('CustomsAgencyPage');

  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />

      <InnerHero
        category={t('category')}
        title={t('hero_title')}
        highlight={t('hero_highlight')}
        subtitle={t('hero_subtitle')}
      />

      <AgenciaAduanalClient />

      <Footer />
    </main>
  );
}
