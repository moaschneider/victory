import React from 'react'
import { VictoryPie, VictoryTheme } from 'victory'
import chartData from '../../data/pieChartData.json'

const PieChartExample = () => {
  const data = chartData.data

  const colorScale = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b']

  return (
    <VictoryPie
      data={data}
      width={600}
      height={400}
      theme={VictoryTheme.material}
      colorScale={colorScale}
      style={{
        labels: { fontSize: 14, fill: '#333' }
      }}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}
      innerRadius={60}
      padAngle={2}
    />
  )
}

export default PieChartExample

