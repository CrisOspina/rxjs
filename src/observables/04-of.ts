/* 
  Funciones para crear observables
  of
  - Function que nos permite crear observables en base a un estado de elementos.
  - Convierte el argumento en una secuencia de valores que van hacer emitidos por el observable de manera sincrona.
  - El operador of emite los valores en secuencia uno por uno de manera sincrona y cuando emite el ultimo valor, automaticamente se completa el observable.
  - Toma argumentos y genera una secuencia

  from
  - Crea un observable en base a un array, promise, iterable, observable, entre otros. 
*/

import { of, from } from 'rxjs'

// const obs$ = of(1,2,3,4,5,6)
// const obs$ = of([1,2,3,4,5,6])
// const obs$ = of(...[1,2,3,4,5,6])
// const obs$ = of([1,2], {a:1, b:2} function(){}, true, Promise.resolve(true  ))

// console.log('inicio del obs')

// obs$.subscribe(
//   next => console.log('next: ', next),
//   null,
//   () => console.log('Completado')
// )

// console.log('fin del obs')



