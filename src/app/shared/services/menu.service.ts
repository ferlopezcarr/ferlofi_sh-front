import { Injectable } from '@angular/core';
import menuOptionsJson from '../../../assets/data/menu.json';
import { MenuOption } from '../modules/navbar/models/menu-option';

@Injectable()
export class MenuService {
  constructor() {}

  public getMenuOptions(): MenuOption[] {
    if (!menuOptionsJson || !Array.isArray(menuOptionsJson)) {
      return [];
    }
    return menuOptionsJson as MenuOption[];
  }
}
