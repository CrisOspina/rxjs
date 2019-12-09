const API = 'https://api.github.com/users?per_page=5'

const errores = res => {
  if(!res.ok) throw new Error(res.statusText)
  return res
}

fetch(API)
  .then(errores)
  .then(res => res.json())
  .then(data => console.log('data: ', data))
  .catch(err => console.warn('error', err))