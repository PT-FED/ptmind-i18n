import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {I18nService} from './i18n.service';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss']
})
export class I18nComponent implements OnInit {

  constructor(public route: ActivatedRoute, public i18nService: I18nService) {
  }

  ngOnInit() {
    this.route.data.forEach(data => {
      this.i18nService.project = data['project'];
      this.i18nService.languageLocale = data['languageLocale'];
    });
  }

}
