import Header from '@/components/Header';
import InnerHero from '@/components/InnerHero';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Phone, Mail, MapPin } from 'lucide-react';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});

  return {
    title: t('contact_title'),
    description: t('contact_desc'),
    keywords: t('contact_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}/contacto`,
      languages: {
        'es': 'https://www.exlgp.com/es/contacto',
        'en': 'https://www.exlgp.com/en/contacto',
      }
    },
    openGraph: {
      title: t('contact_title'),
      description: t('contact_desc'),
      url: `https://www.exlgp.com/${locale}/contacto`,
      siteName: 'EXL Group',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  };
}

export default function ContactoPage() {
  const t = useTranslations('ContactPage');

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
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0 font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{t('phone_mx')}</h3>
                  <a href="tel:8672177771" className="text-lg font-extrabold text-[#247DE1] hover:underline block pt-1">(867) 217-7771</a>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0 font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{t('phone_us')}</h3>
                  <a href="tel:19567250537" className="text-lg font-extrabold text-[#247DE1] hover:underline block pt-1">+1 (956) 725-0537</a>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0 font-bold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{t('email_label')}</h3>
                  <a href="mailto:contacto@exlgp.com" className="text-base font-bold text-[#247DE1] hover:underline block pt-1">contacto@exlgp.com</a>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D0E9F] flex items-center justify-center shrink-0 font-bold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Nuevo Laredo, Tamps. • Laredo, Texas</h3>
                </div>
              </div>

            </div>

            {/* Interactive Contact Form Component */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
