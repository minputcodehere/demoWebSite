import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', component: BusinessComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
