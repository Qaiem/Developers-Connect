import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../components/auth/login'
import Register from '../components/auth/Register'



function App() {
  return (
     <Router>
      <div>
        <Navbar />
        <Route exact path='/' Component={Hero} />
        <div className='container'>
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
        </div>
        <Footer />
      </div>
      </Router>
  )
}

export default App
