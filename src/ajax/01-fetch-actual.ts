const url = 'https://api.github.com/users?per_page=5'

const manejaErrores = res => {
  if(!res.ok) throw new Error(res.statusText)
  return res
}

const fetchPromesa = fetch(url)

// fetchPromesa
//   .then(res => res.json())
//   .then(console.log)
//   .catch(err => console.warn('err', err))

fetchPromesa
  .then(manejaErrores)
  .then(res => res.json())
  .then(data => console.log('data: ', data))
  .catch(err => console.warn('err', err))