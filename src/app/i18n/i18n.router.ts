import {ModuleWithProviders}   from '@angular/core';
import {Routes, RouterModule}  from '@angular/router';
import {I18nComponent} from './i18n.component';
import {ListComponent} from './list/list.component';
import {StartComponent} from './start/start.component';
import {ProjectComponent} from './project/project.component';
const routes: Routes = [
    {
        path: '',
        component: I18nComponent,
        children: [
            {
                path: '',
                component: StartComponent
            },
            {
                path: 'project',
                component: ProjectComponent
            },
            {
                path: 'list',
                component: ListComponent
            }
        ]
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
