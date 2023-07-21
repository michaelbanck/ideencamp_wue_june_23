import {ChatMessage, MessageBlock} from "../../models/message-block";
import {HttpClient} from "@angular/common/http";
import {ProgressIndicatorService} from "../../service/progress-indicator.service";

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
export abstract class AbstractViewComponent {

  input = ""

  exampleChat = new MessageBlock("", [])

  protected constructor(protected httpClient: HttpClient,
                        protected progressService: ProgressIndicatorService, protected exampleChatFile: string) {
    this.setExampleChat()
  }

  private setExampleChat() {
    this.httpClient.get<MessageBlock>(this.exampleChatFile).subscribe(
      (data) => {
        this.exampleChat = data;
      },
      (error) => {
        console.error('Error fetching JSON:', error);
      }
    );
  }



  inputConfirmedAndSend() {

    if (this.input.length > 1) {
      this.exampleChat.messages.push(new ChatMessage(this.input, false))
      this.input = ""
      this.sendDialog()
    }
  }

  onTextReceived(text: string) {
    this.input = text
    this.inputConfirmedAndSend()
  }

  sendDialog() {
    this.progressService.isInProgress = true
    this.httpClient.post<{ result: string }>("http://127.0.0.1:8000/chat", this.exampleChat).subscribe({
      next: (value) => {
        this.progressService.isInProgress = false

        let hrefRegex = /href='([^']*)'/;
        let hrefMatch = value.result.match(hrefRegex);
        let hrefValue = hrefMatch ? hrefMatch[1] : "";

        let preATag = value.result.split("<a href")[0];

        this.exampleChat.messages.push(new ChatMessage(preATag, true, hrefValue))

      },
      error: (err) => {
        console.log(err)
        this.progressService.isInProgress = false
      }
    })
  }
}
