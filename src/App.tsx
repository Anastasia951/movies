import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { routes } from './routes/routes'
function App() {
  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '90px' }}>
        <Routes>
          <Route path={routes.Home} element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
