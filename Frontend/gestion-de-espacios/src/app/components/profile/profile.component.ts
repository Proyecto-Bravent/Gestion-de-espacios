import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
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

    this.imgPath = 'https://localhost:7188/api/images/'

  }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.id = parseInt(params['idprofile'])
      this.usersService.findOne(this.id).pipe(map((user: User) => this.user = user))
    })
  }
  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/home')
  }
}


