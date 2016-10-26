import {Injectable} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {ConfirmModalContent} from './confirm.modal.component';
import {MessageParamsService} from './message.params.service';
export interface IMessage {
  text: string;
  type?: 'success'|'warning'|'danger';
}

@Injectable()
export class MessageService {
  messageSubject: Subject<IMessage> = new Subject<IMessage>();

  constructor(public modalService: NgbModal, public paramsService:MessageParamsService) {
  }

  show(msg: IMessage) {
    this.messageSubject.next(msg);
  }

  confirm(params?:any): Promise<any> {
    this.paramsService.data=params;
    return this.modalService.open(ConfirmModalContent).result;
  }
}
