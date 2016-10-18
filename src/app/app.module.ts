import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {routing} from './app.router';
import {AppComponent} from './app.component';
import {MenuComponent} from './_menu/menu.component';
import {SharedModule} from './_shared';

import './rxjs-operators';

@NgModule({
    declarations: [
        AppComponent, MenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        routing,
        SharedModule
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule {
}
