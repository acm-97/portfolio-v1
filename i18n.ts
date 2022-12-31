/* eslint-disable @typescript-eslint/no-floating-promises */
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import * as es from '@/static/es';
import * as en from '@/static/en';

const resources = {
  en: {
    common: en.common,
    home: en.home,
    about: en.about,
    experience: en.experience,
    work: en.work,
  },
  es: {
    common: es.common,
    home: es.home,
    about: es.about,
    experience: es.experience,
    work: es.work,
  },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true,
    resources,
    lng: 'en', // default language
    fallbackLng: ['en', 'es'],
  });

export default i18n;
