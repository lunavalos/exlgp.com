import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import ContactoClient from './ContactoClient';
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
    title: t('contact_title'),
    description: t('contact_desc'),
    keywords: t('contact_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}/contacto`,
      languages: {
        'es': 'https://www.exlgp.com/es/contacto',
        'en': 'https://www.exlgp.com/en/contacto',
      }
    },
    openGraph: {
      title: t('contact_title'),
      description: t('contact_desc'),
      url: `https://www.exlgp.com/${locale}/contacto`,
      siteName: 'EXL Group',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

export default function ContactoPage() {
  const t = useTranslations('ContactPage');

  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />

      <InnerHero
        category={t('category')}
        title={t('hero_title')}
        highlight={t('hero_highlight')}
        subtitle={t('hero_subtitle')}
      />

      <ContactoClient />

      <Footer />
    </main>
  );
}
