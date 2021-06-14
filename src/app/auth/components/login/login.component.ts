/**
 * Copyright (C) 2021 Weidmueller Interface GmbH & Co. KG
 * All rights reserved.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wsp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = { email: 'test', password: '' };
  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form);
  }
}
