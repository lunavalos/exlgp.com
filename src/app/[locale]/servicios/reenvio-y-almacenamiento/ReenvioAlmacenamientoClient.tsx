"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Warehouse, ArrowDownToDot, RefreshCw, Layers, ShieldCheck, ThermometerSnowflake, PackageCheck } from 'lucide-react';

export default function ReenvioAlmacenamientoClient() {
  const t = useTranslations('ForwardingWarehousingPage');

  const warehousingPillars = [
    {
      icon: Warehouse,
      title: t('p1_title'),
      desc: t('p1_desc')
    },
    {
      icon: ArrowDownToDot,
      title: t('p2_title'),
      desc: t('p2_desc')
    },
    {
      icon: RefreshCw,
      title: t('p3_title'),
      desc: t('p3_desc')
    }
  ];

  const warehouseFeatures = [
    {
      icon: Layers,
      title: t('f1_title'),
      desc: t('f1_desc')
    },
    {
      icon: ShieldCheck,
      title: t('f2_title'),
      desc: t('f2_desc')
    },
    {
      icon: ThermometerSnowflake,
      title: t('f3_title'),
      desc: t('f3_desc')
    },
    {
      icon: PackageCheck,
      title: t('f4_title'),
      desc: t('f4_desc')
    }
  ];

  return (
    <>
      {/* Primary Pillars */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warehousingPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 shadow-xs hover:shadow-lg hover:border-[#247DE1] transition-all space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0D0E9F] group-hover:bg-[#1E56C8] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-primary text-slate-900 group-hover:text-[#247DE1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Warehouse Capabilities */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warehouseFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0 font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-primary text-slate-900">{feat.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
