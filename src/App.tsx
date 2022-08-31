import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Film } from './pages/Film/Film'
import { Home } from './pages/Home/Home'
import { routes } from './routes/routes'
function App() {
  return (
    <>
      <Header />
      <div className='container content' style={{ marginTop: '90px' }}>
        <Routes>
          <Route path={routes.Home} element={<Home />} />
          <Route path={routes.FilmItem} element={<Film />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
