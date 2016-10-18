import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class GlobalEventService {
    private _events: {[id: string]: Subject<any>};
    public get events() {
        return this._events;
    }

    constructor() {
        this._events = {
            'search': new Subject<string>(),
            'clearSearchText': new Subject<void>()
        };
    }

}
