import { Injectable } from '@angular/core';


/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public name = 'Optipro'
  public display = true

  constructor() { }
}
