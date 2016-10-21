import {Component, OnInit, OnDestroy} from '@angular/core';
import {GlobalEventService} from '../_shared';
import {ActivatedRoute, Router} from '@angular/router'
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    searchText: string = '';

    constructor(public router: Router, public activatedRoute: ActivatedRoute, public globalEvent: GlobalEventService) {
        this.globalEvent.events['clearSearchText'].subscribe(()=> {
            this.searchText = '';
            console.log('clearSearchText')
        })
    }

    ngOnInit() {
    }

    ngOnDestroy() {

    }

    search() {
        this.router.navigate(['/i18n/list', {value: this.searchText?this.searchText.trim():''}])
    }
    inputSearchText(e:KeyboardEvent){
        if(e.key==='Enter'){
            this.search();
        }
    }
}
