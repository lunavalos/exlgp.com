"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Eye, ShieldCheck, Smartphone, Lock, Video, KeyRound, Radio } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function SeguridadEnviosClient() {
  const t = useTranslations('ShipmentSecurityPage');

  const securityLayers = [
    {
      step: "01",
      icon: Radio,
      title: t('l1_title'),
      desc: t('l1_desc')
    },
    {
      step: "02",
      icon: Lock,
      title: t('l2_title'),
      desc: t('l2_desc')
    },
    {
      step: "03",
      icon: Video,
      title: t('l3_title'),
      desc: t('l3_desc')
    },
    {
      step: "04",
      icon: KeyRound,
      title: t('l4_title'),
      desc: t('l4_desc')
    }
  ];

  return (
    <>
      {/* 1. SECTION 1: C2 Monitoring Center Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('sec1_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
              {t('sec1_title')} <span className="text-[#247DE1]">{t('sec1_highlight')}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('sec1_desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Featured Dark Card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 bg-[#08094d] text-white p-8 lg:p-12 rounded-3xl shadow-xl flex flex-col justify-between space-y-8 border border-blue-950"
            >
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-[#247DE1] text-white flex items-center justify-center font-bold">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
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
                <span className="text-xs font-bold text-slate-100">{t('center_badge')}</span>
              </div>
            </motion.div>

            {/* Right Stack: 2 Sleek Interactive Cards */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              {/* Card 1: Protocolos y Certificaciones */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-xs hover:border-[#247DE1] transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-primary text-slate-900">{t('c1_title')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {t('c1_desc')}
                </p>
              </motion.div>

              {/* Card 2: Portal del Cliente */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-xs hover:border-[#247DE1] transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-primary text-slate-900">{t('c2_title')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {t('c2_desc')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 2: 4 Capas de Protección Integral */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {t('sec2_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-[#0D0E9F]">
              {t('sec2_title')} {t('sec2_highlight')}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('sec2_desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityLayers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#247DE1] bg-blue-50 px-2.5 py-1 rounded-md">
                        {layer.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-primary text-slate-900 leading-snug">
                      {layer.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {layer.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Security Assurance Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#08094d] text-white p-8 lg:p-10 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0 font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-primary !text-white">
                  {t('banner_title')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal">
                  {t('banner_desc')}
                </p>
              </div>
            </div>

            <Link
              href="/contacto"
              className="bg-[#1E56C8] hover:bg-[#1643a3] text-white px-7 py-3 rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer font-secondary"
            >
              {t('banner_btn')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
