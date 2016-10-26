import {Component, OnInit} from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'confirm-modal-content',
  templateUrl: './confirm.modal.component.html',
})
export class ConfirmModalContent implements OnInit {
  title: string;
  msg: string;

  constructor(public activeModal: NgbActiveModal) {
    this.title='title';
    this.msg='msg';
  }
  ngOnInit(){}
  dismiss(){this.activeModal.dismiss()}
  close(){this.activeModal.close()}
}
