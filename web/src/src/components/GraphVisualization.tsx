import React, { useEffect, useRef } from 'react'
import cytoscape from 'cytoscape'
import fcose from 'cytoscape-fcose'
import styled from '@emotion/styled'

cytoscape.use(fcose)

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`

interface Node {
  uid: string
  name: string
  type: string
  [key: string]: any
}

interface Edge {
  from: string
  to: string
  label: string
}

interface GraphData {
  nodes: {
    data: {
      id: string
      label: string
      type: string
      attributes: { [key: string]: any }
    }
  }[]
  edges: {
    data: {
      source: string
      target: string
      label: string
    }
  }[]
}

interface GraphVisualizationProps {
  data: GraphData
}

const GraphVisualization: React.FC<GraphVisualizationProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cyRef = useRef<cytoscape.Core | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    cyRef.current = cytoscape({
      container: containerRef.current,
      elements: {
        nodes: data.nodes,
        edges: data.edges,
      },
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(label)',
            'font-size': 12,
            'text-valign': 'center',
            'text-halign': 'center',
            'text-wrap': 'wrap',
            'text-max-width': '100px',
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'label': 'data(label)',
            'font-size': 10,
            'text-rotation': 'autorotate',
          },
        },
      ],
      layout: {
        name: 'cose',
        animate: false,
        fit: true,
        padding: 50,
        nodeDimensionsIncludeLabels: true,
        randomize: false,
        componentSpacing: 100,
        nodeRepulsion: () => 8000,
        },
        minZoom: 0.1,
        maxZoom: 2,
    })

    cyRef.current.on('tap', 'node', (evt) => {
      const node = evt.target
      console.log('Node clicked:', node.data())
    })

    return () => {
      if (cyRef.current) {
        cyRef.current.destroy()
      }
    }
  }, [data])

  return <Container ref={containerRef} />
}

export default GraphVisualization