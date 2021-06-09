import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../service/auth-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  justLogged: boolean;

  constructor(private fb:FormBuilder,
              private authService: AuthServiceService) {

    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
    this.justLogged = false;
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
      .subscribe(
        res => {
          this.authService.setSession(res);
          console.log(res);
          this.justLogged = true;

        }
      );
    }
  }

  ngOnInit(): void {
  }

}
