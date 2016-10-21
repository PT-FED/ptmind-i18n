import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpService} from '../../_shared';
import {I18nService} from '../i18n.service';
import  '../../rxjs-operators';

@Injectable()
export class DetailI18nResolve implements Resolve<any> {
  constructor(public  http: HttpService, public i18nService: I18nService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let queryParams = {
      project: route.params['project'],
      module: route.params['module'],
      key: route.params['key'],
    };
    // return route['lang'];
    let observable = Observable.create(ob=> {
      let _observe = ob;
      this.http.get('langs', queryParams).subscribe(data=> {
        _observe.next(this.i18nService.buildI18n(data)[0]);
        _observe.complete();
      });
    });
    return observable;
    // return this.http.get('langs', queryParams)
  }
}
