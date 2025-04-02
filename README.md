# GraphPilot

A graph visualization tool for exploring connected data.

## Features

- Interactive graph visualization
- Node exploration with double-click
- Detailed node information on hover
- Support for different node types (Company, Department, Project, Employee, Technology)
- Real-time graph updates

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - Cytoscape.js
  - Emotion (styled components)
  - Vite

- Backend:
  - Go
  - Gin web framework

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Go (v1.19 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tedwilliams2021/GraphPilot.git
   cd GraphPilot
   ```

2. Install frontend dependencies:
   ```bash
   cd web/src
   npm install
   ```

3. Install backend dependencies:
   ```bash
   go mod tidy
   ```

### Running the Application

1. Start the backend server:
   ```bash
   go run cmd/graphpilot/main.go
   ```

2. In a new terminal, start the frontend:
   ```bash
   cd web/src
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a starting node ID (e.g., "0x1") in the search box
2. Click "Start" to visualize the graph
3. Double-click on nodes to explore their relationships
4. Hover over nodes to see detailed information