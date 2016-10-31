import {Injectable} from '@angular/core';
@Injectable()
export class MessageServiceStubs {
    show(msg: any) {
        return msg
    }

    confirm(params?: any) {
        return params;
    }
}
