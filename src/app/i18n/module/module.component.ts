import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpService} from '../../_shared';

@Component({
    selector:'app-module-modal',
    templateUrl: './addModule.modal.component.html'
})
export class AddModuleModalContent {
    addModuleName: string;
    addModuleDesc: string;
    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-module',
    templateUrl: './module.component.html',
    styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
    projectName: string;

    modules: any[];

    constructor(public router: ActivatedRoute, public http: HttpService, public modalService: NgbModal) {
    }

    ngOnInit() {
        this.router.params.forEach((p: Params)=> {
            this.projectName = p['projectName'];
            this.getModules();
        });
    }

    getModules() {
        let path = `module/${this.projectName}`;
        this.http.get(path).subscribe(modules=> {
            this.modules = modules;
        })
    }

    openAdd() {
        // this.modalService.open(AddModuleModalContent, {backdrop: 'static', keyboard: false}).result.then((result) => {
        //     this.addModule(result.name,result.desc);
        // }, (reason) => {});
        this.modalService.open(AddModuleModalContent);
    }

    addModule(addModuleName,addModuleDesc) {
        this.http.add('/module', {
            module: {
                project: this.projectName,
                name: addModuleName,
                desc: addModuleDesc
            }
        }).subscribe(()=> {
            this.getModules();
        })
    }
    show(){
        console.log(1);
    }
}
