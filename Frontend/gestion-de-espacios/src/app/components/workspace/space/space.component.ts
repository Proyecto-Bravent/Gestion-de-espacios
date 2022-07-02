import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reserve } from 'src/app/interfaces/reserve';
import { ReservesService } from 'src/app/services/reserves.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  formSpace: FormGroup
  reserve: Reserve[] = []
  reserveFiltered: Reserve[] = []

  constructor(
    private reservesService: ReservesService,
    private router: Router,
  ) {



    this.formSpace = new FormGroup({
      spaceId: new FormControl('', [Validators.required, Validators.requiredTrue]),
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    })
  }


  ngOnInit(): void {
  }

  getDataForm() {
    console.log(this.formSpace.value)
    this.reservesService.createReserve(this.formSpace.value)
    this.router.navigate(['/home'])
  }
}
