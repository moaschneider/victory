import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory'
import chartData from '../../data/barChartData.json'

const BarChartExample = () => {
  const data = chartData.data

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={600}
      height={400}
      domainPadding={40}
    >
      <VictoryAxis
        label="Categorias"
        style={{
          axisLabel: { padding: 30, fontSize: 14 },
          tickLabels: { fontSize: 12 }
        }}
      />
      <VictoryAxis
        dependentAxis
        label="Valores"
        style={{
          axisLabel: { padding: 40, fontSize: 14 },
          tickLabels: { fontSize: 12 }
        }}
      />
      <VictoryBar
        data={data}
        style={{
          data: { 
            fill: ({ datum }) => {
              const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b']
              return colors[datum.x.charCodeAt(0) - 65] || '#667eea'
            }
          }
        }}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryTooltip />}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
      />
    </VictoryChart>
  )
}

export default BarChartExample

