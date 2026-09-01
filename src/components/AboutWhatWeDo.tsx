"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function AboutWhatWeDo() {
  const t = useTranslations('AboutWhatWeDo');

  return (
    <section id="que-hacemos" className="py-28 bg-white border-t border-slate-200/70 text-slate-800 relative overflow-hidden font-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bento Grid Layout (100% faithful to media_1788290777281.png with high contrast fixes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Large Left Featured Box (6/12 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-5">
              <span className="text-[12px] font-bold tracking-widest text-[#247DE1] uppercase font-mono block">
                {t('eyebrow')}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-primary font-black text-[#0D0E9F] leading-[1.15] tracking-tight">
                {t('title')} <span className="text-[#247DE1]">{t('highlight')}</span>
              </h2>

              <p className="text-base text-gray-600 leading-relaxed font-normal pt-1">
                {t('subtitle')}
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/servicios/viatpro"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#247DE1] hover:text-[#0D0E9F] transition-colors cursor-pointer"
              >
                <span>{t('card1_link')}</span>
                <ArrowRight className="w-4 h-4 text-[#247DE1]" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column Stack (6/12 Columns containing 3 Bento Cards) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 2: Stat Card (+25 Years - Royal Blue Box bg-[#1E56C8]) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1E56C8] text-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-blue-100 block">
                {t('card2_eyebrow')}
              </span>

              <div className="space-y-1">
                <div className="text-5xl lg:text-6xl font-black font-primary !text-white">
                  {t('card2_years')}
                </div>
                <div className="text-sm font-semibold text-blue-100">
                  {t('card2_label')}
                </div>
              </div>
            </motion.div>

            {/* Card 3: Dark Navy Card (#08094d) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#08094d] text-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 border border-blue-950"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#247DE1] text-white flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#247DE1] block mb-1">
                  {t('card3_eyebrow')}
                </span>
                <h3 className="text-xl font-bold font-primary !text-white">
                  {t('card3_title')}
                </h3>
                <p className="text-xs text-gray-300 font-normal">
                  {t('card3_desc')}
                </p>
              </div>
            </motion.div>

            {/* Card 4: Bottom Full Width Horizontal Dark Blue Banner (#0D0E9F) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sm:col-span-2 bg-[#0D0E9F] text-white rounded-3xl p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#247DE1] block">
                  {t('card4_eyebrow')}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-primary !text-white leading-snug max-w-md">
                  {t('card4_desc')}
                </h3>
              </div>

              <Link
                href="/servicios/distribucion-y-logistica"
                className="w-12 h-12 rounded-full bg-white text-[#0D0E9F] hover:bg-blue-50 flex items-center justify-center shrink-0 shadow-md hover:scale-105 transition-all cursor-pointer"
                aria-label={t('card4_desc')}
              >
                <ArrowRight className="w-5 h-5 text-[#0D0E9F]" />
              </Link>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
