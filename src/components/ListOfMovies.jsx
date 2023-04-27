function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map((el) =>
          (
            <li className='movie' key={el.imdbID}>
              <h3>{el.Title}</h3>
              <p>{el.Year}</p>
              <img src={el.Poster} alt={el.Title} />
            </li>
          )
        )
      }
    </ul>
  )
}

function NoResultsMovie () {
  return (
    <p>No se ha encontrado resultados</p>
  )
}

export default function Movie ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoResultsMovie />
  )
}
