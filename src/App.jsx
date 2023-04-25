import { useEffect, useState } from 'react'
import '../style.css'

const PREFIX = 'https://www.omdbapi.com/?'
const API_KEY = '91044962'

export default function Home () {
  const [search, setSearch] = useState()
  const [movies, setMovies] = useState()

  const getMovies = () => {
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

  useEffect(() => {
    const result = getMovies()
    if (result) {
      result.then(movie => setMovies(movie))
    }
  }, [search])

  function handleSubmit (e) {
    e.preventDefault()
    const inputValue = e.target.searchInput.value
    setSearch(inputValue)
  }

  return (
    <div>
      <header>
        <h1>Encuentra tu pelicula favorita</h1>
        <form onSubmit={handleSubmit}>
          <input name='searchInput' placeholder='Avengers, spiderman, black phanter...' autoFocus />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        {
          movies
            ? (
              <ul>
                {
                movies.map((el) =>
                  (
                    <li key={el.imdbID}>
                      <h3>{el.Title}</h3>
                      <p>{el.Year}</p>
                      <img src={el.Poster} alt={el.Title} />
                    </li>
                  )
                )
              }
              </ul>
              )
            : (<p>no se han encontrado películas</p>)
        }
      </main>
    </div>
  )
}
