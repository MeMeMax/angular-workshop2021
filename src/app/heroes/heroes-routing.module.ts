import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShowroomComponent } from './components/showroom/showroom.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: ContainerComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'showroom', component: ShowroomComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
