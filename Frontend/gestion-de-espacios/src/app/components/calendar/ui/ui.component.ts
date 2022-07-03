import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import * as moment from 'moment'
import { Reserve } from 'src/app/interfaces/reserve'

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  @Input() reserves: Reserve[] = []

  // Emitimos el evento de seleccion de fecha   

  @Output() SelectedDate: EventEmitter<string>

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ]

  // Variables de seleccion de fecha

  monthSelect: any[] = []
  dateSelect: any
  dateValue: any

  constructor() {
    this.SelectedDate = new EventEmitter()
  }

  ngOnChanges() {
    this.getDaysFromDate(moment().format('MM'), moment().format('YYYY'))
  }

  ngOnInit(): void {
    this.getDaysFromDate(moment().format('MM'), moment().format('YYYY'))

  }

  getDaysFromDate(month: any, year: any) {

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate

    // Diferencia de dias entre la fecha inicial y la fecha final	(startDate - endDate)

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays)

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1
      const dayObject = moment(`${year}-${month}-${a}`)

      const haveReserve = this.reserves.find(reserves => {
        let justDay = dayObject.isSame(moment(reserves.date), 'day')
        return justDay
      })
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      }
    })
    this.monthSelect = arrayDays
  }

  changeMonth(flag: any) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month")
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"))
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"))
    }
  }
  async clickDay(day: any) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate
    let date = this.dateValue._i

    if (date !== "") {
      this.SelectedDate.emit(date)
    }
  }

}
