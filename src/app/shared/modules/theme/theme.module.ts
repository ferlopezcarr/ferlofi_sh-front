import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeButtonComponent } from './components/theme-button/theme-button.component';
import { ThemeService } from './services/theme.service';

const materialModules = [MatButtonModule, MatIconModule];

@NgModule({
  declarations: [ThemeButtonComponent],
  providers: [ThemeService],
  imports: [CommonModule, materialModules],
  exports: [ThemeButtonComponent],
})
export class ThemeModule {}
