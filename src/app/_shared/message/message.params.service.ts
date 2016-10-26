import {Injectable} from '@angular/core';
// ng-bootstrap de modal 当前不支持传递参数，所以需要一个service代理
@Injectable()
export class MessageParamsService {
  private _data: any;
  get data() {
    return this._data;
  }
  set data(params) {
    this._data = params;
  }
}
