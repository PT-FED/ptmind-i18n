import {Component, OnInit} from '@angular/core';
import {MessageService, IMessage} from './message.service';

class Message implements IMessage {
  text: string;
  type: 'success'|'warning'|'danger';
  class: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
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
