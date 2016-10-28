import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class I18nService {
  _project: any[];
  get project() {
    return this._project;
  }

  set project(p) {
    this._project = p;
  }

  _language_locale: any[];

  get languageLocale() {
    return this._language_locale;
  }

  set languageLocale(language_locale) {
    this._language_locale = language_locale;
  }

  constructor(public http: Http) {
  }

  buildI18n(langs) {
    let i18ns = [];
    langs.forEach(l => {
      let existLang = i18ns.find(ll => {
        return ll.project === l.project && ll.module === l.module && ll.key === l.key;
      });
      if (!existLang) {
        existLang = {
          project: l.project,
          module: l.module,
          key: l.key,
          i18n: []
        };
        this.languageLocale.forEach(ll => {
          ll.locale.forEach(llItem => {
            existLang.i18n.push({
              language: ll.language,
              locale: llItem,
              value: ''
            });
          });
        });
        i18ns.push(existLang);
      }
      let existI18n = existLang.i18n.find(i => {
        return i.language === l.language && i.locale === l.locale;
      });
      existI18n.value = l.value;
    });
    return i18ns;
  }
}
