import { of } from "rxjs"
import { ajax } from "rxjs/ajax"
import { catchError } from "rxjs/operators"

const url = 'https://httpbin.org/delaay/1'

const manejaError = res => {
  console.warn('error', res.message)
  return of({
    status: false,
    usuarios: []
  })
}

// const obs$ = ajax.getJSON(url)
//   .pipe( catchError(manejaError))

// const obs2$ = ajax(url)
//   .pipe( catchError(manejaError))

const obs$ = ajax.getJSON(url)

const obs2$ = ajax(url)

obs$
  .pipe(
    catchError(manejaError)
  )
.subscribe({
  next: data => console.log('getJson: ', data),
  error: err => console.warn('error en subs: ', err),
  complete: () => console.log('complete')
})

// obs2$.subscribe(data => console.log('ajax: ', data))