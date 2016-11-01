import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../_shared';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  searchText: string = '';

  constructor(public router: Router, public activatedRoute: ActivatedRoute, public global: GlobalService) {
    this.global.events['clearSearchText'].subscribe(() => {
      this.searchText = '';
    });
  }

  ngOnInit() {
  }


  search() {
    let value = this.searchText.trim();
    if (value) {
      this.router.navigate(['/i18n/search', {value: value}]);
    }
  }

  inputSearchText(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.search();
    }
  }
}
