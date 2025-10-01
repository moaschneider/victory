import React from 'react'
import './ChartCard.css'

const ChartCard = ({ title, description, children }) => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h2 className="chart-title">{title}</h2>
        <p className="chart-description">{description}</p>
      </div>
      <div className="chart-content">
        {children}
      </div>
    </div>
  )
}

export default ChartCard

