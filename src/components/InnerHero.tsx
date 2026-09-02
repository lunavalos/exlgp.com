"use client";

import { motion } from 'framer-motion';

interface InnerHeroProps {
  category?: string;
  title: string;
  highlight: string;
  subtitle: string;
}

export default function InnerHero({
  category,
  title,
  highlight,
  subtitle
}: InnerHeroProps) {
  // Staggered entrance animation variants matching index Hero
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

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(10px)", 
      y: 12 
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.45,
        delay: 0.12 + i * 0.06,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    })
  };

  const titleWords = title ? title.split(' ') : [];
  const highlightWords = highlight ? highlight.split(' ') : [];

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl lg:max-w-5xl space-y-4"
        >
          {/* Eyebrow Category Title */}
          {category && (
            <motion.div variants={itemVariants} className="block">
              <span className="text-xs font-bold tracking-widest !text-white uppercase font-mono">
                {category}
              </span>
            </motion.div>
          )}

          {/* Main Headline (Word by Word Reveal Animation) */}
          <motion.h1 
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-primary font-black !text-white tracking-tight leading-[1.15]"
          >
            {titleWords.map((word, idx) => (
              <motion.span
                key={`title-${idx}`}
                custom={idx}
                variants={wordVariants}
                className="inline-block mr-2.5 !text-white"
              >
                {word}
              </motion.span>
            ))}
            {highlightWords.length > 0 && (
              <span className="block sm:inline-block">
                {highlightWords.map((word, idx) => (
                  <motion.span
                    key={`hl-${idx}`}
                    custom={idx + titleWords.length}
                    variants={wordVariants}
                    className="inline-block mr-2.5 text-[#247DE1]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            )}
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed pt-2 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
