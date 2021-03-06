import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptionsArgs} from '@angular/http';
import {environment} from '../../environments/environment';
import {MessageService} from './message';
import {Observable} from 'rxjs';
@Injectable()
export class HttpService {
  private apiUrl: string = environment.apiUrl;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http, public message: MessageService) {
  }

  private _extendOption(option?: RequestOptionsArgs): RequestOptionsArgs {
    if (!option) {
      option = {};
    }
    option.headers = this.headers;
    return option;
  }

  get(path: string, queryParams?: {[id: string]: any}): Observable<any> {
    let queryString = '';
    if (queryParams) {
      for (let key in queryParams) {
        if (queryParams[key]) {
          queryString += '&' + key + '=' + queryParams[key];
        }
      }
    }
    if (queryString) {
      queryString = '?' + queryString.substr(1);
    }
    let observable = Observable.create(observe => {
      let _observe = observe;
      this.http.get(this.apiUrl + path + queryString).subscribe(res => {
        _observe.next(res.json());
        _observe.complete();
      }, err => {
        this.message.show({text: 'get failed!!!', type: 'danger'});
      });
    });
    return observable;
  }

  delete(path: string, queryParams?: {[id: string]: any}): Observable<any> {
    let queryString = '';
    if (queryParams) {
      for (let key in queryParams) {
        if (queryParams[key]) {
          queryString += '&' + key + '=' + queryParams[key];
        }
      }
    }
    if (queryString) {
      queryString = '?' + queryString.substr(1);
    }
    let observable = Observable.create(observe => {
      let _observe = observe;
      this.http.delete(this.apiUrl + path + queryString).subscribe(res => {
        _observe.next(res.json());
        _observe.complete();
      }, err => {
        this.message.show({text: 'delete failed!!!', type: 'danger'});
      });
    });
    return observable;
  }

  add(path: string, body: any, option?: RequestOptionsArgs): Observable<any> {
    let observable = Observable.create(observe => {
      let _observe = observe;
      this.http.post(this.apiUrl + path, body, this._extendOption(option)).subscribe(res => {
        _observe.next(res.json());
        _observe.complete();
      });
    });
    return observable;
  }

  update(path: string, body: any, option?: RequestOptionsArgs): Observable<any> {
    let observable = Observable.create(observe => {
      let _observe = observe;
      this.http.put(this.apiUrl + path, body, this._extendOption(option)).subscribe(res => {
        _observe.next(res.json());
        _observe.complete();
      }, err => {
        this.message.show({text: 'update failed!!!', type: 'danger'});
      });
    });
    return observable;
  }
}
