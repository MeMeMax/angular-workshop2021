/**
 * Copyright (C) 2021 Weidmueller Interface GmbH & Co. KG
 * All rights reserved.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'wsp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm();

    this.form.get('email')?.valueChanges.subscribe((res) => {
      console.log(res);
    });
  }

  createForm() {
    this.form = this.fb.group({ email: ['test', [Validators.required, Validators.min(5)]], password: ['test', Validators.required] });
  }

  submit() {
    if (this.form.valid) {
      this.router.navigate(['heroes', 'dashboard']);
    }
  }
}
