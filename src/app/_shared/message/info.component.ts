import {Component, OnInit,trigger,
  state,
  style,
  transition,
  animate} from '@angular/core';
import {MessageService, IMessage} from './message.service';

class Message implements IMessage {
  text: string;
  type: 'success'|'warning'|'danger';
  class: string;
}



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)',opacity:1})),
      transition('void => *', [
        style({transform: 'translateX(-100%)',opacity:0}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)',opacity:0}))
      ])
    ])
  ],
})
export class InfoComponent implements OnInit {
  messages: IMessage[] = [];

  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.messageSubject.subscribe(msg => {
      let message = new Message();
      message.text = msg.text;
      message.type = msg.type || 'success';
      message.class = 'message-' + message.type;
      this.messages.push(message);
      setTimeout(() => {
        this.removeMessage(message);
      }, 5000);
    });
  }

  removeMessage(message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

}
