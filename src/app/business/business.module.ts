import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { HomeComponent } from './component/home/home.component';
import { BusinessRoutingModule } from './business-routing.module';
import { BasicInfoComponent } from './component/basic-info/basic-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BusinessComponent,
    HomeComponent,
    BasicInfoComponent

  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class BusinessModule { }
