import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable()
export class GlobalService {
  private _events: {[id: string]: Subject<any>};
  private _storage: Storage;

  public get events() {
    return this._events;
  }

  public getStorage(key) {
    return this._storage.getItem(key);
  }

  public setStorage(key, value) {
    return this._storage.setItem(key, value);
  }


  constructor() {
    this._events = {
      'search': new Subject<string>(),
      'clearSearchText': new Subject<void>()
    };
    this._storage = window.localStorage;
  }

}
