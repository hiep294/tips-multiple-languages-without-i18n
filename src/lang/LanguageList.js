import { types } from 'mobx-state-tree';

import { Language } from './Language'

export const LanguageList = types
  .model({
    languages: types.map(Language),
    locale: types.string,
  })
  .actions(self => ({
    setLocale(locale) {
      self.locale = locale
    }
  }))
  .views(self => ({
    get getLocale() {
      return self.languages[self.locale]
    }
  }))

