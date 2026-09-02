import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { FileCheck, Shield, CheckCircle, Search, FileText, BarChart3, RefreshCw, Layers, CheckSquare } from 'lucide-react';

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

  const customsServices = [
    {
      icon: Search,
      title: t('s1_title'),
      desc: t('s1_desc')
    },
    {
      icon: FileCheck,
      title: t('s2_title'),
      desc: t('s2_desc')
    },
    {
      icon: Shield,
      title: t('s3_title'),
      desc: t('s3_desc')
    },
    {
      icon: FileText,
      title: t('s4_title'),
      desc: t('s4_desc')
    },
    {
      icon: CheckSquare,
      title: t('s5_title'),
      desc: t('s5_desc')
    },
    {
      icon: BarChart3,
      title: t('s6_title'),
      desc: t('s6_desc')
    }
  ];

  const specialOps = [
    {
      icon: RefreshCw,
      title: t('op1_title'),
      desc: t('op1_desc')
    },
    {
      icon: Layers,
      title: t('op2_title'),
      desc: t('op2_desc')
    },
    {
      icon: CheckCircle,
      title: t('op3_title'),
      desc: t('op3_desc')
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

      {/* 1. SECTION 1: Servicios Integrales de Agencia Aduanal */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customsServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#0D0E9F] border border-slate-200 group-hover:bg-[#1E56C8] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold font-primary text-slate-900 group-hover:text-[#247DE1] transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. SECTION 2: Operaciones Especiales y Regímenes Aduaneros */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('ops_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-[#0D0E9F]">
              {t('ops_title')} {t('ops_highlight')}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('ops_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOps.map((op, idx) => {
              const Icon = op.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold font-primary text-slate-900">
                      {op.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {op.desc}
                    </p>
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
