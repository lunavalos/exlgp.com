"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Industries() {
  const t = useTranslations('Industries');

  const industries = [
    { name: t('automotive'), img: "/images/srvc-automotriz.jpg" },
    { name: t('machinery'), img: "/images/srvc-maquinaria.jpg" },
    { name: t('metallurgical'), img: "/images/srvc-metalurgia.jpg" },
    { name: t('mining'), img: "/images/srvc-mineria.jpg" },
    { name: t('manufacturing'), img: "/images/srvc-fabricacion.jpg" },
    { name: t('energy'), img: "/images/distribucion-y-logistica.jpg" },
    { name: t('electronics'), img: "/images/reenvioyalmacenamiento.jpg" },
    { name: t('food'), img: "/images/exl-building.jpg" }
  ];

  return (
    <section id="industrias" className="py-28 bg-white text-slate-900 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Blue Keyword Highlight */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-primary font-black text-[#0D0E9F] tracking-tight"
          >
            Industrias Atendidas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm md:text-base text-gray-600"
          >
            {t('subtitle')}
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-[#247DE1] mx-auto rounded-full mt-2" 
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                type: "spring",
                stiffness: 90,
                damping: 15,
                delay: idx * 0.06 
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 h-52 cursor-pointer flex items-end p-5"
            >
              {/* Real Industry Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={ind.img} 
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E9F]/90 via-[#0D0E9F]/40 to-transparent group-hover:from-[#0D0E9F] transition-colors duration-300" />
              
              <span className="relative z-10 font-bold font-primary text-white text-base tracking-wide group-hover:translate-x-1.5 transition-transform duration-300">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
