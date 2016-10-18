import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptionsArgs, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
@Injectable()
export class HttpService {
    apiUrl: string = environment.apiUrl;

    constructor(public http: Http) {
    }

    get(path: string, option?: RequestOptionsArgs): Observable<any> {
        let observable = Observable.create(observe=> {
            let _observe = observe;
            this.http.get(this.apiUrl+path, option).subscribe(res=>{
                _observe.next(res.json());
                _observe.complete();
            });
        });
        return observable;
    }
}
