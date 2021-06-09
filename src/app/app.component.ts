import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthServiceService} from "./service/auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'docEcmClient';

  constructor(private authService: AuthServiceService) {

  }

  isLoggedOut(): boolean{
    return this.authService.isLoggedOut();
  }

  ngOnInit(): void {
  }

  isPdf() {

  }
}
