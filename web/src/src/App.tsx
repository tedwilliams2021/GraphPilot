import React, { useState } from 'react'
import styled from '@emotion/styled'
import QueryInterface from './components/QueryInterface'
import GraphVisualization from './components/GraphVisualization'

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100vh;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`

interface BackendResponse {
  data: {
    queryGraph: {
      nodes: Array<{
        uid: string
        name: string
        type: string
        [key: string]: any
      }>
      edges: Array<{
        from: string
        to: string
        label: string
      }>
    }
  }
}

interface GraphData {
  nodes: Array<{
    data: {
      id: string
      label: string
      type: string
      attributes: { [key: string]: any }
    }
  }>
  edges: Array<{
    data: {
      source: string
      target: string
      label: string
    }
  }>
}

const transformData = (response: BackendResponse): GraphData => {
  const data = response.data.queryGraph
  return {
    nodes: data.nodes.map(node => ({
      data: {
        id: node.uid,
        label: node.name || node.uid,
        type: node.type,
        attributes: Object.entries(node)
          .filter(([key]) => !['uid', 'name', 'type'].includes(key))
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
      },
    })),
    edges: data.edges.map(edge => ({
      data: {
        source: edge.from,
        target: edge.to,
        label: edge.label,
      },
    })),
  }
}

function App() {
  const [graphData, setGraphData] = useState<GraphData | null>(null)

  const handleQuery = async (query: string) => {
    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data: BackendResponse = await response.json()
      setGraphData(transformData(data))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <Container>
      <QueryInterface onSubmit={handleQuery} />
      {graphData && <GraphVisualization data={graphData} />}
    </Container>
  )
}

export default App