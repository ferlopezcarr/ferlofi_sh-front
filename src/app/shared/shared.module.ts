import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarModule } from './modules/navbar/navbar.module';
import { MenuService } from './services/menu.service';
import { DownloadCurriculumButtonComponent } from './components/download-curriculum-button/download-curriculum-button.component';

const materialModules = [MatToolbarModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [DownloadCurriculumButtonComponent],
  providers: [MenuService],
  imports: [CommonModule, materialModules, NavbarModule],
  exports: [NavbarModule, DownloadCurriculumButtonComponent],
})
export class SharedModule {}
