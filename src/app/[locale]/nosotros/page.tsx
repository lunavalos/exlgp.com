import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import NosotrosClient from './NosotrosClient';
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
    title: t('about_title'),
    description: t('about_desc'),
    keywords: t('about_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}/nosotros`,
      languages: {
        'es': 'https://www.exlgp.com/es/nosotros',
        'en': 'https://www.exlgp.com/en/nosotros',
      }
    },
    openGraph: {
      title: t('about_title'),
      description: t('about_desc'),
      url: `https://www.exlgp.com/${locale}/nosotros`,
      siteName: 'EXL Group',
      images: [
        {
          url: '/images/exl-building.jpg',
          width: 1200,
          height: 630,
          alt: 'Sobre Nosotros - Instalaciones de EXL Group',
        }
      ],
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

export default function NosotrosPage() {
  const t = useTranslations('CompanyPage');

  const companyValues = [
    {
      num: "01",
      title: t('v1_title'),
      desc: t('v1_desc')
    },
    {
      num: "02",
      title: t('v2_title'),
      desc: t('v2_desc')
    },
    {
      num: "03",
      title: t('v3_title'),
      desc: t('v3_desc')
    },
    {
      num: "04",
      title: t('v4_title'),
      desc: t('v4_desc')
    }
  ];

  const locations = [
    {
      city: t('loc1_city'),
      role: t('loc1_role'),
      desc: t('loc1_desc')
    },
    {
      city: t('loc2_city'),
      role: t('loc2_role'),
      desc: t('loc2_desc')
    },
    {
      city: t('loc3_city'),
      role: t('loc3_role'),
      desc: t('loc3_desc')
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />

      <InnerHero
        category={t('category')}
        title={t('hero_title')}
        highlight={t('hero_highlight')}
        subtitle={t('hero_subtitle')}
      />

      <NosotrosClient
        secAboutEyebrow={t('sec_about_eyebrow')}
        secAboutTitle={t('sec_about_title')}
        secAboutHighlight={t('sec_about_highlight')}
        secAboutDesc1={t('sec_about_desc1')}
        secAboutDesc2={t('sec_about_desc2')}
        isoTitle={t('iso_title')}
        isoSubtitle={t('iso_subtitle')}
        borderTitle={t('border_title')}
        borderSubtitle={t('border_subtitle')}
        sec1Eyebrow={t('sec1_eyebrow')}
        sec1Title={t('sec1_title')}
        sec1Highlight={t('sec1_highlight')}
        sec1Desc={t('sec1_desc')}
        misionTitle={t('mision_title')}
        misionDesc={t('mision_desc')}
        visionTitle={t('vision_title')}
        visionDesc={t('vision_desc')}
        valoresTitle={t('valores_title')}
        valoresDesc={t('valores_desc')}
        sec2Eyebrow={t('sec2_eyebrow')}
        sec2Title={t('sec2_title')}
        sec2Highlight={t('sec2_highlight')}
        companyValues={companyValues}
        locationsEyebrow={t('locations_eyebrow')}
        locationsTitle={t('locations_title')}
        locationsHighlight={t('locations_highlight')}
        locations={locations}
      />

      <Footer />
    </main>
  );
}
