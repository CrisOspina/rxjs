import { interval, fromEvent } from "rxjs"
import { takeUntil } from "rxjs/operators"

/*
  takeUntil(clickBtn$)
  - Recibe como argumento otro observable
  - Sigue recibiendo los valores y siga emitiendolos hasta que el segundo observable emita su primer valor

*/

const boton = document.createElement('button')
boton.innerHTML = 'Detener timer'
document.querySelector('body').append(boton)

const counter$ = interval(1000)
const click$ = fromEvent(boton, 'click')

counter$.pipe(
    takeUntil(click$)
  )
  .subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
  })