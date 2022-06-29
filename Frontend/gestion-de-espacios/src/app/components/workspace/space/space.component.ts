import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservesService } from 'src/app/services/reserves.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  formSpace: FormGroup

  constructor(
    private reservesService: ReservesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {



    this.formSpace = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      spaceId: new FormControl('', [Validators.required, Validators.requiredTrue]),
      userId: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      createdAt: new FormControl('', [Validators.required]),
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
