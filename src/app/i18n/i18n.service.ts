import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment';
@Injectable()
export class I18nService {
  _project: any[];
  get project() {
    return this._project;
  }

  set project(p) {
    this._project = p;
  }

  constructor(public http: Http) {
  }

  buildI18n(langs) {
    let i18ns = [];
    langs.forEach(l=> {
      let existLang = i18ns.find(ll=> {
        return ll.project === l.project && ll.module === l.module && ll.key === l.key;
      });
      if (existLang) {
        existLang.i18n.push({
          language: l.language,
          locale: l.locale,
          value: l.value
        })
      } else {
        i18ns.push({
          project: l.project,
          module: l.module,
          key: l.key,
          i18n: [{
            language: l.language,
            locale: l.locale,
            value: l.value
          }]
        })
      }
    });
    return i18ns;
  }
}
