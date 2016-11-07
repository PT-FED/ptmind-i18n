import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalService} from './global.service';
import {HttpService} from './http.service';
import {InfoComponent, MessageService, MessageParamsService} from './message';
import {ConfirmModalContentComponent} from './message/confirm.modal.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [InfoComponent],
  providers: [GlobalService, HttpService, MessageService, MessageParamsService],
  declarations: [InfoComponent, ConfirmModalContentComponent],
  entryComponents: [ConfirmModalContentComponent]
})
export class SharedModule {
}
