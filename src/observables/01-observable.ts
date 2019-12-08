import { Observable, Observer  } from 'rxjs'

const observer: Observer<any> = {

  next: value => console.log('siguiente [obs]: ', value),

  error: error => console.log('error [obs]: ', error),

  complete: () => console.log('completado [obs]')

}

// observable que tendra suscripciones
const obs$ = new Observable<string>(subs => {
  subs.next('hola')
  subs.next('mundo')
  
  // error provocado
  const a = undefined
  a.nombre = 'prueba'
  
  subs.complete()

  subs.next('hola')
  subs.next('mundo')
})

obs$.subscribe(observer)



// ejecutar observable

// tres argumentos que se pueden enviar a un Subscriber 

// 1ero - console.log(res) = procesar el next del suscriber 

// obs$.subscribe(console.log)
// obs$.subscribe(
//   // PartialObserver
// )

// obs$.subscribe(
//   valor => console.log('next: ', valor),
//   error => console.warn('error: ', error),
//   () => console.info('Completado')
// )

// obs$.subscribe(res => {

// })








