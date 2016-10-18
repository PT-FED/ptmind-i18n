import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment';
@Injectable()
export class I18nService {
    url: string = environment.apiUrl;

    constructor(public http: Http) {
    }

    get(key: string) {
        return this.http.get('/www' + key);
    }

    search(text: string) {
        return this.http.get('/www' + text);
    }
}
