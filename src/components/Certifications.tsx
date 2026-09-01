"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Certifications() {
  const t = useTranslations('Certifications');

  // Exact 6 remaining valid certification images in folder
  const certImages = [
    { src: "/images/certifications/01-1.jpg", alt: "Certificación 1" },
    { src: "/images/certifications/02.jpg", alt: "Certificación 2" },
    { src: "/images/certifications/03.jpg", alt: "Certificación 3" },
    { src: "/images/certifications/04.jpg", alt: "Certificación 4" },
    { src: "/images/certifications/06.jpg", alt: "Certificación 6" },
    { src: "/images/certifications/07.jpg", alt: "Certificación 7" },
  ];

  // Duplicated array for seamless infinite marquee scrolling
  const marqueeItems = [...certImages, ...certImages, ...certImages];

  return (
    <section id="certificaciones" className="py-20 bg-slate-50 border-t border-slate-200/70 text-slate-800 relative overflow-hidden font-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-primary font-black text-slate-900 tracking-tight"
          >
            {t('title')} <span className="text-[#247DE1]">{t('highlight')}</span>
          </motion.h2>

          <p className="text-sm md:text-base text-gray-600 font-normal">
            {t('subtitle')}
          </p>
        </div>

        {/* Clean, Transparent Infinite Marquee */}
        <div className="relative w-full overflow-hidden">
          
          {/* Left & Right Gradient Fade Overlays matching section background bg-slate-50 */}
          <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Marquee Strip (Pauses smoothly on Hover) */}
          <div className="animate-marquee gap-6 py-3 items-center">
            {marqueeItems.map((cert, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/90 hover:border-[#247DE1] shadow-2xs hover:shadow-md px-6 py-4 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 h-24 w-44 group cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="max-h-14 max-w-full object-contain transform group-hover:scale-108 transition-all duration-300"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
