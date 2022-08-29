import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container' style={{ marginTop: '90px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
