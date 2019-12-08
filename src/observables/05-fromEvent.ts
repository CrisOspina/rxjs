/* 
  fromEvent<Event>(document, 'event')
  - Nos permite crear observables en base a un event target.
*/

import { fromEvent } from 'rxjs'

// Eventos del DOM

const srcls = fromEvent<MouseEvent>(document, 'click')
const srcls2 = fromEvent<KeyboardEvent>(document, 'keyup')

const observer = {
  next: val => console.log('next: ', val)
}

srcls.subscribe(({x, y}) => console.log(x, y))

srcls2.subscribe(evento => console.log(evento.key))