import { Component, OnInit } from '@angular/core';
import { Reserve } from 'src/app/interfaces/reserve';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  arrReserves: Reserve[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
