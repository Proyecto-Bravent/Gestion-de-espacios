import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
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

