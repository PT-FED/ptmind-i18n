import {ModuleWithProviders}   from '@angular/core';
import {Routes, RouterModule}  from '@angular/router';
import {I18nComponent} from './i18n.component';
import {ListComponent} from './list/list.component';
import {ProjectComponent} from './projects/project.component';
import {ModuleComponent} from './module/module.component';
import {EditComponent} from './edit/edit.component';
import {DetailI18nResolve} from './edit/edit.resolve';
import {AddComponent} from './add/add.component';
import {SearchComponent} from './search/search.component';
import {ProjectUpdateComponent} from './project-update/project-update.component';
import {ProjectResolve} from './i18nResolve/project.resolve';
import {LanguageLocaleResolve} from './i18nResolve/languageLocale.resolve';
const routes: Routes = [
  {
    path: '',
    component: I18nComponent,
    resolve: {
      project: ProjectResolve,
      languageLocale: LanguageLocaleResolve
    },
    children: [
      {
        path: '',
        component: ProjectComponent
      },
      {
        path: ':projectName',
        component: ProjectUpdateComponent
      },
      {
        path: ':projectName/module',
        component: ModuleComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'edit',
        resolve: {
          i18n: DetailI18nResolve
        },
        component: EditComponent
      },
      {
        path: 'add',
        component: AddComponent
      }
    ]
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
