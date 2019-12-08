/* 
  subscribe and unsubscribe
  subscribe
  - Los valores de los observables se imprimen a través de los subscribe() y se detienen con los unsubscribe()
*/

import { Observable, Observer  } from 'rxjs'

const observer: Observer<any> = {
  next: value => console.log('next', value),
  error: error => console.warn('error', error),
  complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subscriber => {
  let count = 0
  const interval =setInterval(() => {
    count++
    subscriber.next(count)
    console.log(count)
  }, 1000)

  setTimeout(() => {
    subscriber.complete()
  }, 2500);

  return () => {
    clearInterval(interval)
    console.log('intervalo destruido')
  }
})

const subs1 = intervalo$.subscribe(observer)
const subs2 = intervalo$.subscribe(observer)
const subs3 = intervalo$.subscribe(observer)

subs1.add(subs2).add(subs3)

setTimeout(() => {
  subs1.unsubscribe()
  console.log('completado timeout')
}, 6000)