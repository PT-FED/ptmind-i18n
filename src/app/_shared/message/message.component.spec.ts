/* tslint:disable:no-unused-variable */

import {TestBed, async,ComponentFixture} from '@angular/core/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MessageComponent} from './message.component';
import {MessageService} from './message.service';
import {MessageParamsService} from './message.params.service';
let fixture: ComponentFixture<MessageComponent>;
let component: MessageComponent;
describe('Component: Message', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NgbModule.forRoot()
            ],
            providers: [MessageParamsService, MessageService],
            declarations: [MessageComponent]
        });
        fixture = TestBed.createComponent(MessageComponent);
        component = fixture.debugElement.componentInstance;
    });
    it('should create an instance', () => {

        expect(component).toBeTruthy();
    });
});
