"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FileCheck, Shield, CheckCircle, Search, FileText, BarChart3, RefreshCw, Layers, CheckSquare } from 'lucide-react';

export default function AgenciaAduanalClient() {
  const t = useTranslations('CustomsAgencyPage');

  const customsServices = [
    {
      icon: Search,
      title: t('s1_title'),
      desc: t('s1_desc')
    },
    {
      icon: FileCheck,
      title: t('s2_title'),
      desc: t('s2_desc')
    },
    {
      icon: Shield,
      title: t('s3_title'),
      desc: t('s3_desc')
    },
    {
      icon: FileText,
      title: t('s4_title'),
      desc: t('s4_desc')
    },
    {
      icon: CheckSquare,
      title: t('s5_title'),
      desc: t('s5_desc')
    },
    {
      icon: BarChart3,
      title: t('s6_title'),
      desc: t('s6_desc')
    }
  ];

  const specialOps = [
    {
      icon: RefreshCw,
      title: t('op1_title'),
      desc: t('op1_desc')
    },
    {
      icon: Layers,
      title: t('op2_title'),
      desc: t('op2_desc')
    },
    {
      icon: CheckCircle,
      title: t('op3_title'),
      desc: t('op3_desc')
    }
  ];

  return (
    <>
      {/* 1. SECTION 1: Servicios Integrales de Agencia Aduanal */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customsServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#0D0E9F] border border-slate-200 group-hover:bg-[#1E56C8] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold font-primary text-slate-900 group-hover:text-[#247DE1] transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. SECTION 2: Operaciones Especiales y Regímenes Aduaneros */}
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
              {t('ops_eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-[#0D0E9F]">
              {t('ops_title')} {t('ops_highlight')}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t('ops_desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOps.map((op, idx) => {
              const Icon = op.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold font-primary text-slate-900">
                      {op.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {op.desc}
                    </p>
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
