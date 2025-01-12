import {BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Home from './pages/Home'
import Signup from './pages/auth/Signup'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
