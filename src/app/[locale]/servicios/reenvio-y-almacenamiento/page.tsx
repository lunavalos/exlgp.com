import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import ReenvioAlmacenamientoClient from './ReenvioAlmacenamientoClient';
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
    title: t('warehousing_title'),
    description: t('warehousing_desc'),
    keywords: t('warehousing_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}/servicios/reenvio-y-almacenamiento`,
      languages: {
        'es': 'https://www.exlgp.com/es/servicios/reenvio-y-almacenamiento',
        'en': 'https://www.exlgp.com/en/servicios/reenvio-y-almacenamiento',
      }
    },
    openGraph: {
      title: t('warehousing_title'),
      description: t('warehousing_desc'),
      url: `https://www.exlgp.com/${locale}/servicios/reenvio-y-almacenamiento`,
      siteName: 'EXL Group',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

export default function ReenvioAlmacenamientoPage() {
  const t = useTranslations('ForwardingWarehousingPage');

  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />

      <InnerHero
        category={t('category')}
        title={t('hero_title')}
        highlight={t('hero_highlight')}
        subtitle={t('hero_subtitle')}
      />

      <ReenvioAlmacenamientoClient />

      <Footer />
    </main>
  );
}
