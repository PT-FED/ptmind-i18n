import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {routing} from './i18n.router';
import {I18nComponent} from './i18n.component';
import {I18nService} from './i18n.service';
import {ListComponent} from './list/list.component';
import {StartComponent} from './start/start.component';
import {ProjectComponent} from './projects/project.component';
import {ModuleComponent} from './module/module.component';
import {AddModuleModalContent} from './module/module.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    providers: [I18nService],
    declarations: [I18nComponent, ListComponent, StartComponent, ProjectComponent, ModuleComponent,AddModuleModalContent]
})
export class I18nModule {
}
