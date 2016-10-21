import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpService} from '../../_shared';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  i18n:any;
  constructor(public route: ActivatedRoute, public http:HttpService,
              public router:Router) {
  }

  ngOnInit() {
    this.route.data.forEach(data=> {
      this.i18n=data['i18n'];
    })
  }
  save(){
    this.http.update('lang',this.i18n).subscribe(()=>{
      window.history.back();
    });
  }

}
