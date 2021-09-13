import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../../models/hero.model';

@Component({
  selector: 'wsp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() heroes!: Array<Hero>;

  constructor() {}

  ngOnInit(): void {}
}
