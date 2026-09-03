"use client";

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale(); // 'es' or 'en'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname = usePathname();
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-300 font-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/logo.png" 
              alt="EXL Group - Soluciones de Innovación en Procesos Aduanales" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-semibold text-slate-700 hover:text-[#247DE1] transition-colors"
            >
              {t('nav_home')}
            </Link>

            {/* Servicios Dropdown */}
            <div className="relative group py-2">
              <Link 
                href="/servicios" 
                className="text-sm font-semibold text-slate-700 hover:text-[#247DE1] transition-colors inline-flex items-center gap-1"
              >
                <span>{t('nav_solutions')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#247DE1] transition-colors" />
              </Link>

              {/* Submenu Dropdown Box */}
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200/90 rounded-2xl shadow-xl p-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-2 group-hover:translate-y-0 space-y-1">
                <Link href="/servicios/viatpro" className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#247DE1] transition-colors">
                  ViatPro 3.0
                </Link>
                <Link href="/servicios/agencia-aduanal" className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#247DE1] transition-colors">
                  {t('srv_customs')}
                </Link>
                <Link href="/servicios/distribucion-y-logistica" className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#247DE1] transition-colors">
                  {t('srv_logistics')}
                </Link>
                <Link href="/servicios/reenvio-y-almacenamiento" className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#247DE1] transition-colors">
                  {t('srv_warehousing')}
                </Link>
                <Link href="/servicios/seguridad-de-envios" className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#247DE1] transition-colors">
                  {t('srv_security')}
                </Link>
              </div>
            </div>

            <Link 
              href="/nosotros" 
              className="text-sm font-semibold text-slate-700 hover:text-[#247DE1] transition-colors"
            >
              {t('nav_company')}
            </Link>

            <Link 
              href="/contacto" 
              className="text-sm font-semibold text-slate-700 hover:text-[#247DE1] transition-colors"
            >
              {t('nav_contact')}
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/90 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg text-xs font-bold text-slate-700 transition-colors font-secondary cursor-pointer"
              >
                <Globe className="w-4 h-4 text-[#247DE1]" />
                <span className="uppercase tracking-wider font-secondary">{locale}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-white border border-slate-200/90 rounded-2xl shadow-xl p-1.5 space-y-1 z-50 font-secondary">
                  <Link 
                    href={pathname} 
                    locale="es" 
                    onClick={() => setLangDropdownOpen(false)}
                    className={`block px-3 py-2 text-xs font-bold rounded-xl transition-colors ${locale === 'es' ? 'bg-blue-50 text-[#0D0E9F]' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    🇲🇽 Español
                  </Link>
                  <Link 
                    href={pathname} 
                    locale="en" 
                    onClick={() => setLangDropdownOpen(false)}
                    className={`block px-3 py-2 text-xs font-bold rounded-xl transition-colors ${locale === 'en' ? 'bg-blue-50 text-[#0D0E9F]' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    🇺🇸 English
                  </Link>
                </div>
              )}
            </div>

            {/* Desktop Contact CTA Button */}
            <Link
              href="/contacto"
              className="hidden lg:inline-flex bg-[#1E56C8] hover:bg-[#1643a3] text-white px-7 py-3 rounded-lg text-xs font-bold shadow-sm hover:shadow-md transition-all duration-200 font-secondary cursor-pointer"
            >
              {t('contact_btn')}
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors lg:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 font-secondary">
          
          {/* Language Selector Row */}
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#247DE1]" />
              <span>{t('lang_label')}</span>
            </span>
            <div className="flex items-center gap-1">
              <Link
                href={pathname}
                locale="es"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${locale === 'es' ? 'bg-[#1E56C8] text-white' : 'text-slate-600 bg-white border border-slate-200'}`}
              >
                ES
              </Link>
              <Link
                href={pathname}
                locale="en"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${locale === 'en' ? 'bg-[#1E56C8] text-white' : 'text-slate-600 bg-white border border-slate-200'}`}
              >
                EN
              </Link>
            </div>
          </div>

          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">
            {t('nav_home')}
          </Link>
          <Link href="/servicios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-[#247DE1] border-b border-slate-100">
            {t('nav_all_services')}
          </Link>
          <Link href="/servicios/viatpro" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-semibold text-slate-700 pl-4 border-l-2 border-blue-500">
            ViatPro 3.0
          </Link>
          <Link href="/servicios/agencia-aduanal" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-semibold text-slate-700 pl-4 border-l-2 border-blue-500">
            {t('srv_customs')}
          </Link>
          <Link href="/servicios/distribucion-y-logistica" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-semibold text-slate-700 pl-4 border-l-2 border-blue-500">
            {t('srv_logistics')}
          </Link>
          <Link href="/servicios/reenvio-y-almacenamiento" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-semibold text-slate-700 pl-4 border-l-2 border-blue-500">
            {t('srv_warehousing')}
          </Link>
          <Link href="/servicios/seguridad-de-envios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-semibold text-slate-700 pl-4 border-l-2 border-blue-500">
            {t('srv_security')}
          </Link>
          <Link href="/nosotros" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-800 border-t border-slate-100">
            {t('nav_company')}
          </Link>
          <Link href="/contacto" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-800">
            {t('nav_contact')}
          </Link>
        </div>
      )}
    </header>
  );
}
