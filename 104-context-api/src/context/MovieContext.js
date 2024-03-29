import React, { useState, createContext } from "react"

export const MovieContext = createContext()

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Harry Potter", price: "$10", id: "234" },
    { name: "Inception", price: "$20", id: "2345" },
    { name: "Titanic", price: "$40", id: "23434" },
    { name: "X-Men", price: "$30", id: "23324" },
    { name: "Batman", price: "$70", id: "2334" },
  ])

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}


