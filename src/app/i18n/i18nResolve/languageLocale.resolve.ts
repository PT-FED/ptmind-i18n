import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpService} from '../../_shared';
import  '../../rxjs-operators';

@Injectable()
export class LanguageLocaleResolve implements Resolve<any> {
  constructor(public  http: HttpService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.http.get('language_locale');
  }
}
