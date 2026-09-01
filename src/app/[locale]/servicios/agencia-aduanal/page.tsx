import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { FileCheck, Shield, CheckCircle, Search, FileText, BarChart3, RefreshCw, Layers, CheckSquare } from 'lucide-react';

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

  const customsPorts = [
    "Nuevo Laredo, Tamps.",
    "Colombia, N.L.",
    "Piedras Negras, Coah.",
    "Ciudad Juárez, Chih.",
    "Manzanillo, Col.",
    "Veracruz, Ver.",
    "Aeropuerto CDMX"
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

      {/* 6 Core Customs Services Grid */}
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
            {customsServices.map((item, idx) => {
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

      {/* Special Operations Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('ops_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
              {t('ops_title')} <span className="text-[#247DE1]">{t('ops_highlight')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOps.map((op, idx) => {
              const Icon = op.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-primary text-slate-900">{op.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{op.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Customs Ports Section */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] font-mono uppercase block">
              {t('ports_eyebrow')}
            </span>
            <h3 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
              {t('ports_title')} <span className="text-[#247DE1]">{t('ports_highlight')}</span>
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {t('ports_desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {customsPorts.map((port, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200/90 hover:border-[#247DE1] px-5 py-4 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-900 shadow-xs transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-[#247DE1] shrink-0" />
                <span>{port}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
