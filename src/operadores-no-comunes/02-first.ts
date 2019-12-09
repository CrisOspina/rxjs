import { fromEvent } from "rxjs";
import { take, first, map } from "rxjs/operators";

/*
  first()
  - Solo se completa la primera emisión  del observable

  first(x => x >= 10)
  - Se ejecuta hasta que no se cumpla más la condición
*/

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
  // tap(console.log),
  map(({clientY, clientX}) => ({clientY, clientX})),
  first(e => e.clientY >= 150)
 )
.subscribe({
  next: val => console.log('next: ', val ),
  complete: () => console.log('complete')
})

// click$.pipe(
//   first()
// )
// .subscribe({
//   next: val => console.log('next: ', val ),
//   complete: () => console.log('complete')
// })


// click$.pipe(
//   take(1)
// )
// .subscribe({
//   next: val => console.log('next: ', val ),
//   complete: () => console.log('complete')
// })