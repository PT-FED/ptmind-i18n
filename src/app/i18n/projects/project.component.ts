import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../_shared';
import {I18nService} from '../i18n.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: any[];

  constructor(public http: HttpService, public i18nService: I18nService) {

  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projects = this.i18nService.project;
  }
}
