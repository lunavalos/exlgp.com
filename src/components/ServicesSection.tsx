"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useRef, useEffect } from 'react';

export default function ServicesSection() {
  const t = useTranslations('Services');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Exact 3 key services on Index page
  const indexServices = [
    {
      title: t('s1_title'),
      desc: t('s1_desc'),
      feature: t('s1_feature'),
      img: "/images/viatprotrack.png",
      href: "/servicios/viatpro"
    },
    {
      title: t('s2_title'),
      desc: t('s2_desc'),
      feature: t('s2_feature'),
      img: "/images/exl-building.jpg",
      href: "/servicios/agencia-aduanal"
    },
    {
      title: t('s3_title'),
      desc: t('s3_desc'),
      feature: t('s3_feature'),
      img: "/images/distribucion-y-logistica.jpg",
      href: "/servicios/distribucion-y-logistica"
    }
  ];

  // Auto-play interval for mobile horizontal carousel (advances every 4s)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="soluciones" className="py-28 bg-slate-50 border-t border-slate-200/70 text-slate-800 relative overflow-hidden font-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Blue Keyword Highlight */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-primary font-black text-slate-900 tracking-tight"
          >
            {t('title')} <span className="text-[#247DE1]">{t('highlight')}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-gray-600 font-normal max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center justify-end gap-2 mb-4">
          <button 
            onClick={handleScrollLeft}
            aria-label="Previous service"
            className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 active:bg-slate-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleScrollRight}
            aria-label="Next service"
            className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 active:bg-slate-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Horizontal Carousel & Desktop Grid */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0"
        >
          {indexServices.map((srv, idx) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 group flex flex-col justify-between snap-start shrink-0 md:shrink"
            >
              <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-100 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={srv.img} 
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-primary text-slate-900 group-hover:text-[#247DE1] transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal pt-2">
                    {srv.desc}
                  </p>
                </div>

                {/* Plain Text Action Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold font-mono text-[#247DE1] uppercase tracking-wider">
                    {srv.feature}
                  </span>

                  <Link
                    href={srv.href}
                    className="text-xs font-bold text-[#1E56C8] hover:text-[#0D0E9F] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer font-secondary"
                  >
                    <span>{t('btn_more')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#1E56C8]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/servicios"
            className="bg-[#1E56C8] hover:bg-[#1643a3] text-white px-8 py-3.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2 cursor-pointer font-secondary"
          >
            <span>{t('btn_view_all')}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}
