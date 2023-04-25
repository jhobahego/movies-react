import { useState } from 'react'
import '../style.css'

export default function Home () {
  const [search, setSearch] = useState()

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
        <p>Aquí van los resultados: {search}</p>
      </main>
    </div>
  )
}
