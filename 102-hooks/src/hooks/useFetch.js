import { useEffect, useState } from "react"

/* Step-4 */
export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true })

  useEffect(() => {
    setState({ data: state.data, loading: true })
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        console.log(y)
        setState({ data: y, loading: false })
      })
  }, [url, setState])

  return state
}
