/*
  Funciones para crear observables
  Function Range:
  Nos crea un observable que emite una secuencia de números en base a un rango.
  Por defecto son sincronos pero se pueden transformar en asincronos utilizando un asyncScheduler.
    Ejemplo:
    range(1,5)

*/

import { of, range, asyncScheduler } from 'rxjs'

// const src$ = of(1,2,3,4,5)

// range sincrono
// const src$ = range(1,5)

// range asincrono
const src$ = range(1,5, asyncScheduler)

console.log('inicio')
src$.subscribe(console.log)
console.log('fin')