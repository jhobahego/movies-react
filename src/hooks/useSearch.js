import { useState, useEffect } from 'react'
import getMovies from '../services/getMovies'

export function useSearch () {
  const [search, setSearch] = useState()
  const [movies, setMovies] = useState()

  useEffect(() => {
    const result = getMovies({ search })
    if (result) {
      result.then(movie => setMovies(movie))
    }
  }, [search])

  return { search, setSearch, movies }
}
