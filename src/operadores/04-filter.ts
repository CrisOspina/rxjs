/* 
  filter(val => val % 2 === 1)
  - Sirve para filtrar las emisiones de los valores que emite el observable

  - Los operadores se ejecutan en orden

*/

import { range, from, fromEvent } from 'rxjs'
import { filter, map } from 'rxjs/operators'

// range(1,10)
//   .pipe(
//     filter(val => val % 2 === 1)
//   )
//   .subscribe(console.log)


// range(1,10)
//   .pipe(
//     filter((val, i) => {
//       console.log('index: ', i)
//       return val % 2 === 1
//     })
//   )
//   .subscribe(console.log)

const personajes = [
  {
    tipo: 'heroe',
    nombre: 'Batman'
  },
  {
    tipo: 'heroe',
    nombre: 'Thor'
  },
  {
    tipo: 'villano',
    nombre: 'hades'
  }
]

const data$ = from(personajes)

data$.pipe(
  filter(
    value => value.tipo === 'heroe'
  )
).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

keyup$.pipe(
  map( e => e.code ),
  filter( key => key === 'Enter' )
).subscribe(console.log)