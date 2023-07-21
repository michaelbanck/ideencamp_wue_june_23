import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProgressIndicatorService} from "../../service/progress-indicator.service";
import {HttpClient} from "@angular/common/http";
import {AbstractViewComponent} from "../../view/abstract-view/abstract-view.component";


/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 *
 * Starts audio recording in the backend. This frontend does not record by itself.
 * If you want to have a real client server architecture, you need to handle recording in the frontend
 *
 */
@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})
export class RecorderComponent{

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'NumpadAdd') {
      this.swapStateIfPossible();
    }
  }


  readonly IS_RECORDING = "record";
  readonly IS_IDLE = "idle";
  readonly IS_PROCESSING = "process";

  state = this.IS_IDLE;

  @Output() onTextReceived: EventEmitter<string> = new EventEmitter()

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private progressService: ProgressIndicatorService) {

  }

  /**
   * start or stops audio recording, depending on the current state
   */
  swapStateIfPossible(): void {
    if (this.state == this.IS_RECORDING) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  /**
   * starts audio recording (This all happens in backend and works only because client and server are the same machine)
   */
  startRecording(): void {


    this.httpClient.get<{ text: string }>("http://127.0.0.1:8080/getRecording").subscribe({
      next: (value) => {
        this.state = this.IS_RECORDING;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  /**
   * stops audio recording (This all happens in backend and works only because client and server are the same machine)
   */
  stopRecording(): void {
    this.state = this.IS_PROCESSING;
    this.progressService.changeProgress(true, 15);
    this.httpClient.get<{ text: string }>("http://127.0.0.1:8080/getRecording").subscribe({
      next: (value) => {
        this.progressService.isInProgress = false
        this.state = this.IS_IDLE;
        this.onTextReceived.emit(value.text);

      },
      error: (err) => {
        console.log(err)
        this.progressService.isInProgress = false
        this.state = this.IS_IDLE;
      }
    })

  }
}
