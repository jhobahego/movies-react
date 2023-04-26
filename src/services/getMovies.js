const PREFIX = 'https://www.omdbapi.com/?'
const API_KEY = '91044962'

export default function getMovies ({ search }) {
  if (!search) return

  const MOVIES_URL = `${PREFIX}&apikey=${API_KEY}&s=${search}`

  return fetch(MOVIES_URL)
    .then(res => {
      return res.json()
    })
    .then(res => {
      if (res.ok) throw new Error('no se ha encontrado la película')
      return res.Search
    })
    .catch(err => {
      console.log(err)
    })
}
