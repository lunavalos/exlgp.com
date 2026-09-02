import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { 
  FileText, Bell, Truck, ShieldCheck, CheckCircle2, 
  Monitor, Users, Navigation, MapPin, 
  AlertTriangle, Shield, Warehouse, Camera, 
  BarChart2, ArrowRight
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});

  return {
    title: t('viatpro_title'),
    description: t('viatpro_desc'),
    keywords: t('viatpro_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}/servicios/viatpro`,
      languages: {
        'es': 'https://www.exlgp.com/es/servicios/viatpro',
        'en': 'https://www.exlgp.com/en/servicios/viatpro',
      }
    },
    openGraph: {
      title: t('viatpro_title'),
      description: t('viatpro_desc'),
      url: `https://www.exlgp.com/${locale}/servicios/viatpro`,
      siteName: 'EXL Group',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

export default function ViatProIndividualPage() {
  const t = useTranslations('ViatProPage');
  
  const steps = [
    {
      num: "01",
      icon: FileText,
      title: t('step1_title'),
      desc: t('step1_desc')
    },
    {
      num: "02",
      icon: Bell,
      title: t('step2_title'),
      desc: t('step2_desc')
    },
    {
      num: "03",
      icon: Truck,
      title: t('step3_title'),
      desc: t('step3_desc')
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: t('step4_title'),
      desc: t('step4_desc')
    },
    {
      num: "05",
      icon: ShieldCheck,
      title: t('step5_title'),
      desc: t('step5_desc')
    },
    {
      num: "06",
      icon: CheckCircle2,
      title: t('step6_title'),
      desc: t('step6_desc')
    }
  ];

  const trackFeatures = [
    {
      icon: Bell,
      title: t('t1_title'),
      desc: t('t1_desc')
    },
    {
      icon: Navigation,
      title: t('t2_title'),
      desc: t('t2_desc')
    },
    {
      icon: AlertTriangle,
      title: t('t3_title'),
      desc: t('t3_desc')
    },
    {
      icon: MapPin,
      title: t('t4_title'),
      desc: t('t4_desc')
    }
  ];

  const wmsFeatures = [
    {
      icon: Warehouse,
      title: t('w1_title'),
      desc: t('w1_desc')
    },
    {
      icon: Camera,
      title: t('w2_title'),
      desc: t('w2_desc')
    },
    {
      icon: BarChart2,
      title: t('w3_title'),
      desc: t('w3_desc')
    },
    {
      icon: Users,
      title: t('w4_title'),
      desc: t('w4_desc')
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

      {/* 1. Step-by-step Process Engine */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('flow_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
              {t('flow_title')} <span className="text-[#247DE1]">{t('flow_highlight')}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('flow_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#247DE1] bg-blue-50 px-3 py-1 rounded-md">
                        Step {step.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-primary text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. Sub-module: ViatPro Track */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('track_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-[#0D0E9F]">
              {t('track_title')} {t('track_highlight')}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('track_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trackFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D0E9F] border border-slate-200 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-primary text-slate-900">{feat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">{feat.desc}</p>
                </div>
              );
            })}
          </div>

          {/* C-TPAT Banner */}
          <div className="p-8 lg:p-10 bg-[#08094d] text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold uppercase">
                <Shield className="w-4 h-4" />
                <span>{t('ctpat_eyebrow')}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-primary font-black !text-white">
                {t('ctpat_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                {t('ctpat_desc')}
              </p>
            </div>

            <Link
              href="/contacto"
              className="bg-[#1E56C8] hover:bg-[#1643a3] text-white px-7 py-3 rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer font-secondary"
            >
              {t('ctpat_btn')}
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Sub-module: ViatPro WMS */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('wms_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-[#0D0E9F]">
              {t('wms_title')} {t('wms_highlight')}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('wms_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wmsFeatures.map((wms, idx) => {
              const Icon = wms.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0D0E9F] flex items-center justify-center shrink-0 font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-primary text-slate-900">{wms.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">{wms.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Mobile App & Demo Call to Action */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left App Capabilities List */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
                {t('app_eyebrow')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-primary font-black text-[#0D0E9F]">
                {t('app_title')} {t('app_highlight')}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                {t('app_desc')}
              </p>
            </div>

            {/* Right Request Demo Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0D0E9F] to-[#08094d] text-white p-8 lg:p-10 rounded-3xl shadow-xl space-y-6">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                {t('demo_eyebrow')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-primary font-black !text-white">
                {t('demo_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                {t('demo_desc')}
              </p>
              
              <Link
                href="/contacto"
                className="w-full bg-[#247DE1] hover:bg-blue-600 text-white py-3.5 rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer font-secondary"
              >
                <span>{t('demo_btn')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
