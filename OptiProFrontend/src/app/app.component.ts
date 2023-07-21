import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MenuService} from "./service/menu.service";

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Process GPT';

  isMenuOpen = false
  closeMenu = false


  constructor(public router: Router,
              public menuService: MenuService) {
    menuService.display = true
  }


  menuClicked() {
    this.closeMenu = this.isMenuOpen
    this.isMenuOpen = !this.isMenuOpen
  }
}
