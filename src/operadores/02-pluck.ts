/* 
  pluck('v')
  - El operador pluck es util cuando nosotros ocupamos extraer simplemente un valor de el objeto que estamos recibiendo y que ese sea la nueva emisión de la salida del observable.
  - También puede trabajar con objetos anidados
*/

import { fromEvent  } from 'rxjs'
import { map, pluck } from 'rxjs/operators'

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

keyup$.pipe(
  pluck('key')
).subscribe(console.log)

keyup$.pipe(
  pluck('target', 'baseURI')
).subscribe(console.log)

// keyup$.subscribe(console.log)