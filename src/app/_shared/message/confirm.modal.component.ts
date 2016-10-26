import {Component, OnInit} from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MessageParamsService} from './message.params.service';
@Component({
  selector: 'confirm-modal-content',
  templateUrl: './confirm.modal.component.html',
})
export class ConfirmModalContent implements OnInit {
  title: string;
  msg: string;
  type:string;

  constructor(public activeModal: NgbActiveModal,public params:MessageParamsService) {
    if(this.params.data){
      this.title=this.params.data['title'];
      this.msg=this.params.data['msg'];
      this.type=this.params.data['type'];
    }
  }
  ngOnInit(){}
  dismiss(){this.activeModal.dismiss()}
  close(){this.activeModal.close()}
}
