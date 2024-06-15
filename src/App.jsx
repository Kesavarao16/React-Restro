import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import Products from './suby/components/Products'
import { Route, Routes } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element = { <LandingPage />} />
        <Route path ='/products/:firmId/:firmName' element={ <Products/>}/>
        </Routes>
  
  </div>
  )
}

export default App