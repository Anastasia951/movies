import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <IconContext.Provider value={{ color: '#202020', size: '1rem' }}> */}
        <App />
        {/* </IconContext.Provider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
