const PREFIX = 'https://www.omdbapi.com/?'
const API_KEY = '91044962'

export const getMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const MOVIES_URL = `${PREFIX}&apikey=${API_KEY}&s=${search}`
    const response = await fetch(MOVIES_URL)
    const json = await response.json()
    return json.Search
  } catch (error) {
    throw new Error('Error al buscar película')
  }
}
