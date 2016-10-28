/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MessageComponent } from './message.component';
let fixture;
let component;
describe('Component: Message', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[MessageComponent]
    });
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.debugElement.componentInstance;
  });
  it('should create an instance', () => {

    expect(component).toBeTruthy();
  });
});
