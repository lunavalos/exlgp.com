"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactoClient() {
  const t = useTranslations('ContactPage');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: Phone,
      label: t('phone_mx_label'),
      value: t('phone_mx_val'),
      isLink: true,
      href: "tel:8672177771",
    },
    {
      icon: Phone,
      label: t('phone_us_label'),
      value: t('phone_us_val'),
      isLink: true,
      href: "tel:19567250537",
    },
    {
      icon: Mail,
      label: t('email_label'),
      value: t('email_val'),
      isLink: true,
      href: "mailto:contacto@exlgp.com",
    },
    {
      icon: MapPin,
      label: t('office_label'),
      value: t('office_val'),
      isLink: false,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/70 text-slate-800 font-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ── LEFT COLUMN: DIRECT CONTACT SHOWCASE CARD (LIGHT MODE) ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white border border-slate-200/90 rounded-[28px] p-8 lg:p-10 shadow-sm flex flex-col justify-between space-y-8"
          >
            {/* Header info */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#247DE1] uppercase tracking-widest block">
                {t('direct_contact')}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-primary font-black text-[#0D0E9F] tracking-tight leading-[1.15]">
                {t('main_title')} <span className="text-[#247DE1] block sm:inline">{t('main_highlight')}</span>
              </h2>
              <p className="text-sm text-gray-600 font-normal leading-relaxed">
                {t('main_desc')}
              </p>
            </div>

            {/* Contact Channels List (3 Items: Phone, Email, Office) */}
            <div className="space-y-5">
              {contactItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-slate-200 text-[#0D0E9F] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider block">
                        {item.label}
                      </span>
                      {item.isLink ? (
                        <a 
                          href={item.href} 
                          className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#247DE1] transition-colors block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-bold text-slate-900">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Compliance Disclaimer */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                {t('disclaimer')}
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: INTERACTIVE FORM CARD (LIGHT MODE) ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-[28px] p-8 lg:p-10 shadow-sm flex flex-col justify-center"
          >
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold font-primary text-slate-900">
                  {t('success_msg')}
                </h3>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-[#1E56C8] hover:bg-[#1643a3] text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all mt-4 cursor-pointer"
                >
                  OK
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Nombre completo & Nombre de la empresa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">
                      {t('field_name')}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t('placeholder_name')}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#247DE1] focus:bg-white focus:ring-1 focus:ring-[#247DE1] rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-gray-400 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">
                      {t('field_company')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('placeholder_company')}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#247DE1] focus:bg-white focus:ring-1 focus:ring-[#247DE1] rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-gray-400 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Correo electrónico & Teléfono de contacto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">
                      {t('field_email')}
                    </label>
                    <input
                      required
                      type="email"
                      placeholder={t('placeholder_email')}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#247DE1] focus:bg-white focus:ring-1 focus:ring-[#247DE1] rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-gray-400 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">
                      {t('field_phone')}
                    </label>
                    <input
                      type="tel"
                      placeholder={t('placeholder_phone')}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#247DE1] focus:bg-white focus:ring-1 focus:ring-[#247DE1] rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-gray-400 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Row 3: Servicio requerido */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">
                    {t('field_service')}
                  </label>
                  <div className="relative">
                    <select
                      defaultValue={t('opt_customs')}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#247DE1] focus:bg-white focus:ring-1 focus:ring-[#247DE1] rounded-xl px-4 py-3.5 text-sm text-slate-900 transition-all outline-none appearance-none cursor-pointer pr-10"
                    >
                      <option value="Agencia Aduanal">{t('opt_customs')}</option>
                      <option value="Distribución y Logística">{t('opt_logistics')}</option>
                      <option value="Reenvío y Almacenamiento">{t('opt_warehousing')}</option>
                      <option value="Seguridad de Envíos">{t('opt_security')}</option>
                      <option value="ViatPro 3.0">{t('opt_viatpro')}</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Row 4: Mensaje / Especificaciones del proyecto */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">
                    {t('field_message')}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t('placeholder_message')}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#247DE1] focus:bg-white focus:ring-1 focus:ring-[#247DE1] rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-gray-400 transition-all outline-none resize-none"
                  />
                </div>

                {/* Row 5: Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1E56C8] hover:bg-[#1643a3] active:scale-[0.99] text-white py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer font-secondary"
                >
                  <span>{t('btn_submit')}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
