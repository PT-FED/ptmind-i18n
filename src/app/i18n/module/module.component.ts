import {Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpService, MessageService} from '../../_shared';
@Component({
  selector: 'app-add-module-modal-content',
  templateUrl: './addModule.modal.component.html',
})
export class AddModuleModalContentComponent implements AfterViewInit {
  addModuleName: string;
  addModuleDesc: string;

  constructor(public activeModal: NgbActiveModal, public element: ElementRef) {
  }

  ngAfterViewInit() {
    // module 名称输入框获焦
    this.element.nativeElement.querySelectorAll('[name="addModuleName"]')[0].focus();
  }
}

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  projectName: string;

  modules: any[];

  constructor(public router: ActivatedRoute,
              public message: MessageService,
              public http: HttpService,
              public modalService: NgbModal) {
  }

  ngOnInit() {
    this.router.params.forEach((p: Params) => {
      this.projectName = p['projectName'];
      this.getModules();
    });
  }

  getModules() {
    let path = `module/${this.projectName}`;
    this.http.get(path).subscribe(modules => {
      this.modules = modules;
    });
  }

  openAdd(content) {
    // let modalRef = this.modalService.open(content, {backdrop: 'static', keyboard: false});
    // modalRef.result.then((result) => {
    //     this.addModule();
    // }, (reason) => {
    // });
    this.modalService.open(AddModuleModalContentComponent, {backdrop: 'static', keyboard: false}).result.then((result) => {
      this.addModule(result.addModuleName, result.addModuleDesc);
    }, (reason) => {
    });
  }

  addModule(addModuleName, addModuleDesc) {
    this.http.add('/module', {
      module: {
        project: this.projectName,
        name: addModuleName,
        desc: addModuleDesc
      }
    }).subscribe(() => {
      this.getModules();
      this.message.show({text: 'save complete!!!'});
    });
  }

  show() {
    console.log('loading');
  }
}
