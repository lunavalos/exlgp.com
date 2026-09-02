import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Montserrat, Roboto} from 'next/font/google';
import '../globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
});

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});

  return {
    metadataBase: new URL('https://www.exlgp.com'),
    title: {
      default: t('home_title'),
      template: '%s | EXL Group'
    },
    description: t('home_desc'),
    keywords: t('home_keywords'),
    alternates: {
      canonical: `https://www.exlgp.com/${locale}`,
      languages: {
        'es': 'https://www.exlgp.com/es',
        'en': 'https://www.exlgp.com/en',
      }
    },
    openGraph: {
      title: t('home_title'),
      description: t('home_desc'),
      url: `https://www.exlgp.com/${locale}`,
      siteName: 'EXL Group',
      images: [
        {
          url: '/images/EXLGroup-building-scaled.jpg',
          width: 1200,
          height: 630,
          alt: 'EXL Group - Soluciones de Innovación en Procesos Aduanales',
        }
      ],
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home_title'),
      description: t('home_desc'),
      images: ['/images/EXLGroup-building-scaled.jpg'],
    },
    icons: {
      icon: '/images/favicon1.png',
      shortcut: '/images/cropped-favicon1-32x32.png',
      apple: '/images/cropped-favicon1-180x180.png',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  // Organization & Website JSON-LD Structured Data for Google Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.exlgp.com/#organization',
        'name': 'EXL Group',
        'url': 'https://www.exlgp.com',
        'logo': 'https://www.exlgp.com/images/logo.png',
        'sameAs': [
          'https://www.linkedin.com/company/exl-group'
        ],
        'description': 'Líderes en innovación aduanal, desarrollo de software en la nube ViatPro 3.0 y logística transfronteriza entre México y Estados Unidos.',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Nuevo Laredo',
          'addressRegion': 'Tamaulipas',
          'addressCountry': 'MX'
        },
        'contactPoint': [
          {
            '@type': 'ContactPoint',
            'telephone': '+52-867-711-2000',
            'contactType': 'customer service',
            'areaServed': ['MX', 'US'],
            'availableLanguage': ['Spanish', 'English']
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.exlgp.com/#website',
        'url': 'https://www.exlgp.com',
        'name': 'EXL Group',
        'publisher': {
          '@id': 'https://www.exlgp.com/#organization'
        },
        'inLanguage': locale
      }
    ]
  };

  return (
    <html lang={locale} className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-secondary text-[var(--text)] bg-white">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
