import I18n from 'i18n-js'
import en from './en-US'
import pt from './pt-BR'

I18n.fallbacks = true
I18n.translations = {
  'en-US': en,
  'pt-BR': pt,
}

const userLocale = sessionStorage.getItem('locale')
if (userLocale != null) {
  I18n.defaultLocale = userLocale
} else {
  const userLang = navigator.language || navigator.userLanguage
  I18n.defaultLocale = userLang
}

export const translate = key => I18n.t(key)
