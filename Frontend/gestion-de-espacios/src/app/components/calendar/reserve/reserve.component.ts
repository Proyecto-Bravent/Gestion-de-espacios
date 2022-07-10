import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserve } from 'src/app/interfaces/reserve';
import { ReservesService } from 'src/app/services/reserves.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  @Input() myReserve: Reserve | any
  reserved: Reserve[] | any

  constructor(private reservesService: ReservesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  // Aqui me tengo que traer los metodos de mis reservas, editar etc....


}
