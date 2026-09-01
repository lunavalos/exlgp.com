import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { Truck, ArrowLeftRight, Navigation, Camera, FileSpreadsheet, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DistribucionLogisticaPage() {
  const t = useTranslations('LogisticsPage');

  const timelinePillars = [
    {
      num: "01",
      icon: Truck,
      title: t('p1_title'),
      desc: t('p1_desc')
    },
    {
      num: "02",
      icon: ArrowLeftRight,
      title: t('p2_title'),
      desc: t('p2_desc')
    },
    {
      num: "03",
      icon: Navigation,
      title: t('p3_title'),
      desc: t('p3_desc')
    }
  ];

  const monitoringStrips = [
    {
      icon: FileSpreadsheet,
      title: t('s1_title'),
      desc: t('s1_desc')
    },
    {
      icon: Camera,
      title: t('s2_title'),
      desc: t('s2_desc')
    },
    {
      icon: CheckCircle2,
      title: t('s3_title'),
      desc: t('s3_desc')
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

      {/* 1. SECTION 1: Split Showcase */}
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Photo Frame */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/distribucion-y-logistica.jpg" 
                alt="Distribución y Logística EXL Group"
                className="w-full h-[480px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Vertical Steps List */}
            <div className="lg:col-span-7 space-y-6">
              {timelinePillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 bg-slate-50 border border-slate-200/90 rounded-3xl hover:border-[#247DE1] hover:bg-white hover:shadow-lg transition-all duration-300 flex items-start gap-5 group"
                  >
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-2xl font-mono font-black text-[#247DE1]">
                        {item.num}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-[#0D0E9F] group-hover:bg-[#1E56C8] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-1 pt-0.5">
                      <h3 className="text-lg font-bold font-primary text-slate-900 group-hover:text-[#247DE1] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 2. SECTION 2: Technology & Security Showcase */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('sec2_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
              {t('sec2_title')} <span className="text-[#247DE1]">{t('sec2_highlight')}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('sec2_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Featured Dark Card */}
            <div className="lg:col-span-5 bg-[#08094d] text-white p-8 lg:p-10 rounded-3xl shadow-xl flex flex-col justify-between space-y-8 border border-blue-950">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#247DE1] text-white flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#247DE1] uppercase tracking-wider block">
                  {t('seal_eyebrow')}
                </span>
                <h3 className="text-2xl lg:text-3xl font-primary font-black !text-white leading-tight">
                  {t('seal_title')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                  {t('seal_desc')}
                </p>
              </div>

              <div className="p-4 bg-white/10 border border-white/15 rounded-2xl flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#247DE1] shrink-0" />
                <span className="text-xs font-bold text-white">{t('seal_badge')}</span>
              </div>
            </div>

            {/* Right Horizontal Feature Strips */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              {monitoringStrips.map((strip, idx) => {
                const Icon = strip.icon;
                return (
                  <div key={idx} className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm flex items-start gap-5 hover:border-[#247DE1] transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0 font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold font-primary text-slate-900">{strip.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{strip.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
