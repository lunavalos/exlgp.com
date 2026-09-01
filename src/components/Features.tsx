"use client";

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Features() {
  const t = useTranslations('Features');

  const features = [
    { title: t('f1_title'), desc: t('f1_desc'), icon: "📦" },
    { title: t('f2_title'), desc: t('f2_desc'), icon: "⚡" },
    { title: t('f3_title'), desc: t('f3_desc'), icon: "🔍" },
    { title: t('f4_title'), desc: t('f4_desc'), icon: "📊" },
    { title: t('f5_title'), desc: t('f5_desc'), icon: "💰" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-[var(--primary)] mb-4">
            ¿Por qué elegir ViatPro?
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-primary text-[var(--secondary)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--text)] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
