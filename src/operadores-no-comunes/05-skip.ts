import { interval, fromEvent } from "rxjs"
import { takeUntil, skip } from "rxjs/operators"

/*
  skip(3)
  - Para saltar o emitir x cantidad de emisiones iniciales
*/

const boton = document.createElement('button')
boton.innerHTML = 'Detener timer'
document.querySelector('body').append(boton)

const counter$ = interval(1000)
const click$ = fromEvent(boton, 'click').pipe( skip(1))

counter$.pipe(
    takeUntil(click$)
  )
  .subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
  })