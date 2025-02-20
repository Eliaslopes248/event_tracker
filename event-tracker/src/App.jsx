import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LandingPage } from './pages/landingpage/landingpage'
import { Login } from './pages/authentication/login'
import { Signup } from './pages/authentication/signup'
import { Home } from './pages/homepage/home'

function App() {
  

  return (
      <BrowserRouter>
          <Routes>
            
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<Home/>}/>

          </Routes>
      </BrowserRouter>
      
  )
}

export default App
