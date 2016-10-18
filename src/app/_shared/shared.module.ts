import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalEventService} from './global-event.service';
import {HttpService} from './http.service';
@NgModule({
  imports: [
    CommonModule
  ],
  // export:[],
  providers: [GlobalEventService,HttpService]
  // declarations: []
})
export class SharedModule {
}
