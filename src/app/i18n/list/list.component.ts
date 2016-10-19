import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GlobalEventService} from '../../_shared';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    constructor(public router: ActivatedRoute, public globalEventService: GlobalEventService) {
    }

    ngOnInit() {
        console.log('ngOnInit')
        this.router.params.forEach((p: Params)=> {
            let text = p['text'];
            console.log(text);
        });
    }

    ngOnDestroy() {
        this.globalEventService.events['clearSearchText'].next();
    }
}
