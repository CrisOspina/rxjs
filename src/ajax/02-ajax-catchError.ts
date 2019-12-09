import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, pluck, catchError } from 'rxjs/operators'

const atrapaError = err => {
  console.warn('error en: ', err)
  return of([])
}

const url = 'https://api.github.com/users?per_page=5'

ajax(url)
  .pipe(
    // map(res => res.response)
    pluck('response'),
    catchError(atrapaError)
  )
.subscribe(user => console.log('usuarios: ', user))