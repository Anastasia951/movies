import React from 'react'
import { useGetPopularQuery } from './api/movie.api'
import { Header } from './components/Header/Header'

function App() {
  const { data, error, isLoading } = useGetPopularQuery(1)
  console.log(data)
  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App
