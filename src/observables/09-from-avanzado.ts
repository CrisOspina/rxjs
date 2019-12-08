/* 
  Funciones para crear observables

  from
  - Crea un observable en base a un array, promise, iterable, observable, entre otros. 
*/

import { from } from 'rxjs'

const observer = {
  next: val => console.log('next: ', val),
  complete: () => console.log('complete')
}

const miGenerador = function*() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

const miIterable = miGenerador()

// for(let id of miIterable) {
//   console.log(id)
// }

from(miIterable).subscribe(observer)

// const src$ = from([1,2,3,4,5])
// const srcString$ = from('thor')

const srcPromise$ = from( fetch('https://api.github.com/users/CrisOspina'))

// src$.subscribe(observer)
// srcString$.subscribe(observer)

// srcPromise$.subscribe(observer)

// srcPromise$.subscribe( async (res) => {
//   const data = await res.json()
//   console.log(data)
// })


