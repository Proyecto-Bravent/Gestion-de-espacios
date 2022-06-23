import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private usersServices: UsersService, private router: Router) { }

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
        this.router.navigate(['/home'])
      }
    })
  }

}

