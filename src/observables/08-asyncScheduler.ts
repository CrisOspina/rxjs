/*
  Funciones para crear observables
  asyncScheduler
  - No crea un observable, crea una suscripción
  - Nos permite crear un setInterval o un setTimeout utilizando una suscripción

  setTimeout(() => {}, 3000)
  setInterval(() => {}, 3000)
  Esto es basicamente lo que podemos hacer con un asyncScheduler, podemos tener mas control de lo que esta sucediendo.

  ** Una suscripción es el producto de un subcribe

*/

import { asyncScheduler } from 'rxjs'

/*
  Recibe 3 parametros
  1 - function() || arrow function
  2 - tiempo para empezar ejecución
  3 - parametros - pueden ser objetos
*/

// Ejecuta la función despues de dos segundos
const saludar = () => console.log('Hola')
asyncScheduler.schedule(saludar, 1000)

// Ejecuta la función despues de dos segundos con un tercer parametro que seria el state - parametro de la función
const saludar2 = nombre => console.log(`Hola ${nombre}`)
asyncScheduler.schedule(saludar2, 2000, 'Cris')

// Si son mas de dos parametros se debe enviar como un objeto
const saludar3 = human  => {
  console.log(`Hola ${human.nombre} ${human.apellido}`)
}

asyncScheduler.schedule(saludar3, 3000, {
  nombre: 'Cristian',
  apellido: 'Ospina'
})

// para el interval no puede recibir una arrow function, debe ser una function() normal
/*
  Recibe 3 parametros
  1 - function(state)
  2 - tiempo para empezar ejecución
  3 - state
*/

const subs = asyncScheduler.schedule( function(state){
  console.log('state:', state)
  this.schedule(state + 1, 1000)
}, 4000, 0)

// setTimeout(() => {
//   subs.unsubscribe()
//   console.log('fin')
// }, 7000)

asyncScheduler.schedule(() => subs.unsubscribe(), 7000)
