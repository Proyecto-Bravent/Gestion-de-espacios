import { Component, Input, OnInit } from '@angular/core';
import { Reserve } from 'src/app/interfaces/reserve';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  @Input() reserve: Reserve | any
  @Input() user: User | any

  constructor() { }

  ngOnInit(): void {
  }
  // Aqui me tengo que traer los metodos de mis reservas, editar etc....
}
