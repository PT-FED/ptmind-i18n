import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GlobalService, HttpService} from '../../_shared';
import {I18nService} from '../i18n.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  value: string;
  i18ns: any[];

  constructor(public router: ActivatedRoute,
              public http: HttpService,
              public globalService: GlobalService,
              public i18nService: I18nService) {
  }

  ngOnInit() {
    this.router.params.forEach((p: Params) => {
      this.value = p['value'];
      this.search();
    });
  }

  ngOnDestroy() {
    this.globalService.events['clearSearchText'].next();
  }

  search() {
    let queryParams = {
      value: this.value
    };
    this.http.get('langs', queryParams).subscribe(data => {
      this.i18ns = data;
    });
  }

}
