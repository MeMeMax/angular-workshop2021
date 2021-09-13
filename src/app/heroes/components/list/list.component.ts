import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wsp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() heroes!: Array<any>;

  constructor() {}

  ngOnInit(): void {}
}
