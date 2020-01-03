import en from './locales/en'
import vi from './locales/vi'

import { LanguageList } from './LanguageList';

export const Lang = LanguageList.create({
  languages: {
    en,
    vi,
  },
  locale: 'vi'
})

