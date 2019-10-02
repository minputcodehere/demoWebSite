import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { HomeComponent } from './component/home/home.component';
import { BusinessRoutingModule } from './business-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicInfoComponent } from './component/basic-info/basic-info.component';

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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BusinessModule { }
