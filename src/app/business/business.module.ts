import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { HomeComponent } from './component/home/home.component';
import { BusinessRoutingModule } from './business-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BusinessComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class BusinessModule { }
