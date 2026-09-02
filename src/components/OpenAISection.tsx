"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Cpu, ShieldCheck, BarChart3, Zap, Globe2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function OpenAISection() {
  const tHero = useTranslations('Hero');
  const tOpenAI = useTranslations('OpenAISection');
  const tc = useTranslations('Cards');

  const cards = [
    {
      icon: Layers,
      title: tc('card1_title'),
      desc: tc('card1_desc')
    },
    {
      icon: Cpu,
      title: tc('card2_title'),
      desc: tc('card2_desc')
    },
    {
      icon: ShieldCheck,
      title: tc('card3_title'),
      desc: tc('card3_desc')
    },
    {
      icon: BarChart3,
      title: tc('card4_title'),
      desc: tc('card4_desc')
    },
    {
      icon: Zap,
      title: tc('card5_title'),
      desc: tc('card5_desc')
    },
    {
      icon: Globe2,
      title: tc('card6_title'),
      desc: tc('card6_desc')
    }
  ];

  // Pitch-style Staggered grid container variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 16
      }
    }
  };

  return (
    <section id="plataforma" className="py-28 bg-slate-50 border-t border-slate-200/70 text-slate-800 relative overflow-hidden font-secondary">
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
            {tOpenAI('title')} <span className="text-[#247DE1]">{tOpenAI('highlight')}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-gray-600 font-normal max-w-2xl mx-auto"
          >
            {tOpenAI('subtitle')}
          </motion.p>
        </div>

        {/* Big Announcement Card Container: WHITE background + border border-slate-200/90 (Same style as small cards below) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 text-slate-800 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-3 z-10 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#247DE1] block">
              {tHero('badge')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-primary font-black text-slate-900 leading-snug">
              {tHero('announcement_title')}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              {tHero('announcement_desc')}
            </p>
          </div>

          <Link
            href="/servicios/viatpro"
            className="bg-[#1E56C8] hover:bg-[#1643a3] text-white px-7 py-3.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 shrink-0 z-10 cursor-pointer font-secondary"
          >
            <span>{tHero('announcement_link')}</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </Link>
        </motion.div>

        {/* 6 Grid Cards */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D0E9F] group-hover:bg-[#1E56C8] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-primary text-slate-900 group-hover:text-[#247DE1] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
