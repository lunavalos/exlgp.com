import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Warehouse, RefreshCw, Archive, ShieldCheck, Clock, Users, Factory } from 'lucide-react';

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
  const t = useTranslations('WarehousingPage');

  const warehousingPillars = [
    {
      icon: RefreshCw,
      title: t('p1_title'),
      desc: t('p1_desc')
    },
    {
      icon: Warehouse,
      title: t('p2_title'),
      desc: t('p2_desc')
    },
    {
      icon: Archive,
      title: t('p3_title'),
      desc: t('p3_desc')
    }
  ];

  const warehouseFeatures = [
    {
      icon: Factory,
      title: t('f1_title'),
      desc: t('f1_desc')
    },
    {
      icon: Users,
      title: t('f2_title'),
      desc: t('f2_desc')
    },
    {
      icon: ShieldCheck,
      title: t('f3_title'),
      desc: t('f3_desc')
    },
    {
      icon: Clock,
      title: t('f4_title'),
      desc: t('f4_desc')
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

      {/* Primary Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('sec1_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
              {t('sec1_title')} <span className="text-[#247DE1]">{t('sec1_highlight')}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('sec1_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warehousingPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 shadow-xs hover:shadow-lg hover:border-[#247DE1] transition-all space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0D0E9F] group-hover:bg-[#1E56C8] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-primary text-slate-900 group-hover:text-[#247DE1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Specialized Warehouse Capabilities */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('sec2_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
              {t('sec2_title')} <span className="text-[#247DE1]">{t('sec2_highlight')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warehouseFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0 font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-primary text-slate-900">{feat.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
