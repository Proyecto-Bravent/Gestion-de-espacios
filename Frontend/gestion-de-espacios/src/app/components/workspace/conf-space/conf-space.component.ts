import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Reserve } from 'src/app/interfaces/reserve';
import { User } from 'src/app/interfaces/user';
import { ReservesService } from 'src/app/services/reserves.service';

@Component({
  selector: 'app-conf-space',
  templateUrl: './conf-space.component.html',
  styleUrls: ['./conf-space.component.scss']
})
export class ConfSpaceComponent implements OnInit {


  formReserveConf: FormGroup
  reserve: Reserve[] = []
  reserveFiltered: Reserve[] = []
  user: User | any

  constructor(private router: Router, private reserveService: ReservesService) {


    this.formReserveConf = new FormGroup({

      spaceId: new FormControl('', [
        Validators.required, Validators.requiredTrue
      ]),
      dateInit: new FormControl('',
        [Validators.required
        ]),
      dateEnded: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [

      ]),
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {


    this.formReserveConf.value.spaceId = this.formReserveConf.value.spaceId
    this.formReserveConf.value.dateInit = moment(this.formReserveConf.value.date).format('hh:mm')
    this.formReserveConf.value.dateEnded = moment(this.formReserveConf.value.date).format('hh:mm')

    this.reserveService.createReserve(this.formReserveConf.value).subscribe(async res => {

      if (res.id_reserve) {
        alert('Reserva creada')
        this.formReserveConf.reset()
        this.reserveFiltered = await this.reserveService.getAllReserves()
        this.router.navigate(['/calendar'])
        console.log(res)
      } else {
        alert('Error al crear la reserva')
      }
    })
  }

}
