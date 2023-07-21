import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProgressIndicatorService} from "../../service/progress-indicator.service";
import {ChatMessage, MessageBlock} from "../../models/message-block";
import {AbstractViewComponent} from "../abstract-view/abstract-view.component";

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html'
})
export class TranslateComponent extends AbstractViewComponent {

  constructor(http: HttpClient, progressService: ProgressIndicatorService) {
    super(http, progressService, 'assets/example-translate.json');
  }

}
