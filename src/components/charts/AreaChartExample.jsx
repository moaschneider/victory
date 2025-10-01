import React from 'react'
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme, VictoryVoronoiContainer } from 'victory'
import chartData from '../../data/areaChartData.json'

const AreaChartExample = () => {
  const data = chartData.data

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={600}
      height={400}
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
        />
      }
    >
      <VictoryAxis
        label="Meses"
        style={{
          axisLabel: { padding: 30, fontSize: 14 },
          tickLabels: { fontSize: 12, angle: -45, textAnchor: 'end' }
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
      <VictoryArea
        data={data}
        style={{
          data: { 
            fill: "url(#gradient)",
            stroke: "#667eea",
            strokeWidth: 2
          }
        }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" stopOpacity={0.8} />
          <stop offset="100%" stopColor="#764ba2" stopOpacity={0.2} />
        </linearGradient>
      </defs>
    </VictoryChart>
  )
}

export default AreaChartExample

