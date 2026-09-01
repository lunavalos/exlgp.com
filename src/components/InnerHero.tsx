"use client";

import { motion } from 'framer-motion';

interface InnerHeroProps {
  category?: string;
  title: string;
  highlight: string;
  subtitle: string;
}

export default function InnerHero({
  category = "CADENA DE SUMINISTRO & ADUANAS",
  title,
  highlight,
  subtitle
}: InnerHeroProps) {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-[#08094d] text-white overflow-hidden font-secondary">
      {/* Background Photo Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay z-0"
        style={{ backgroundImage: `url('/images/EXLGroup-building-scaled.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08094d]/95 via-[#0D0E9F]/85 to-[#08094d] z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header Content Container */}
        <div className="max-w-4xl lg:max-w-5xl space-y-4">
          
          {/* Eyebrow Category Title (PURE WHITE TEXT for all internal pages) */}
          <div className="block">
            <span className="text-xs font-bold tracking-widest !text-white uppercase font-mono">
              {category}
            </span>
          </div>

          {/* Main Headline (PURE WHITE TEXT) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-primary font-black !text-white tracking-tight leading-[1.15]"
          >
            {title} <span className="text-[#247DE1] block sm:inline-block">{highlight}</span>
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed pt-2 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>

      </div>
    </section>
  );
}
