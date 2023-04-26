const PREFIX = 'https://www.omdbapi.com/?'
const API_KEY = '91044962'

export default function getMovies ({ search }) {
  if (search === '') return null

  const MOVIES_URL = `${PREFIX}&apikey=${API_KEY}&s=${search}`

  return fetch(MOVIES_URL)
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res.Search
    })
    .catch(() => {
      throw new Error('Error al buscar la película')
    })
}
