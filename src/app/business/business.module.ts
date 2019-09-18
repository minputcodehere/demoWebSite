import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { HomeComponent } from './component/home/home.component';
import { BusinessRoutingModule } from './business-routing.module';

@NgModule({
  declarations: [
    BusinessComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
