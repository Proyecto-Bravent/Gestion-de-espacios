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

  constructor(private reservesService: ReservesService,
    private router: Router,) {

    this.formReserve = new FormGroup({

      email: new FormControl('',
        [Validators.required
        ]),
      spaceId: new FormControl('', [
        Validators.required, Validators.requiredTrue
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [

      ]),
    })
  }

  async ngOnInit(): Promise<void> {
    // this.reserve = await this.reservesService.getReservesByStatus(true)
    // this.reserveFiltered = [...this.reserve]
  }

  onSubmit() {

    this.formReserve.value.date = moment(this.formReserve.value.date).format('YYYY-MM-DD HH:mm')

    this.reservesService.createReserve(this.formReserve.value).subscribe(async res => {

      if (res.id_reserve) {
        alert('Reserva creada')
        this.formReserve.reset()
        this.reserveFiltered = await this.reservesService.getAllReserves()
        this.router.navigate(['/calendar'])
        console.log(res)
      } else {
        alert('Error al crear la reserva')
      }
    })
  }

  async onSpaceSelected($reserve: any) {
    this.reserveFiltered = await this.reservesService.getReservesByStatus($reserve)
  }

}
