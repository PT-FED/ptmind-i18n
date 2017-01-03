import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router,Params} from '@angular/router';
import {HttpService, MessageService} from '../../_shared';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  i18n: any;

  constructor(public route: ActivatedRoute, public http: HttpService,
              public message: MessageService,
              public router: Router) {
  }

  ngOnInit() {
    this.route.data.forEach(data => {
      this.i18n = data['i18n'];
    });
    this.route.params.forEach((p: Params) => {
      let queryParams = {
        project: this.route.params['project'],
        module: this.route.params['module'],
        key: this.route.params['key'],
      };

    });
  }

  save() {
    this.http.update('lang', this.i18n).subscribe(() => {
      this.message.show({text: 'Save complete!!!'});
      window.history.back();
    });
  }

}
