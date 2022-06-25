import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Password validators are --> ^ - Start of string, (?=[A-Z0-9]*[a-z]) look ahead to ensure at least one lower case alphabet, (?=[a-zA-Z]*[0-9]) look ahead to ensure at least one digit , (?=[a-z0-9]*[A-Z]) look ahead to ensure at least one upper case alphabet, [a-zA-Z0-9]{8,} captures eight or more alphanumeric characters, $ end of string

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')],),
  })


  constructor(private usersServices: UsersService, private authServices: AuthService, private router: Router) { }

  async googleOnLogin() {
    try {
      this.authServices.loginGoogle()
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('user-token') !== null) {
      this.router.navigate(['/login'])
    }
  }

  getLoginData(pForm: any) {
    this.usersServices.login(pForm.value).subscribe(res => {
      if (res.error) {
        alert(res.error)
      } else {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/workspace'])
      }
    })
  }













}

