import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Array<any>>('http://localhost:4200/api/heroes');
  }
}
