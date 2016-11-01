/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router,RouterModule} from '@angular/router';
import {ActivatedRouteStub, RouterStub} from '../../test/router-stubs';
import {MenuComponent} from './menu.component';
import {GlobalService} from '../_shared';
let fixture: ComponentFixture<MenuComponent>;
let component: MenuComponent;

describe('Component: Menu', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule,FormsModule,RouterModule],
            declarations: [MenuComponent],
            providers: [GlobalService, {
                provide: ActivatedRoute, useClass: ActivatedRouteStub
            }, {
                provide: Router, useClass: RouterStub
            }]
        });
    });
    it('should create an instance', () => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

});
