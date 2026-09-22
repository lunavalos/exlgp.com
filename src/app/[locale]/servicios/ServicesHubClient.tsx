"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { ComponentProps } from 'react';

type LinkHref = ComponentProps<typeof Link>['href'];

interface ServiceItem {
  title: string;
  desc: string;
  feature: string;
  img: string;
  href: LinkHref;
  isWide?: boolean;
}

interface ServicesHubClientProps {
  eyebrow: string;
  title: string;
  highlight: string;
  desc: string;
  services: ServiceItem[];
}

export default function ServicesHubClient({
  eyebrow,
  title,
  highlight,
  desc,
  services,
}: ServicesHubClientProps) {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold tracking-widest text-[#247DE1] uppercase font-mono">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-primary font-black text-slate-900">
            {title} <span className="text-[#247DE1]">{highlight}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const isWide = srv.isWide;
            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:border-[#247DE1] transition-all duration-300 group flex justify-between ${
                  isWide
                    ? 'md:col-span-2 lg:col-span-2 flex-col sm:flex-row gap-6 items-stretch'
                    : 'flex-col'
                }`}
              >
                <div
                  className={`relative rounded-2xl overflow-hidden bg-slate-100 ${
                    isWide
                      ? 'w-full sm:w-1/2 min-h-[220px] sm:min-h-full shrink-0 flex items-center justify-center p-4 bg-slate-50 mb-0'
                      : 'h-52 w-full mb-5'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={srv.img} 
                    alt={`${srv.title} - Servicios Oficiales EXL Group`}
                    className={`w-full h-full ${
                      isWide
                        ? 'object-contain max-h-48 sm:max-h-56'
                        : 'object-cover'
                    } group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-primary text-slate-900 group-hover:text-[#247DE1] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed pt-2">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#247DE1] font-mono">{srv.feature}</span>
                    <Link
                      href={srv.href}
                      className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#1E56C8] text-slate-700 group-hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label={srv.title}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
