import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Main from './pages/Main/Main/Main'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Createpost from './pages/createpost/Createpost'


function App() {


  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/createpost' element = {<Createpost/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
