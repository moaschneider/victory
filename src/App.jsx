import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Simulator from './pages/Simulator'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulador" element={<Simulator />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <p>Desenvolvido com React + Victory</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

