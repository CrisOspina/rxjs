/* 
  mapTo('a')
  - Permite transformar la entrada en una salida especifica, pueden ser números, objetos, etc...

*/

import { fromEvent } from 'rxjs'
import { mapTo } from 'rxjs/operators'

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

keyup$.pipe(
  mapTo( 'tecla presionada' )
).subscribe(console.log)