import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChange } from '@angular/core';

import { Hero } from '../../models/hero.model';

@Component({
  selector: 'wsp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() heroes!: Array<Hero>;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(simpleChange: SimpleChange) {
    console.log(simpleChange);
  }
}
