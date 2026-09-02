"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

export default function Hero() {
  const t = useTranslations('Hero');

  // Staggered entrance animation variants
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
        type: "spring" as const,
        stiffness: 90,
        damping: 16
      }
    }
  };

  const titleLine1Words = t('title_l1').split(' ');

  return (
    <section className="relative min-h-[88vh] pt-36 pb-32 lg:pt-48 lg:pb-40 overflow-hidden text-slate-900 flex items-center font-secondary">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.95]"
      >
        <source src="/Videos/exl-video.mp4" type="video/mp4" />
      </video>

      {/* Light Gradient Overlay to guarantee text legibility on the left while displaying video on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl lg:max-w-4xl">
          
          {/* Left Column Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-left"
          >
            {/* 1. Small Eyebrow Label */}
            <motion.div variants={itemVariants}>
              <span className="text-[12px] font-bold tracking-widest text-[#247DE1] uppercase font-mono block">
                {t('badge')}
              </span>
            </motion.div>

            {/* 2. Main Headline (Strictly 2 Lines) */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-primary font-black text-slate-900 tracking-tight leading-[1.15]"
            >
              <span className="block sm:whitespace-nowrap">
                {titleLine1Words.map((word, idx) => {
                  const lowerWord = word.toLowerCase();
                  const isHighlight = lowerWord.includes('innovaci') || lowerWord.includes('innovative');
                  return (
                    <span 
                      key={idx} 
                      className={isHighlight ? "text-[#247DE1]" : "text-slate-900"}
                    >
                      {word}{idx < titleLine1Words.length - 1 ? ' ' : ''}
                    </span>
                  );
                })}
              </span>
              <span className="block text-slate-900 sm:whitespace-nowrap">
                {t('title_l2')}
              </span>
            </motion.h1>

            {/* 3. Description Paragraph */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl"
            >
              {t('description')}
            </motion.p>

            {/* 4. Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="pt-3 flex flex-wrap items-center gap-4"
            >
              {/* Button 1: Solid Royal Blue Box */}
              <Link
                href="/servicios/viatpro"
                className="bg-[#1E56C8] hover:bg-[#1643a3] text-white px-7 py-3.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center"
              >
                {t('cta_primary')}
              </Link>

              {/* Button 2: White Box with Subtle Border -> Redirects to Contact */}
              <Link
                href="/contacto"
                className="bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 border border-slate-200 px-7 py-3.5 rounded-lg text-sm font-bold shadow-xs hover:shadow transition-all duration-200 cursor-pointer text-center"
              >
                {t('cta_secondary')}
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
