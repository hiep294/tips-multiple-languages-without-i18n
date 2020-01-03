import { types } from 'mobx-state-tree';

export const Language = types
  .model({
    'greeting': types.string,
    'home': types.string,
    'contact': types.string,
    'setting': types.string,
    'this-is-home-page': types.string,
    'this-is-contact-page': types.string,
    'this-is-setting-page': types.string,
    'set-language': types.string,
  })
