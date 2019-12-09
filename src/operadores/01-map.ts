/* 
  map(x = x * 10)
  - Este operador es el que mas se utiliza ya que nos permite transformar lo que recibimos o lo que emite el observable en algo que nosotros ocupemos como por ejemplo:
    - Extrer información
    - Transformar información
    - Regresar algo diferente
  
  - Para ser uso de los operadores necesitamos llamar un método de los observables llamado pipe() y dentro del pipe() debemos colocar nuestros operadores
*/

import { range, fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

// js
// range(1, 5)
//   .pipe( map(val => val * 10) )
//   .subscribe(console.log)

// typescript
// range(1, 5)
//   .pipe( map<number, number>(val => val * 10) )
//   .subscribe(console.log)

// range(1, 5)
//   .pipe(
//     map<number, string>(val => (val * 10).toString())
//   ).subscribe(console.log)

// js
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
keyup$.pipe( 
    map(e => e.code)
  )
  .subscribe(console.log)

// keyup$.subscribe(val => console.log('map', val.code))
