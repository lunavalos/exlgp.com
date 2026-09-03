import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import ServicesHubClient from './ServicesHubClient';
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
    title: t('services_title'),
    description: t('services_desc'),
    keywords: t('services_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}/servicios`,
      languages: {
        'es': 'https://www.exlgp.com/es/servicios',
        'en': 'https://www.exlgp.com/en/servicios',
      }
    },
    openGraph: {
      title: t('services_title'),
      description: t('services_desc'),
      url: `https://www.exlgp.com/${locale}/servicios`,
      siteName: 'EXL Group',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

export default function ServicesHubPage() {
  const tServices = useTranslations('Services');
  const tHub = useTranslations('ServicesHub');

  const allServices = [
    {
      title: tServices('s1_title'),
      desc: tServices('s1_desc'),
      feature: tServices('s1_feature'),
      img: "/images/viatprotrack.png",
      href: "/servicios/viatpro" as const
    },
    {
      title: tServices('s2_title'),
      desc: tServices('s2_desc'),
      feature: tServices('s2_feature'),
      img: "/images/exl-building.jpg",
      href: "/servicios/agencia-aduanal" as const
    },
    {
      title: tServices('s3_title'),
      desc: tServices('s3_desc'),
      feature: tServices('s3_feature'),
      img: "/images/distribucion-y-logistica.jpg",
      href: "/servicios/distribucion-y-logistica" as const
    },
    {
      title: tServices('s4_title'),
      desc: tServices('s4_desc'),
      feature: tServices('s4_feature'),
      img: "/images/reenvioyalmacenamiento.jpg",
      href: "/servicios/reenvio-y-almacenamiento" as const
    },
    {
      title: tServices('s5_title'),
      desc: tServices('s5_desc'),
      feature: tServices('s5_feature'),
      img: "/images/srvc-mineria.jpg",
      href: "/servicios/seguridad-de-envios" as const
    }
  ];


  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />

      <InnerHero
        category={tHub('category')}
        title={tHub('title')}
        highlight={tHub('highlight')}
        subtitle={tHub('subtitle')}
      />

      <ServicesHubClient
        eyebrow={tHub('sec_eyebrow')}
        title={tHub('sec_title')}
        highlight={tHub('sec_highlight')}
        desc={tHub('sec_desc')}
        services={allServices}
      />

      <Footer />
    </main>
  );
}
