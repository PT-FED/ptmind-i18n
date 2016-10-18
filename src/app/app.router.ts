import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/i18n',pathMatch:'full' },
    { path: 'i18n', loadChildren: 'app/i18n/i18n.module#I18nModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
