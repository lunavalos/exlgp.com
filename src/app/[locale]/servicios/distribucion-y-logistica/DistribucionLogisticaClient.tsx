"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Route, Truck, Navigation, Cpu, ShieldAlert, Eye, Lock, ShieldCheck } from 'lucide-react';

export default function DistribucionLogisticaClient() {
  const t = useTranslations('DistributionLogisticsPage');

  const timelinePillars = [
    {
      num: "01",
      icon: Route,
      title: t('p1_title'),
      desc: t('p1_desc')
    },
    {
      num: "02",
      icon: Truck,
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
      icon: Cpu,
      title: t('m1_title'),
      desc: t('m1_desc')
    },
    {
      icon: ShieldAlert,
      title: t('m2_title'),
      desc: t('m2_desc')
    },
    {
      icon: Eye,
      title: t('m3_title'),
      desc: t('m3_desc')
    }
  ];

  return (
    <>
      {/* 1. SECTION 1: Split Showcase */}
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/distribucion-y-logistica.jpg" 
                alt="Flotilla de Distribución y Logística Transfronteriza - EXL Group"
                className="w-full h-[480px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Right Vertical Steps List */}
            <div className="lg:col-span-7 space-y-6">
              {timelinePillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 2: Technology & Security Showcase */}
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Featured Dark Card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 bg-[#08094d] text-white p-8 lg:p-10 rounded-3xl shadow-xl flex flex-col justify-between space-y-8 border border-blue-950"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#247DE1] text-white flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
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
            </motion.div>

            {/* Right Horizontal Feature Strips */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              {monitoringStrips.map((strip, idx) => {
                const Icon = strip.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm flex items-start gap-5 hover:border-[#247DE1] transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0 font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold font-primary text-slate-900">{strip.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{strip.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
