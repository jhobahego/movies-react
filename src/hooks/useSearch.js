import { useState, useEffect } from 'react'
import getMovies from '../services/getMovies'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState()

  useEffect(() => {
    if (!search) return
    setLoading(true)
    getMovies({ search })
      .then(res => {
        setMovies(res)
      }).finally(
        setLoading(false)
      )
  }, [search])

  return { search, setSearch, movies, loading }
}
