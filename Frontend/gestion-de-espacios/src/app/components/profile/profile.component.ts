import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: number | null = null
  user: User | any
  imgPath: string



  constructor(private usersService: UsersService, private actRoute: ActivatedRoute, public router: Router) {

    this.imgPath = 'https://localhost:7023/api/Authenticate/'
  }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.id = parseInt(params['idprofile'])
      this.usersService.findOne(this.id).pipe(map((user: User) => this.user = user))
    })
  }

  updateUser() {
    this.actRoute.params.subscribe(async params => {
      let userId = parseInt(params['idprofile'])
      if (params['idprofile']) {
        this.user = await this.usersService.getById(userId)
      } else {
        this.user = await this.usersService.myUser()
      }
    })
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/home')
  }
}


