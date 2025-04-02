# 🌌 GraphPilot - Planning Document

## Project Overview
Dgraph Visual Explorer, named GraphPilot, is a sleek, Ratel-inspired interface for querying and navigating Dgraph databases through interactive graph visualizations, wrapped in a modern, elegant dark theme. The tool will enable developers and data analysts to write DQL/GraphQL± queries and instantly visualize the results as dynamic, force-directed graphs, making it easy to explore entity relationships in real time.

## Product Visio
A sophisticated, aesthetically pleasing tool that prioritizes user experience and visual elegance while providing powerful Dgraph exploration capabilities. The interface follows design principles inspired by Linear:
- **Dark mode-first** with deep grays, soft contrast, and vibrant accent colors
- **Monospaced fonts** for queries and clean sans-serif for UI elements
- Smooth transitions and subtle animations for an ultra-polished feel
- Minimal chrome, maximum focus — letting the graph visualization take center stage

## Scope

### Core Features

1. **Graph Query & Visualization**
   - Write and execute DQL or GraphQL± queries
   - Results rendered as dynamic, force-directed graphs
   - Smooth animations for nodes and edges
   - Real-time exploration of entity relationships

2. **Node Interaction**
   - Double-click nodes to trigger contextual queries using its UID
   - Seamlessly fetch and display related nodes and edges
   - Expand current graph or switch views without losing context
   - Pin key nodes for continuity across different views

3. **Direct UID/XID Lookup**
   - Smart input field for pasting UIDs (`0x123`) or XIDs (`external_id`)
   - Automatic deep-expand queries (e.g., `{ node(func: uid(0x123)) { uid expand(_all_) { uid expand(_all_) } } }`)
   - Immediate visualization of results
   - Pinned nodes for maintaining context during navigation

4. **Persistent View Controls**
   - Persistent dropdown menu for exploring multiple nodes/queries
   - Pin, switch, and compare views without resetting
   - Cross-reference data across different query results
   - Ideal for complex graph exploration

### Technical Stack

1. **Backend**
   - Go (Golang) for core functionality and server
   - `github.com/dgraph-io/dgo/v2` for Dgraph interactions
   - `github.com/gin-gonic/gin` for web server and API endpoints

2. **Frontend**
   - Modern JavaScript framework using React
   - Cytoscape.js for interactive graph visualization
   - Custom CSS for Linear-inspired dark theme

3. **Visualization Engine**
   - Force-directed graph layout algorithms
   - Custom node/edge rendering with SVG
   - Animation and transition system for smooth interactions
   - Support for node pinning and context preservation

4. **Deployment**
   - Standalone web application
   - Docker container for easy deployment
   - Cross-platform support

## Technical Challenges & Considerations

1. **Performance Optimization**
   - Efficient handling of large graph datasets
   - Lazy loading for expanded graph sections
   - Virtualization for handling many nodes
   - WebGL rendering for very large graphs (optional)

2. **User Experience**
   - Balancing visual appeal with performance
   - Ensuring smooth animations even with complex graphs
   - Creating intuitive interaction patterns
   - Maintaining context across different queries and views

3. **Query Management**
   - Implementing a robust query parser and executor
   - Handling different query languages (DQL and GraphQL±)
   - Providing helpful error messages and suggestions
   - Optimizing queries for visualization performance

4. **State Management**
   - Tracking pinned nodes across views
   - Managing multiple concurrent graph views
   - Preserving user preferences and settings
   - Implementing undo/redo functionality

## Development Phases

### Phase 1: Foundation & Core Infrastructure 
- Set up project structure and development environment
- Implement basic Dgraph connection and query execution
- Create initial web server and API endpoints
- Establish basic frontend scaffold with dark theme

### Phase 2: Visualization Engine 
- Implement Cytoscape.js graph rendering
- Create force-directed layout system
- Develop custom node and edge styling
- Add basic interaction capabilities (zoom, pan, click)

### Phase 3: Core Features Development 
- Build query interface with syntax highlighting
- Implement node expansion on double-click
- Create UID/XID lookup functionality
- Develop node pinning system
- Add view persistence mechanisms

### Phase 4: Polish & Refinement 
- Refine animations and transitions
- Optimize performance for larger graphs
- Enhance UI/UX details and interactions
- Add helpful tooltips and documentation
- Implement advanced styling options

### Phase 5: Testing & Launch Preparation 
- Conduct thorough testing with various Dgraph instances
- Fix bugs and address edge cases
- Prepare documentation
- Create deployment packages

## Success Criteria
- Tool successfully visualizes complex Dgraph datasets with smooth performance
- Users can seamlessly navigate between nodes while maintaining context
- Compare two drilldowns side by side
- The interface feels polished, modern, and intuitive
- Query results render accurately as interactive graphs
- The aesthetic matches the Linear-inspired design vision
- Expanded nodes and relationships are clearly visualized