import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { CompanyModule } from './menu-components/company/company.module';
import { CompanyComponent } from './menu-components/company/company.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [MainComponent, CompanyComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CompanyModule],
  exports: [RouterModule],
})
export class MainModule {}
