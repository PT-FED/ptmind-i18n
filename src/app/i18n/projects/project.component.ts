import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../_shared';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    projects:any[];
    constructor(public  http: HttpService) {

    }

    ngOnInit() {
        this.getProjects();
    }
    getProjects(){
        this.http.get('project').subscribe(data=>{
            this.projects = data;
        })
    }
}
