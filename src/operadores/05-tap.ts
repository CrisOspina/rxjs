/* 
  comunicación entre componentes
  tap(x => console.log(x))
  - Nos ayuda a ver como va fluyendo la información a través de nuestros observables
  - Nos permite disparar efectos secundarios
*/

import { range } from 'rxjs'
import { tap, map } from 'rxjs/operators'

const numero$ = range(1, 5)

numero$.pipe(
  tap( x => console.log('antes: ', x)),
  map( val => val * 10 ),
  tap({
    next: valor => console.log('despues:', valor),
    complete: () => console.log('complete')
  })
).subscribe()