import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business.component';
import { HomeComponent } from './component/home/home.component';
import { BasicInfoComponent } from './component/basic-info/basic-info.component';
import { NgModule } from '@angular/core';
import { BasicInfoComponent } from './component/basic-info/basic-info.component';

const routes: Routes = [
  {
    path: '', component: BusinessComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'basic-info', component: BasicInfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
