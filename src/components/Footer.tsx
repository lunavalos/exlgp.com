"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('Footer');
  const tHeader = useTranslations('Header');

  return (
    <footer className="bg-[#08094d] text-white pt-16 pb-8 border-t border-blue-950 font-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info (5 Columns) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* Pure White EXL Logo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/logo.png" 
                alt="EXL Group" 
                className="h-9 w-auto filter brightness-0 invert"
              />
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-md font-normal">
              {t('slogan')}
            </p>

            {/* Social & Contact Icon Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/company/exl-group-inc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8.5 h-8.5 rounded-lg bg-white/10 hover:bg-[#247DE1] text-white flex items-center justify-center transition-colors duration-200 border border-white/10"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/528672177771"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8.5 h-8.5 rounded-lg bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors duration-200 border border-white/10"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.88 0-3.626-.505-5.137-1.385l-.368-.214-3.818 1.001 1.018-3.723-.235-.374a9.86 9.86 0 0 1-1.51-5.26c0-5.445 4.43-9.875 9.877-9.875 2.64 0 5.122 1.03 6.987 2.898a9.825 9.825 0 0 1 2.89 6.979c0 5.446-4.431 9.877-9.874 9.877m8.411-18.288A11.796 11.796 0 0 0 12.05 0C5.395 0 .001 5.394 .001 12.051c0 2.126.554 4.202 1.608 6.026L0 24l6.096-1.599a11.79 11.79 0 0 0 5.95 1.594h.005c6.654 0 12.048-5.395 12.048-12.052 0-3.22-1.254-6.246-3.538-8.528"/>
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:contacto@exlgp.com"
                aria-label="Email"
                className="w-8.5 h-8.5 rounded-lg bg-white/10 hover:bg-[#247DE1] text-white flex items-center justify-center transition-colors duration-200 border border-white/10"
              >
                <Mail className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+528672177771"
                aria-label="Phone"
                className="w-8.5 h-8.5 rounded-lg bg-white/10 hover:bg-[#247DE1] text-white flex items-center justify-center transition-colors duration-200 border border-white/10"
              >
                <Phone className="w-4 h-4" />
              </motion.a>

            </div>
          </div>

          {/* Navigation Links & Contact Info (7 Columns) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Col 1: MENÚ */}
            <div className="space-y-4">
              <h4 className="!text-white font-bold text-xs tracking-wider uppercase font-primary border-b border-white/10 pb-2">
                {t('menu')}
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li>
                  <Link href="/" className="hover:text-[#247DE1] transition-colors">
                    {tHeader('nav_home')}
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="hover:text-[#247DE1] transition-colors">
                    {tHeader('nav_solutions')}
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="hover:text-[#247DE1] transition-colors">
                    {tHeader('nav_company')}
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-[#247DE1] transition-colors">
                    {tHeader('nav_contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: SERVICIOS */}
            <div className="space-y-4">
              <h4 className="!text-white font-bold text-xs tracking-wider uppercase font-primary border-b border-white/10 pb-2">
                {tHeader('nav_solutions')}
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li>
                  <Link href="/servicios/viatpro" className="hover:text-[#247DE1] transition-colors">
                    ViatPro 3.0
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/agencia-aduanal" className="hover:text-[#247DE1] transition-colors">
                    Agencia Aduanal
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/distribucion-y-logistica" className="hover:text-[#247DE1] transition-colors">
                    Distribución & Logística
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/reenvio-y-almacenamiento" className="hover:text-[#247DE1] transition-colors">
                    Reenvío WMS
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/seguridad-de-envios" className="hover:text-[#247DE1] transition-colors">
                    Seguridad de Envíos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: CONTACTO */}
            <div className="space-y-4">
              <h4 className="!text-white font-bold text-xs tracking-wider uppercase font-primary border-b border-white/10 pb-2">
                {t('contact')}
              </h4>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#247DE1] shrink-0 mt-0.5" />
                  <a href="tel:+528672177771" className="hover:text-[#247DE1] transition-colors">
                    +52 (867) 217 7771
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#247DE1] shrink-0 mt-0.5" />
                  <a href="mailto:contacto@exlgp.com" className="hover:text-[#247DE1] transition-colors break-all">
                    contacto@exlgp.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#247DE1] shrink-0 mt-0.5" />
                  <span>Nuevo Laredo, Tamps. / Laredo, TX</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          <div className="text-center sm:text-left">
            <p>{t('rights')}</p>
          </div>

          {/* Stacked Lunavalos Credit Logo */}
          <div className="flex flex-col items-center sm:items-end gap-1 shrink-0">
            <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">
              DESARROLLADO POR:
            </span>
            <a 
              href="https://lunavalos.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/credits-logo.png" 
                alt="Lunavalos" 
                className="h-10 sm:h-10 w-auto object-contain filter brightness-0 invert"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
