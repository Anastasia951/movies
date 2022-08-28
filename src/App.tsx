import React from 'react'
import { Header } from './components/Header/Header'
import { useGetPopularQuery } from './api/movie.api'
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
