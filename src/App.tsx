import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import Home from './components/Home'

const App: React.FC = (): JSX.Element => {
  return (
      <Router>
       <Header/>
       <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
       </Router>
  )
}

export default App
