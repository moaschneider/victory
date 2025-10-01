import React from 'react'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory'
import chartData from '../../data/lineChartData.json'

const LineChartExample = () => {
  const data = chartData.data

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={600}
      height={400}
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}
        />
      }
    >
      <VictoryAxis
        label="Eixo X"
        style={{
          axisLabel: { padding: 30, fontSize: 14 },
          tickLabels: { fontSize: 12 }
        }}
      />
      <VictoryAxis
        dependentAxis
        label="Eixo Y"
        style={{
          axisLabel: { padding: 40, fontSize: 14 },
          tickLabels: { fontSize: 12 }
        }}
      />
      <VictoryLine
        data={data}
        style={{
          data: { 
            stroke: "#667eea",
            strokeWidth: 3
          }
        }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
      />
    </VictoryChart>
  )
}

export default LineChartExample

