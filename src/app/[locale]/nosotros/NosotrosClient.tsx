"use client";

import { motion } from 'framer-motion';
import { Target, Eye, HeartHandshake, Award, Globe2, Building2 } from 'lucide-react';
import Certifications from '@/components/Certifications';

interface CompanyValue {
  num: string;
  title: string;
  desc: string;
}

interface LocationItem {
  city: string;
  role: string;
  desc: string;
}

interface NosotrosClientProps {
  secAboutEyebrow: string;
  secAboutTitle: string;
  secAboutHighlight: string;
  secAboutDesc1: string;
  secAboutDesc2: string;
  isoTitle: string;
  isoSubtitle: string;
  borderTitle: string;
  borderSubtitle: string;
  sec1Eyebrow: string;
  sec1Title: string;
  sec1Highlight: string;
  sec1Desc: string;
  misionTitle: string;
  misionDesc: string;
  visionTitle: string;
  visionDesc: string;
  valoresTitle: string;
  valoresDesc: string;
  sec2Eyebrow: string;
  sec2Title: string;
  sec2Highlight: string;
  companyValues: CompanyValue[];
  locationsEyebrow: string;
  locationsTitle: string;
  locationsHighlight: string;
  locations: LocationItem[];
}

export default function NosotrosClient({
  secAboutEyebrow,
  secAboutTitle,
  secAboutHighlight,
  secAboutDesc1,
  secAboutDesc2,
  isoTitle,
  isoSubtitle,
  borderTitle,
  borderSubtitle,
  sec1Eyebrow,
  sec1Title,
  sec1Highlight,
  sec1Desc,
  misionTitle,
  misionDesc,
  visionTitle,
  visionDesc,
  valoresTitle,
  valoresDesc,
  sec2Eyebrow,
  sec2Title,
  sec2Highlight,
  companyValues,
  locationsEyebrow,
  locationsTitle,
  locationsHighlight,
  locations,
}: NosotrosClientProps) {
  return (
    <>
      {/* 1. Sobre Nosotros Section (Company Presentation Showcase) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/exl-building.jpg" 
                  alt="Sobre Nosotros - Instalaciones Corporativas y Oficinas de EXL Group"
                  className="w-full h-[480px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Right Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
                {secAboutEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900 leading-tight">
                {secAboutTitle} <span className="text-[#247DE1]">{secAboutHighlight}</span>
              </h2>

              <p className="text-base text-gray-600 leading-relaxed font-normal">
                {secAboutDesc1}
              </p>

              <p className="text-base text-gray-600 leading-relaxed font-normal">
                {secAboutDesc2}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#247DE1] shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{isoTitle}</div>
                    <div className="text-xs text-gray-500">{isoSubtitle}</div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center gap-3">
                  <Globe2 className="w-8 h-8 text-[#0D0E9F] shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{borderTitle}</div>
                    <div className="text-xs text-gray-500">{borderSubtitle}</div>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Misión, Visión y Valores Section */}
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
              {sec1Eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-[#0D0E9F]">
              {sec1Title} {sec1Highlight}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {sec1Desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#247DE1] transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-primary text-slate-900">
                {misionTitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {misionDesc}
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#247DE1] transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-primary text-slate-900">
                {visionTitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {visionDesc}
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#247DE1] transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-slate-200 text-[#0D0E9F] flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-primary text-slate-900">
                {valoresTitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {valoresDesc}
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. Valores que Nos Distinguen - Full-Width Narrative Text Section */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {sec2Eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-[#0D0E9F]">
              {sec2Title} {sec2Highlight}
            </h2>
          </motion.div>

          <div className="space-y-12">
            {companyValues.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col md:flex-row items-start gap-4 md:gap-8 pb-10 border-b border-slate-200/80 last:border-b-0 last:pb-0"
              >
                <span className="text-xl sm:text-2xl font-mono font-bold text-[#247DE1] shrink-0 pt-1">
                  {val.num}
                </span>

                <div className="space-y-2 max-w-4xl">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold font-primary text-slate-900">
                    {val.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Strategic Locations Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
              {locationsEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-primary font-black text-[#0D0E9F]">
              {locationsTitle} {locationsHighlight}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-3 hover:border-[#247DE1] transition-colors"
              >
                <div className="flex items-center gap-2 text-[#0D0E9F]">
                  <Building2 className="w-5 h-5" />
                  <h3 className="text-lg font-bold font-primary text-slate-900">{loc.city}</h3>
                </div>
                <div className="text-xs font-bold text-[#247DE1] font-mono uppercase">{loc.role}</div>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">{loc.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Certifications Carousel */}
      <Certifications />
    </>
  );
}
