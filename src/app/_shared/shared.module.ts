import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalEventService} from './global-event.service';
import {HttpService} from './http.service';
import {MessageComponent, MessageService} from './message';
import {ConfirmModalContent} from './message/confirm.modal.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MessageComponent],
  providers: [GlobalEventService, HttpService, MessageService],
  declarations: [MessageComponent,ConfirmModalContent],
  entryComponents:[ConfirmModalContent]
})
export class SharedModule {
}
