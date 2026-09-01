"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

export default function Hero() {
  const t = useTranslations('Hero');

  const titleLine1Words = t('title_l1').split(' ');
  const titleLine2Words = t('title_l2').split(' ');

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(12px)", 
      y: 16 
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.15 + i * 0.08,
        ease: [0.25, 0.4, 0.25, 1]
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16
      }
    }
  };

  return (
    <section className="relative min-h-[88vh] pt-36 pb-32 lg:pt-48 lg:pb-40 overflow-hidden text-slate-900 flex items-center font-secondary">
      
      {/* Background Video exl-video.mp4 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.95]"
      >
        <source src="/videos/exl-video.mp4" type="video/mp4" />
      </video>

      {/* Light Overlay for 100% legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-4xl">
          
          {/* Left Column Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7 text-left"
          >
            {/* 1. Eyebrow Label */}
            <motion.div variants={itemVariants}>
              <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
                {t('badge')}
              </span>
            </motion.div>

            {/* 2. Main Headline with Pitch.com Blur-to-Clear Word Animation */}
            <motion.h1 
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-[56px] font-primary font-black text-slate-900 tracking-tight leading-[1.15] max-w-3xl whitespace-normal"
            >
              {/* Line 1: Soluciones de (black) Innovación (blue) / Innovative (blue) Solutions (black) */}
              <span className="inline-block mr-2">
                {titleLine1Words.map((word, index) => {
                  const isBlue = word.toLowerCase().includes('innovaci') || word.toLowerCase().includes('innovative');
                  return (
                    <motion.span
                      key={`l1-${index}`}
                      custom={index}
                      variants={wordVariants}
                      className={`inline-block mr-2 ${isBlue ? 'text-[#247DE1]' : 'text-slate-900'}`}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </span>

              {/* Line 2: en Procesos Aduanales. (all black) / in Customs Processes. (all black) */}
              <span className="block mt-1 sm:mt-2">
                {titleLine2Words.map((word, index) => (
                  <motion.span
                    key={`l2-${index}`}
                    custom={index + titleLine1Words.length}
                    variants={wordVariants}
                    className="inline-block mr-2 text-slate-900"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* 3. Subtitle Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl"
            >
              {t('description')}
            </motion.p>

            {/* 4. Action Buttons Bar */}
            <motion.div 
              variants={itemVariants}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="/servicios/viatpro"
                className="bg-[#1E56C8] hover:bg-[#1643a3] text-white px-8 py-4 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 text-center font-secondary cursor-pointer"
              >
                {t('cta_primary')}
              </Link>

              <a
                href="#plataforma"
                className="bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 px-8 py-4 rounded-xl text-xs font-bold shadow-2xs hover:shadow-sm transition-all duration-200 text-center font-secondary cursor-pointer"
              >
                {t('cta_secondary')}
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}
