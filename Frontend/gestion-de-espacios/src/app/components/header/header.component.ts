import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLogged: boolean = false
  username: string | any
  logged: any

  constructor(private usersServices: UsersService) {

  }

  // async ngOnInit() {
  //   this.logged = await this.usersServices.myUser()
  //   this.username = this.logged.username
  // }

  // ngDoCheck(): void {
  //   this.isLogged = (localStorage.getItem('token') !== null) ? true : false
  // }
}
