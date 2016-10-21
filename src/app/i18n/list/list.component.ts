import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GlobalEventService, HttpService} from '../../_shared';
import {I18nService} from '../i18n.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    project: string;
    module: string;
    key: string;
    value: string;
    i18ns: any[];

    constructor(public router: ActivatedRoute,
                public http: HttpService,
                public globalEventService: GlobalEventService,
                public i18nService:I18nService) {
    }

    ngOnInit() {
        console.log('ngOnInit')
        this.router.params.forEach((p: Params)=> {
            this.project = p['project'];
            this.module = p['module'];
            this.key = p['key'];
            this.value = p['value'];
            this.search();
        });
    }

    ngOnDestroy() {
        this.globalEventService.events['clearSearchText'].next();
    }

    search() {
        let queryParams={
            project:this.project,
            module:this.module,
            key:this.key,
            value:this.value,
        };
        this.http.get('langs',queryParams).subscribe(data=> {
            this.i18ns= this.i18nService.buildI18n(data);
        });
    }
}
