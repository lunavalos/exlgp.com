import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Eye, Lock, Smartphone, Database, BellRing, Shield, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function SeguridadEnviosPage() {
  const t = useTranslations('SecurityPage');

  const securityLayers = [
    {
      step: t('l1_step'),
      icon: BellRing,
      title: t('l1_title'),
      desc: t('l1_desc')
    },
    {
      step: t('l2_step'),
      icon: Lock,
      title: t('l2_title'),
      desc: t('l2_desc')
    },
    {
      step: t('l3_step'),
      icon: Database,
      title: t('l3_title'),
      desc: t('l3_desc')
    },
    {
      step: t('l4_step'),
      icon: Shield,
      title: t('l4_title'),
      desc: t('l4_desc')
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

      {/* 1. SECTION 1: Asymmetric Command Center Showcase */}
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Featured Dark Card */}
            <div className="lg:col-span-6 bg-[#08094d] text-white p-8 lg:p-12 rounded-3xl shadow-xl flex flex-col justify-between space-y-8 border border-blue-950">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-[#247DE1] text-white flex items-center justify-center">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold text-[#247DE1] uppercase tracking-wider block">
                  {t('center_eyebrow')}
                </span>
                <h3 className="text-3xl lg:text-4xl font-primary font-black !text-white leading-tight">
                  {t('center_title')}
                </h3>
                <p className="text-sm text-slate-200 font-normal leading-relaxed">
                  {t('center_desc')}
                </p>
              </div>

              <div className="p-4 bg-white/10 border border-white/15 rounded-2xl flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#247DE1] shrink-0" />
                <span className="text-xs font-bold text-white">{t('center_badge')}</span>
              </div>
            </div>

            {/* Right Stack */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              {/* Card 1 */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:border-[#247DE1] transition-all space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-primary text-slate-900">
                    {t('c1_title')}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {t('c1_desc')}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:border-[#247DE1] transition-all space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-primary text-slate-900">
                    {t('c2_title')}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {t('c2_desc')}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. SECTION 2: Layered Security Matrix */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityLayers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:border-[#247DE1] transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#247DE1] bg-blue-50 px-3 py-1 rounded-md">
                        {layer.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-primary text-slate-900">
                      {layer.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. SECTION 3: Full-Width Security Compliance Banner */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 lg:p-12 bg-gradient-to-r from-[#0D0E9F] to-[#08094d] text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold text-[#247DE1] uppercase tracking-widest block">
                {t('banner_eyebrow')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-primary font-black !text-white">
                {t('banner_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                {t('banner_desc')}
              </p>
            </div>

            <Link
              href="/contacto"
              className="bg-[#247DE1] hover:bg-blue-600 text-white px-7 py-3.5 rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer font-secondary"
            >
              <span>{t('banner_btn')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
