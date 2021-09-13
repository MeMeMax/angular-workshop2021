import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'wsp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Array<any> = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((res) => {
      console.log(res);
      this.heroes = res.slice(0, 4);
    });
  }
}
