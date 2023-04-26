import { useEffect, useState } from 'react'
import '../style.css'
import Movie from './components/ListOfMovies'
import getMovies from './services/GetMovies'

export default function Home () {
  const [search, setSearch] = useState()
  const [movies, setMovies] = useState()

  useEffect(() => {
    const result = getMovies({ search })
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
        <Movie movies={movies} />
      </main>
    </div>
  )
}
