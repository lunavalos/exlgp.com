"use client";

import { useTranslations } from 'next-intl';
import { Send, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const t = useTranslations('ContactPage');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-8 lg:p-10 shadow-lg font-secondary">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
          <p className="text-sm text-gray-600 max-w-md mx-auto">{t('success_msg')}</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-[#1E56C8] text-white px-6 py-2.5 rounded-lg text-xs font-bold shadow-xs hover:bg-[#1643a3] transition-all mt-4 cursor-pointer"
          >
            OK
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t('form_name')}</label>
              <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#247DE1]" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t('form_company')}</label>
              <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#247DE1]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t('form_email')}</label>
              <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#247DE1]" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t('form_phone')}</label>
              <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#247DE1]" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t('form_service')}</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#247DE1]">
              <option>ViatPro 3.0</option>
              <option>Agencia Aduanal</option>
              <option>Distribución y Logística</option>
              <option>Reenvío y Almacenamiento</option>
              <option>Seguridad de Envíos</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t('form_message')}</label>
            <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#247DE1]"></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E56C8] hover:bg-[#1643a3] text-white py-4 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t('form_submit')}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
