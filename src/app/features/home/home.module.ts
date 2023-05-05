import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';

const materialModules = [MatSidenavModule];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, materialModules],
  exports: [HomeComponent],
})
export class HomeModule {}
