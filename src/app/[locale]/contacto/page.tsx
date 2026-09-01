"use client";

import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactoPage() {
  const t = useTranslations('ContactPage');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 flex flex-col font-secondary">
      <Header />

      <InnerHero
        category={t('category')}
        title={t('hero_title')}
        highlight={t('hero_highlight')}
        subtitle={t('hero_subtitle')}
      />

      <section className="py-24 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{t('phone_mx')}</h3>
                  <a href="tel:8672177771" className="text-lg font-extrabold text-[#247DE1] hover:underline block pt-1">(867) 217-7771</a>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{t('phone_us')}</h3>
                  <a href="tel:19567250537" className="text-lg font-extrabold text-[#247DE1] hover:underline block pt-1">+1 (956) 725-0537</a>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{t('email_label')}</h3>
                  <a href="mailto:contacto@exlgp.com" className="text-base font-bold text-[#247DE1] hover:underline block pt-1">contacto@exlgp.com</a>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Nuevo Laredo, Tamps. • Laredo, Texas</h3>
                </div>
              </div>

            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-8 lg:p-10 shadow-lg">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                    <p className="text-sm text-gray-600 max-w-md mx-auto">{t('success_msg')}</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-[#1E56C8] text-white px-6 py-2.5 rounded-lg text-xs font-bold shadow-xs hover:bg-[#1643a3] transition-all mt-4"
                    >
                      OK
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 font-secondary">
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
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
