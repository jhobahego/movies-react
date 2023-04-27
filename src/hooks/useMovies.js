import { useCallback, useRef, useState } from 'react'
import { getMovies } from '../services/getMovies.js'

export default function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previusSearch = useRef(search)

  const searchMovies = useCallback(async ({ search }) => {
    if (search === previusSearch.current) return

    try {
      setLoading(true)
      previusSearch.current = search
      const newMovies = await getMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return { movies, searchMovies, loading }
}
