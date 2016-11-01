/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {GlobalService} from './_shared';
import {Router, ActivatedRoute, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {RouterStub, ActivatedRouteStub} from '../test/router-stubs';
import {Title} from '@angular/platform-browser';
import {MenuComponent} from './_menu/menu.component';
import {MessageComponent} from './_shared/message';

describe('App: Ptengine I18n', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule, FormsModule],
            declarations: [
                AppComponent, MenuComponent, MessageComponent
            ],
            providers: [GlobalService,
                {
                    provide: Router,
                    useClass: RouterStub
                }, {
                    provide: ActivatedRoute,
                    useClass: ActivatedRouteStub
                }, Title
            ]
        });
    });

    it('should create an instance', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));


    it('should only one component in app component', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.children[0].nodeName).toEqual('APP-MENU');
    }));

});
