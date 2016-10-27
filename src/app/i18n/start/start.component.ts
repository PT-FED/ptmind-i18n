import {Component, OnInit} from '@angular/core';
import {HttpService, MessageService} from '../../_shared';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(public http: HttpService, public message: MessageService) {
  }

  ngOnInit() {
  }

  build() {
    this.http.get('build').subscribe(res=> {
      if (res.status === 'success') {
        this.message.show({text: 'build success!!!'});
      } else {
        this.message.show({text: 'build fail!!!', type: 'danger'});
      }
    });
  }

}
