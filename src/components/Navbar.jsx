import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <h1 className="title">📊 Victory</h1>
            <p className="subtitle">Visualização de Dados</p>
          </div>
          <nav className="nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              <span className="nav-icon">📈</span>
              <span className="nav-text"> Gráficos</span>
            </Link>
            <Link 
              to="/simulador" 
              className={`nav-link ${location.pathname === '/simulador' ? 'active' : ''}`}
            >
              <span className="nav-icon">🎮</span>
              <span className="nav-text"> Simulador</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar

