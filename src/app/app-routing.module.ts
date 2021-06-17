import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDayComponent } from './my-day/my-day.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'my-day',
    component: MyDayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
