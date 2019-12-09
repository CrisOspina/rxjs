import { from } from "rxjs"
import { reduce, scan, map } from "rxjs/operators"

/*
  scan((acc, cur) => acc + cur, 0)
  - El operador scan es practicamente lo mismo que el reduce solo con una única diferencia:
  - cuando los valores son emitidos por los observables inmediatamente van saliendo conforme van ingresando, pero regresa su valor acumulado.


 */

const numeros = [1,2,3,4,5]

const totalAcc = (acc, cur) => acc + cur

// reduce
// from(numeros)
// .pipe( reduce(totalAcc, 0) )
// .subscribe(val => console.log('total reduce: ', val))

// // scan
// from(numeros)
// .pipe( scan(totalAcc, 0) )
// .subscribe(val => console.log('total scan: ', val))

// redux
const user = [
  { id: 'thor', autenticado: false, token: null },
  { id: 'thor', autenticado: true, token: 'ABC' },
  { id: 'thor', autenticado: true, token: 'ABC123' }
]

const state$ = from(user)

state$.pipe(
  scan((acc, cur) => {
    return {...acc, ...cur}
  }, { edad: 33})
)

state$.pipe(
  map(state => state)
).subscribe(console.log)


