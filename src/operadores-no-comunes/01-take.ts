import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

/*
  take(2)
  - Es util cuando se requiere limitar la cantidad de emisiones que un observable puede tener
  - Puede cancelar la ejecución del observable
*/

const numeros$ = of(1,2,3,4,5)
numeros$.pipe( 
    tap(console.log),
    take(3)
  )
  .subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete ')
  })
