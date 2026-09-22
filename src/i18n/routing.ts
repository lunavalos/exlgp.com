import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/nosotros': {
      es: '/nosotros',
      en: '/about'
    },
    '/contacto': {
      es: '/contacto',
      en: '/contact'
    },
    '/servicios': {
      es: '/servicios',
      en: '/services'
    },
    '/servicios/viatpro': {
      es: '/servicios/viatpro',
      en: '/services/viatpro'
    },
    '/servicios/agencia-aduanal': {
      es: '/servicios/agencia-aduanal',
      en: '/services/customs-agency'
    },
    '/servicios/distribucion-y-logistica': {
      es: '/servicios/distribucion-y-logistica',
      en: '/services/distribution-and-logistics'
    },
    '/servicios/reenvio-y-almacenamiento': {
      es: '/servicios/reenvio-y-almacenamiento',
      en: '/services/forwarding-and-warehousing'
    },
    '/servicios/seguridad-de-envios': {
      es: '/servicios/seguridad-de-envios',
      en: '/services/shipment-security'
    }
  }
});

export type Locale = (typeof routing.locales)[number];

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
