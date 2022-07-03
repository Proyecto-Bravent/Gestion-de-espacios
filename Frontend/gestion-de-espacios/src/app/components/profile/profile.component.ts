import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myProfile: User | any
  // payload: any
  // imgPath: string

  constructor(private usersService: UsersService, private actRoute: ActivatedRoute,
    public router: Router) {

    // this.imgPath = this.imgPath = 'http://localhost:3000/images/' + this.payload.user.image

    // this.payload = jwtDecode(localStorage.getItem('token')!) as any;
  }

  ngOnInit(): void {

    this.actRoute.params.subscribe(async params => {
      const id = parseInt(params['/idprofile'])

      if (params['/idprofile']) {
        this.myProfile = await this.usersService.getById(id)

      } else {
        this.myProfile = await this.usersService.myUser()
      }
    })
  }
  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/home')
  }
}


