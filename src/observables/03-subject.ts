/* 
  subject
  - Tipo especial de observable
  - Casteo múltiple
    Muchas suscripciones van a estar subscritas a este mismo subject y va a servirnos para distribuir la misma información a todos los lugares deonde esten subscritos o a todos los lugares que le interese ese valor.
  - También es un observer
  - También se puede manejar lo que es el Next, Error y Complete
*/

import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<any> = {
  next: value => console.log('next', value),
  error: error => console.warn('error', error),
  complete: () => console.info('completado')
}

const intervalo$ = new Observable(subs => {
  const intervalID =  setInterval(() => {
    subs.next(Math.random())
  }, 1000)

  return () => {
    clearInterval(intervalID)
    console.log('Intervalo destruido')
  }
})

/*
  Caracteristicas del Subject
  1 - Casteo múltiple
  2 - También en un observer
  3 - Next, error y complete
 */

const subject$ = new Subject()

const subscription = intervalo$.subscribe(subject$)

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout(() => {
  subject$.next(10)
  subject$.complete()
  subscription.unsubscribe()
}, 3500)