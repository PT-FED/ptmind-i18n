import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {routing} from './i18n.router';
import {I18nComponent} from './i18n.component';
import {I18nService} from './i18n.service';
import {ListComponent} from './list/list.component';
import {ProjectsComponent} from './projects/projects.component';
import {ModuleComponent, AddModuleModalContentComponent} from './module/module.component';
import {EditComponent} from './edit/edit.component';
import {DetailI18nResolve} from './edit/edit.resolve';
import {ProjectResolve} from './i18nResolve/project.resolve';
import {LanguageLocaleResolve} from './i18nResolve/languageLocale.resolve';
import {AddComponent} from './add/add.component';
import {SearchComponent} from './search/search.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    routing
  ],
  providers: [I18nService, DetailI18nResolve, ProjectResolve, LanguageLocaleResolve],
  declarations: [I18nComponent,
    ListComponent, ProjectsComponent, ModuleComponent,
    AddModuleModalContentComponent,
    EditComponent,
    AddComponent,
    SearchComponent],
  entryComponents: [AddModuleModalContentComponent]
})
export class I18nModule {
}
