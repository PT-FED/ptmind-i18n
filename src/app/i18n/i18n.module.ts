import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './i18n.router';
import { I18nComponent } from './i18n.component';
import { I18nService } from './i18n.service';
import { ListComponent } from './list/list.component';
import { StartComponent } from './start/start.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers:[I18nService],
  declarations: [I18nComponent, ListComponent, StartComponent,ProjectComponent]
})
export class I18nModule { }
