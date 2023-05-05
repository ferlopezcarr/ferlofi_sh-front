import { Component } from '@angular/core';
import { MenuOption } from '../../models/menu-option';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent {
  public menuOptions: MenuOption[] = [];

  constructor(private menuService: MenuService) {
    this.menuOptions = this.menuService.getMenuOptions();
  }
}
