import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'wsp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Array<Hero> = [{ id: 1, name: 'test', type: 'agility' }];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    // this.heroesService.getHeroes().subscribe((res) => {
    //   this.heroes = res.slice(0, 4);
    // });
  }

  addHero() {
    this.heroes = [...this.heroes, { id: 2, name: 'test2', type: 'strength' }];
    console.log(this.heroes);
  }

  changeName() {
    this.heroes[0].name = 'abc';
    this.heroes = [...this.heroes];
  }
}
