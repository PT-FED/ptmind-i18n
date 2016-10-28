import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalEventService} from './global-event.service';
import {HttpService} from './http.service';
import {MessageComponent, MessageService, MessageParamsService} from './message';
import {ConfirmModalContentComponent} from './message/confirm.modal.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MessageComponent],
  providers: [GlobalEventService, HttpService, MessageService, MessageParamsService],
  declarations: [MessageComponent, ConfirmModalContentComponent],
  entryComponents: [ConfirmModalContentComponent]
})
export class SharedModule {
}
