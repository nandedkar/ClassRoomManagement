import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginData } from '../../models/loginData.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') public createLoginForm: NgForm;

  private loginData: LoginData =
    {
      email: '',
      pwd: ""
    };

  private showError: boolean = false;

  constructor(private _router: Router, private http: HttpClient) {

  }

  ngOnInit() {

  }
  

  authentication(): void {
    this.http.get("assets/data/login.json").subscribe((data:
      {}) => {

      if (this.loginData.email === "user@gmail.com" && this.loginData.pwd === "123456") {
        this.showError = false;
        this._router.navigate(['home']);
      }
      else {
        this.showError = true;
      }
      this.loginData = {
        email: '',
        pwd: ""
      };
    });

  }

  navigateToRegistration(): void {
    this._router.navigate(['registration']);
  }


}
