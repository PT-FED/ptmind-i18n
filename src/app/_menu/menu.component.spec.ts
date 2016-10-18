/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {MenuComponent} from './menu.component';
import {GlobalEventService} from '../shared';
let fixture: ComponentFixture<MenuComponent>;
let component: MenuComponent;


describe('Component: Menu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [{
        provide: GlobalEventService,
        useValue: {title: 'menu'}
      }]
    });
  });
  it('should create an instance', () => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
