import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Array<Hero>>('http://localhost:4200/api/heroes');
  }
}
