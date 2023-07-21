import { Component, OnInit } from '@angular/core';
import {ProgressIndicatorService} from "../../service/progress-indicator.service";


/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 * component shows a progress spinner when activated
 *
 */
@Component({
  selector: 'app-progress-overlay',
  templateUrl: './progress-overlay.component.html',
  styleUrls: ['./progress-overlay.component.css']
})
export class ProgressOverlayComponent implements OnInit {

  constructor(public progressService: ProgressIndicatorService) { }

  ngOnInit(): void {
  }

}
