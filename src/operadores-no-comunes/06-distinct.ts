import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

/* 
  distinct()
  - Nos deja pasar unicamente los valores que no han sido previamente emitidos por el observable
*/

const numeros$ = of(1,1,1,2,2,3,4,4,5,5,6,1)

numeros$.pipe(
  distinct() // ===
).subscribe(console.log)

const personajes = [
  { nombre: 'Megaman' },
  { nombre: 'x' },
  { nombre: 'Zero' },
  { nombre: 'x' },
  { nombre: 'Zero' },
  { nombre: 'Megaman' },
  { nombre: 'Megaman' }
]

from(personajes)
  .pipe( distinct(personaje => personaje.nombre))
  .subscribe(console.log)