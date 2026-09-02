import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Target, Eye, HeartHandshake, Award, Globe2, Building2 } from 'lucide-react';

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

      {/* 1. Sobre Nosotros Section (Company Presentation Showcase) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo Frame with SEO Alt Tag */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/exl-building.jpg" 
                  alt="Sobre Nosotros - Instalaciones Corporativas y Oficinas de EXL Group"
                  className="w-full h-[480px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Story Text with H2 containing Keyword */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
                {t('sec_about_eyebrow')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900 leading-tight">
                {t('sec_about_title')} <span className="text-[#247DE1]">{t('sec_about_highlight')}</span>
              </h2>

              <p className="text-base text-gray-600 leading-relaxed font-normal">
                {t('sec_about_desc1')}
              </p>

              <p className="text-base text-gray-600 leading-relaxed font-normal">
                {t('sec_about_desc2')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#247DE1] shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t('iso_title')}</div>
                    <div className="text-xs text-gray-500">{t('iso_subtitle')}</div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center gap-3">
                  <Globe2 className="w-8 h-8 text-[#0D0E9F] shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t('border_title')}</div>
                    <div className="text-xs text-gray-500">{t('border_subtitle')}</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Misión, Visión y Valores Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
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
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#247DE1] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
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
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#247DE1] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
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
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#247DE1] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
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

      {/* 3. Valores que Nos Distinguen - Full-Width Narrative Text Section */}
      <section className="py-24 bg-white border-t border-slate-200/80">
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

      {/* 4. Strategic Locations Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('locations_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
              {t('locations_title')} <span className="text-[#247DE1]">{t('locations_highlight')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-3 hover:border-[#247DE1] transition-colors">
                <div className="flex items-center gap-2 text-[#0D0E9F]">
                  <Building2 className="w-5 h-5" />
                  <h3 className="text-lg font-bold font-primary text-slate-900">{loc.city}</h3>
                </div>
                <div className="text-xs font-bold text-[#247DE1] font-mono uppercase">{loc.role}</div>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">{loc.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Certifications Carousel */}
      <Certifications />

      <Footer />
    </main>
  );
}
