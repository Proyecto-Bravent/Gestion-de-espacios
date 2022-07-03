import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { Reserve } from 'src/app/interfaces/reserve';
import { ReservesService } from 'src/app/services/reserves.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  formReserve: FormGroup
  reserve: Reserve[] = []
  reserveFiltered: Reserve[] = []

  constructor(
    private reservesService: ReservesService,
    private router: Router,
  ) {



    this.formReserve = new FormGroup({
      spaceId: new FormControl('', [Validators.required, Validators.requiredTrue]),
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      description: new FormControl('', []),
    })
  }


  async ngOnInit(): Promise<void> {
    this.reserve = await this.reservesService.getAllReserves()
    this.reserveFiltered = [...this.reserve]
  }

  onSubmit() {

    // Cogemos la fecha del formulario

    this.formReserve.value.date = moment(this.formReserve.value.date).format('YYYY-MM-DD HH:mm:ss')

    // Creamos la reserva

    this.reservesService.createReserve(this.formReserve.value).subscribe(async res => {

      if (res.id_reserve) {
        alert('Reserva creada')
        this.formReserve.reset()
        this.reserve = await this.reservesService.getAllReserves()
        this.router.navigateByUrl('/space')
      } else {
        alert('Error al crear la reserva')
      }
    })
  }

}
