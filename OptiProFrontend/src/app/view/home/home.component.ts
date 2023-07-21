import {Component} from '@angular/core';
import {MenuService} from "../../service/menu.service";
/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(private menuService: MenuService) {
    this.menuService.display = true

  }

}
