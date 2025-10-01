import React, { useState } from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory'
import './Simulator.css'

function Simulator() {
  const [salesData, setSalesData] = useState([
    { x: 'Produto A', y: 10 },
    { x: 'Produto B', y: 15 },
    { x: 'Produto C', y: 8 },
    { x: 'Produto D', y: 12 },
    { x: 'Produto E', y: 5 }
  ])

  const [selectedProduct, setSelectedProduct] = useState('Produto A')

  const handlePurchase = () => {
    setSalesData(prevData => {
      return prevData.map(item => {
        if (item.x === selectedProduct) {
          return { ...item, y: item.y + 1 }
        }
        return item
      })
    })

    // Feedback visual
    const btn = document.querySelector('.purchase-btn')
    btn.textContent = '✓ Compra Registrada!'
    btn.style.background = '#43e97b'
    
    setTimeout(() => {
      btn.textContent = '🛒 Adicionar +1'
      btn.style.background = ''
    }, 1500)
  }

  const handleReset = () => {
    setSalesData([
      { x: 'Produto A', y: 10 },
      { x: 'Produto B', y: 15 },
      { x: 'Produto C', y: 8 },
      { x: 'Produto D', y: 12 },
      { x: 'Produto E', y: 5 }
    ])
  }

  return (
    <main className="main">
      <div className="simulator-container">
        <div className="left-panel">
          <div className="control-box">
            <h2 className="box-title">🛍️ Simulador de Compras</h2>

            <div className="control-row">
              <div className="form-group">
                <label htmlFor="product">Produto</label>
                <select 
                  id="product"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="form-select"
                >
                  {salesData.map(item => (
                    <option key={item.x} value={item.x}>
                      {item.x}
                    </option>
                  ))}
                </select>
              </div>

              <div className="button-group">
                <button 
                  onClick={handlePurchase}
                  className="purchase-btn"
                >
                  🛒 Adicionar +1
                </button>

                <button 
                  onClick={handleReset}
                  className="reset-btn"
                >
                  🔄 Resetar
                </button>
              </div>
            </div>
          </div>

          <div className="json-box json-box-desktop">
            <h2 className="box-title">📄 Dados (JSON)</h2>
            <pre className="json-display">
              {JSON.stringify({ data: salesData }, null, 2)}
            </pre>
          </div>
        </div>

        <div className="right-panel">
          <div className="chart-box">
            <h2 className="box-title">📊 Gráfico de Vendas em Tempo Real</h2>
            <div className="chart-wrapper">
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={40}
                animate={{
                  duration: 500,
                  easing: "bounce"
                }}
              >
                <VictoryAxis
                  label="Produtos"
                  style={{
                    axisLabel: { padding: 35, fontSize: 16, fontWeight: 600 },
                    tickLabels: { fontSize: 13, angle: -15, textAnchor: 'end' }
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  label="Vendas"
                  style={{
                    axisLabel: { padding: 45, fontSize: 16, fontWeight: 600 },
                    tickLabels: { fontSize: 13 }
                  }}
                />
                <VictoryBar
                  data={salesData}
                  style={{
                    data: { 
                      fill: ({ datum }) => {
                        const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b']
                        const index = salesData.findIndex(item => item.x === datum.x)
                        return colors[index] || '#667eea'
                      },
                      cursor: 'pointer'
                    }
                  }}
                  labels={({ datum }) => datum.y}
                  labelComponent={<VictoryTooltip />}
                />
              </VictoryChart>
            </div>
          </div>

          <div className="json-box json-box-mobile">
            <h2 className="box-title">📄 Dados (JSON)</h2>
            <pre className="json-display">
              {JSON.stringify({ data: salesData }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Simulator

