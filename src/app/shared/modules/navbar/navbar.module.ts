import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { NavbarComponent } from './navbar.component';
import { ThemeModule } from '../theme/theme.module';
import { LanguageModule } from '../language/language.module';

const materialModules = [MatToolbarModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [NavbarComponent, NavbarMenuComponent],
  providers: [],
  imports: [CommonModule, materialModules, ThemeModule, LanguageModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
