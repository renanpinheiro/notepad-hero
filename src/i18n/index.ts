import { createI18n } from 'vue-i18n'
import en from './locales/en'
import pt from './locales/pt'
import de from './locales/de'
import es from './locales/es'

export default createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    en,
    pt,
    de,
    es
  }
})