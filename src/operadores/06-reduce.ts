import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

/*
  reduce((acc, curr) => acc + curr, 0)
  -- acc == acumulador
  -- curr == currentValue, valor actual
  -- acc + curr === acumulador + valor actual
  -- 0 === valor inicial del acumulador
  - Aplicar una función acumuladora a las emisiones por un observable

 */

// reduce en js
// const number = [1,2,3,4,5]

const totalReducer = (acc, curr) => acc + curr

// const total = number.reduce(totalReducer, 0)
// console.log('total: ', total)

interval(1000)
  .pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
  )
  .subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
  })