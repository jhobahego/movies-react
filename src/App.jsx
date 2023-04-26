import Movie from './components/ListOfMovies'
import { useSearch } from './hooks/useSearch'
import '../app.css'

export default function Home () {
  const { movies, setSearch, loading } = useSearch()

  function handleSubmit (e) {
    e.preventDefault()
    const inputValue = e.target.searchInput.value
    setSearch(inputValue)
  }

  return (
    <div className='page'>
      <header>
        <h1>Encuentra tu pelicula favorita</h1>
        <form onSubmit={handleSubmit}>
          <input name='searchInput' placeholder='Avengers, spiderman, black phanter...' autoFocus />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        {loading ? <p>cargando...</p> : <Movie movies={movies} />}
      </main>
    </div>
  )
}
