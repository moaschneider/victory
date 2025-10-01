import React, { useState } from 'react'
import '../App.css'
import ChartCard from '../components/ChartCard'
import LineChartExample from '../components/charts/LineChartExample'
import BarChartExample from '../components/charts/BarChartExample'
import PieChartExample from '../components/charts/PieChartExample'
import AreaChartExample from '../components/charts/AreaChartExample'

function Home() {
  const [activeTab, setActiveTab] = useState('line')

  const charts = {
    line: {
      title: 'Gráfico de Linha',
      description: 'Ideal para mostrar tendências ao longo do tempo',
      component: <LineChartExample />
    },
    bar: {
      title: 'Gráfico de Barras',
      description: 'Perfeito para comparar valores entre categorias',
      component: <BarChartExample />
    },
    pie: {
      title: 'Gráfico de Pizza',
      description: 'Visualize proporções e porcentagens',
      component: <PieChartExample />
    },
    area: {
      title: 'Gráfico de Área',
      description: 'Mostre volumes e variações acumuladas',
      component: <AreaChartExample />
    }
  }

  return (
    <main className="main home-main">
      <div className="container home-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'line' ? 'active' : ''}`}
            onClick={() => setActiveTab('line')}
          >
            Linha
          </button>
          <button 
            className={`tab ${activeTab === 'bar' ? 'active' : ''}`}
            onClick={() => setActiveTab('bar')}
          >
            Barras
          </button>
          <button 
            className={`tab ${activeTab === 'pie' ? 'active' : ''}`}
            onClick={() => setActiveTab('pie')}
          >
            Pizza
          </button>
          <button 
            className={`tab ${activeTab === 'area' ? 'active' : ''}`}
            onClick={() => setActiveTab('area')}
          >
            Área
          </button>
        </div>

        <ChartCard
          title={charts[activeTab].title}
          description={charts[activeTab].description}
        >
          {charts[activeTab].component}
        </ChartCard>
      </div>
    </main>
  )
}

export default Home

