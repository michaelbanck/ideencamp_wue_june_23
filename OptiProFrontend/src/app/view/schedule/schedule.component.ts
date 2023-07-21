import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProgressIndicatorService} from "../../service/progress-indicator.service";
import {AbstractViewComponent} from "../abstract-view/abstract-view.component";

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent extends AbstractViewComponent {

  constructor(http: HttpClient, progressService: ProgressIndicatorService) {
    super(http, progressService, 'assets/example-schedule.json');
  }

}
