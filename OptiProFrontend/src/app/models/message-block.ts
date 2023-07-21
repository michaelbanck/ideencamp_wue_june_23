/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
export class MessageBlock {
  constructor(public systemInfoS: string, public messages: ChatMessage[]) {
  }

}

export class ChatMessage {
  constructor(public text: string, public isBot: boolean = false, public link: string = "") {
  }
}
