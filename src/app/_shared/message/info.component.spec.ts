/* tslint:disable:no-unused-variable */

import {TestBed, async,ComponentFixture} from '@angular/core/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InfoComponent} from './info.component';
import {MessageService} from './message.service';
import {MessageParamsService} from './message.params.service';
let fixture: ComponentFixture<InfoComponent>;
let component: InfoComponent;
describe('Component: Message', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NgbModule.forRoot()
            ],
            providers: [MessageParamsService, MessageService],
            declarations: [InfoComponent]
        });
        fixture = TestBed.createComponent(InfoComponent);
        component = fixture.debugElement.componentInstance;
    });
    it('should create an instance', () => {

        expect(component).toBeTruthy();
    });
});
