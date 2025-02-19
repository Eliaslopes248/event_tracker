import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LandingPage } from './pages/landingpage/landingpage'
import { Login } from './pages/authentication/login'

function App() {
  

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/a' element={<LandingPage/>} />
          </Routes>
      </BrowserRouter>
      
  )
}

export default App
