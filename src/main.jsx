import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import NavContext from './components/context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Stairs>
      <NavContext>
        <App />
      </NavContext>
    </Stairs>
  </BrowserRouter>
)
