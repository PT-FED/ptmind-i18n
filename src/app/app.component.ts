import {Title} from '@angular/platform-browser';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalEventService} from './_shared';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public path: string = '';
    constructor(public r: Router, public globalEvent: GlobalEventService, public titleService: Title) {
        this.r.events.subscribe((data)=>{
            this.path = data.url.substr(1);
        });
        this.titleService.setTitle('ptmind-i18n');
    }
}
