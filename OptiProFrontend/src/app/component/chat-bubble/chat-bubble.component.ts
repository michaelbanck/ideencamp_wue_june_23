import {Component, Input, OnInit} from '@angular/core';

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {

  @Input()
  text: String = ""

  @Input()
  isBot: boolean = true;


  constructor() {
  }

  ngOnInit(): void {
  }

}
