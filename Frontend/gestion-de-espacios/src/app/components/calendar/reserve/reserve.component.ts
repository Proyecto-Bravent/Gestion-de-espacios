import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reserve } from 'src/app/interfaces/reserve';
import { ReservesService } from 'src/app/services/reserves.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  @Input() reserve: Reserve | any



  constructor(private reservesService: ReservesService) { }

  ngOnInit(): void {
  }
  // Aqui me tengo que traer los metodos de mis reservas, editar etc....
}
