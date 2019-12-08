/*
  Funciones que trabajan con intervalos de tiempo:

  interval(1000)
  - Crea un observable que emite una secuencia de números en un intervalo de tiempo especificado.
  - Al suscribirnos al observable que se genera mediante el interval entonces tendriamos una secuencia de valores que empiezan en cero hasta el fin de los tiempos.
  - Asincrono por naturaleza
  
  timer(2000)
  - Crea un observable que empieza a emitir valores después de una fecha especifica y luego de ese valor empieza a emitir los valores siguientes en un periodo de tiempo indicado.
  Ejemplo:
  - Después de 2 segundos va emitir el primer valor y se va completar dicho observable y no se seguira emitiendo valores.

*/

import { interval, timer } from 'rxjs'

const observer = {
  next: val => console.log('next', val),
  complete: () => console.log('complete')
}

// ahora
const hoy = new Date() 
hoy.setSeconds(hoy.getSeconds() + 5)

// observables
const interval$ = interval(1000)

// se completa despues de 2 segundos
// const timer$ = timer(2000)

// inicia intervalo despues de 2 segundos
// const timer$ = timer(2000, 1000)

// emite despues de 5 segundos actuales
const timer$ = timer(hoy)

// suscripcion
console.log('inicio')
// interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('fin')