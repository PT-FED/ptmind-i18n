import {Injectable} from '@angular/core';
import {ConfirmModalContent} from './confirm.modal.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';

export interface IMessage {
  text: string;
  type?: 'success'|'warning'|'danger';
}

@Injectable()
export class MessageService {
  messageSubject: Subject<IMessage> = new Subject<IMessage>();

  constructor(public modalService: NgbModal) {
  }

  show(msg: IMessage) {
    this.messageSubject.next(msg);
  }

  confirm(): Promise<any> {
    return this.modalService.open(ConfirmModalContent).result;
  }
}
