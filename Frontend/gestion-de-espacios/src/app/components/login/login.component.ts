import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
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

  async getLoginData(pForm: any) {
    try {
      const response: User | any = await this.usersServices.login(pForm.value)
      console.log(response)
      if (response.error) {
        alert(response.error)
      } else if (response.token !== "") {
        localStorage.setItem('user-token', response.token)
        this.router.navigate(['/workspace'])
        pForm.resetForm()
      }

    } catch (error) {
      alert(error)
    }
  }

}

