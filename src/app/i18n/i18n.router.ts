import {ModuleWithProviders}   from '@angular/core';
import {Routes, RouterModule}  from '@angular/router';
import {I18nComponent} from './i18n.component';
import {ListComponent} from './list/list.component';
import {StartComponent} from './start/start.component';
import {ProjectComponent} from './projects/project.component';
import {ModuleComponent} from './module/module.component';
import {EditComponent} from './edit/edit.component';
import {DetailI18nResolve} from './edit/edit.resolve';
import {ProjectResolve} from './i18nResolve/project.resolve';
import {LanguageLocaleResolve} from './i18nResolve/languageLocale.resolve';
const routes: Routes = [
  {
    path: '',
    component: I18nComponent,
    resolve: {
      project: ProjectResolve,
      languageLocale:LanguageLocaleResolve
    },
    children: [
      {
        path: '',
        component: StartComponent
      },
      {
        path: 'projects',
        component: ProjectComponent
      },
      {
        path: 'project/:projectName',
        component: ModuleComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'edit',
        resolve: {
          i18n: DetailI18nResolve
        },
        component: EditComponent
      }
    ]
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
