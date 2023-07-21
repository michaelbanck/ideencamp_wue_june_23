import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 *
 * Service to start and stop the global progress indicator
 *
 */
@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorService {

  isInProgress = false;
  private timeOutId = -1;

  constructor(private snackBar: MatSnackBar) {
  }

  /**
   *
   * @param isInProgress true for showing the global progress spinner, false otherwise
   * @param timeoutInSeconds reset in case that the progress is never done,
   * this number should be bigger then the expected execution time
   */
  public changeProgress(isInProgress: boolean, timeoutInSeconds: number = 10): void {
    this.isInProgress = isInProgress;


  }


}
