import { useCallback } from 'react'
import Movie from './components/ListOfMovies.jsx'
import { useSearch } from './hooks/useSearch.js'
import debounce from 'just-debounce-it'
import useMovies from './hooks/useMovies.js'
import '../app.css'

export default function Home () {
  const { search, updateSearch, error } = useSearch()
  const { movies, searchMovies, loading } = useMovies({ search })

  const debouncedSearchMovies = useCallback(
    debounce(search => {
      searchMovies({ search })
    }, 300)
    , [searchMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    searchMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedSearchMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Encuentra tu pelicula favorita</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={search} placeholder='Avengers, spiderman, black phanter...' autoFocus
          />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        {loading ? <p>cargando...</p> : <Movie movies={movies} />}
      </main>
    </div>
  )
}
