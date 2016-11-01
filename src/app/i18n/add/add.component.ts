import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpService, MessageService, GlobalService} from '../../_shared';
import {I18nService} from '../i18n.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

    projects: any[] = [];
    selectedProject: string;
    modules: any[] = [];
    selectedModule: string;
    key: string;
    i18n: any[];

    constructor(public http: HttpService,
                public router: Router,
                public route: ActivatedRoute,
                public global: GlobalService,
                public i18nService: I18nService,
                public message: MessageService) {
    }

    ngOnInit() {
        this.projects = this.i18nService.project;

        this.i18n = [];
        this.i18nService.languageLocale.forEach(l => {
            l.locale.forEach(locale => {
                this.i18n.push({
                    language: l.language,
                    locale: locale,
                    value: ''
                });
            });
        });
        let selectedProject = this.projects.find(p => p.name === this.global.getStorage('defaultProject'));
        if(selectedProject){
            this.selectProject(selectedProject);
        }
    }

    selectProject(project) {
        this.selectedProject = project.name;
        this.selectedModule = '';
        let path = `module/${ this.selectedProject}`;
        this.http.get(path).subscribe(modules => {
            this.modules = modules;
        });
    }

    save() {
        this.http.add('lang', {
            project: this.selectedProject,
            module: this.selectedModule,
            key: this.key,
            i18n: this.i18n
        }).subscribe(data => {
            if (data.status === 'error') {
                this.message.show({text: 'add failed!!!:' + data.msg, type: 'danger'});
            } else {
                this.global.setStorage('defaultProject', this.selectedProject)
                this.router.navigate(['../list', {project: this.selectedProject, module: this.selectedModule}],
                    {relativeTo: this.route});
            }
        });
    }
}
