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

    // Creamos la ruta que sirve para obtener la imagen de perfil del usuario

    this.imgPath = 'https://localhost:7023/api/Authenticate/'
  }

  ngOnInit(): void {

    // Obtenemos el id del usuario que esta logueado 

    this.actRoute.params.subscribe(params => {
      this.id = parseInt(params['idprofile'])
      this.usersService.findOne(this.id).pipe(map((user: User) => this.user = user))
    })
  }

  // Actualizar el usuario 


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


