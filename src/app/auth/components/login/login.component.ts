/**
 * Copyright (C) 2021 Weidmueller Interface GmbH & Co. KG
 * All rights reserved.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wsp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({ email: ['', [Validators.required, Validators.min(5)]], password: ['', Validators.required] });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.form.controls['email'].valueChanges.subscribe((res) => {
      console.log(res);
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
    }
  }
}
