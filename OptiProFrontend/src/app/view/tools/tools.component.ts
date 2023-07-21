import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProgressIndicatorService} from "../../service/progress-indicator.service";
import {AbstractViewComponent} from "../abstract-view/abstract-view.component";

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html'
})
export class ToolsComponent extends AbstractViewComponent {

  constructor(http: HttpClient, progressService: ProgressIndicatorService) {
    super(http, progressService, 'assets/example-tools.json');
  }

}
