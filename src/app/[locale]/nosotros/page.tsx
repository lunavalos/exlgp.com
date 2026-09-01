import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { Target, Eye, HeartHandshake } from 'lucide-react';

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

  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />

      <InnerHero
        category={t('category')}
        title={t('hero_title')}
        highlight={t('hero_highlight')}
        subtitle={t('hero_subtitle')}
      />

      {/* Misión, Visión y Valores Section */}
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
            
            {/* Misión */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#247DE1] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-primary text-slate-900">
                {t('mision_title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {t('mision_desc')}
              </p>
            </div>

            {/* Visión */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#247DE1] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-primary text-slate-900">
                {t('vision_title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {t('vision_desc')}
              </p>
            </div>

            {/* Valores */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#247DE1] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-primary text-slate-900">
                {t('valores_title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {t('valores_desc')}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Valores que Nos Distinguen - Full-Width Narrative Text Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('sec2_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
              {t('sec2_title')} <span className="text-[#247DE1]">{t('sec2_highlight')}</span>
            </h2>
          </div>

          <div className="space-y-12">
            {companyValues.map((val, idx) => (
              <div 
                key={idx}
                className="flex flex-col md:flex-row items-start gap-4 md:gap-8 pb-10 border-b border-slate-200/80 last:border-b-0 last:pb-0"
              >
                <span className="text-xl sm:text-2xl font-mono font-bold text-[#247DE1] shrink-0 pt-1">
                  {val.num}
                </span>

                <div className="space-y-2 max-w-4xl">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold font-primary text-slate-900">
                    {val.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Certifications Carousel (Retained on Nosotros Page) */}
      <Certifications />

      <Footer />
    </main>
  );
}
