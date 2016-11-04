import {Component, OnInit} from '@angular/core';
import {HttpService,MessageService} from '../../_shared';
import {I18nService} from '../i18n.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: any[];

  constructor(public http: HttpService, public i18nService: I18nService,public message: MessageService) {

  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projects = this.i18nService.project;
  }
  build() {
    this.http.add('build', {}).subscribe(res => {
      if (res.status === 'success') {
        this.message.show({text: 'build success!!!'});
      } else {
        this.message.show({text: 'build fail!!!', type: 'danger'});
      }
    });
  }
  refreshI18n(project){
    console.log(project)
  }

}
