import { useState, useEffect } from 'react'
import getMovies from '../services/getMovies'

export function useSearch () {
  const [search, setSearch] = useState()
  const [movies, setMovies] = useState()

  useEffect(() => {
    if (!search) return
    getMovies({ search })
      .then(res => {
        setMovies(res)
      })
  }, [search])

  return { search, setSearch, movies }
}
