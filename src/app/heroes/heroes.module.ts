import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [DashboardComponent, ListComponent, ContainerComponent],
  imports: [CommonModule, HeroesRoutingModule, SharedModule]
})
export class HeroesModule {}
