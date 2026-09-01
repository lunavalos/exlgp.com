import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function ServicesHubPage() {
  const tServices = useTranslations('Services');
  const tHub = useTranslations('ServicesHub');

  const allServices = [
    {
      title: tServices('s1_title'),
      desc: tServices('s1_desc'),
      feature: tServices('s1_feature'),
      img: "/images/viatprotrack.png",
      href: "/servicios/viatpro"
    },
    {
      title: tServices('s2_title'),
      desc: tServices('s2_desc'),
      feature: tServices('s2_feature'),
      img: "/images/exl-building.jpg",
      href: "/servicios/agencia-aduanal"
    },
    {
      title: tServices('s3_title'),
      desc: tServices('s3_desc'),
      feature: tServices('s3_feature'),
      img: "/images/distribucion-y-logistica.jpg",
      href: "/servicios/distribucion-y-logistica"
    },
    {
      title: tServices('s4_title'),
      desc: tServices('s4_desc'),
      feature: tServices('s4_feature'),
      img: "/images/reenvioyalmacenamiento.jpg",
      href: "/servicios/reenvio-y-almacenamiento"
    },
    {
      title: tServices('s5_title'),
      desc: tServices('s5_desc'),
      feature: tServices('s5_feature'),
      img: "/images/srvc-mineria.jpg",
      href: "/servicios/seguridad-de-envios"
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

      <section className="py-24 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {tHub('sec_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
              {tHub('sec_title')} <span className="text-[#247DE1]">{tHub('sec_highlight')}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {tHub('sec_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((srv) => (
              <div
                key={srv.title}
                className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-slate-100 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={srv.img} 
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-primary text-slate-900 group-hover:text-[#247DE1] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed pt-2">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Plain Text Feature Tag + Plain Text Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold font-mono text-[#247DE1] uppercase tracking-wider">
                      {srv.feature}
                    </span>

                    <Link
                      href={srv.href}
                      className="text-xs font-bold text-[#1E56C8] hover:text-[#0D0E9F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer font-secondary"
                    >
                      <span>{tServices('btn_more')}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#1E56C8]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
