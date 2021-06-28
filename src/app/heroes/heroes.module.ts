import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent
  ],
  imports: [CommonModule, HeroesRoutingModule]
})
export class HeroesModule {}
