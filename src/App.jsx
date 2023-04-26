import Movie from './components/ListOfMovies'
import { useSearch } from './hooks/useSearch'
import '../app.css'
import getMovies from './services/getMovies'

export default function Home () {
  const { movies, setSearch, search, loading } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    getMovies({ search })
  }

  return (
    <div className='page'>
      <header>
        <h1>Encuentra tu pelicula favorita</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Avengers, spiderman, black phanter...' autoFocus />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        {loading ? <p>cargando...</p> : <Movie movies={movies} />}
      </main>
    </div>
  )
}
