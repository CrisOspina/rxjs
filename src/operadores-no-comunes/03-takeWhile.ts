import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

/* 
  takeWhile(x => x < 4)
  - Permite recibir valores mientras la condición se cumpla
*/

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
  map(({x, y}) => ({x,y})),
  
  // takeWhile(( { y }) =>  y <= 150)

  // con el ultimo argumento en true, se imprimi el valor que sobrepasa la condición
  takeWhile(( { y }) =>  y <= 150, true)
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
})