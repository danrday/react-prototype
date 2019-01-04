let d3 = require('d3')
let React = require('react')
import ReactDOM from 'react-dom'

import forceData from './data'

/////// Functions and variables

const width = 1500
const height = 1000
const color = d3.scaleOrdinal(d3.schemeCategory10)

const enterNode = selection => {
    selection
        .select('circle')
        .attr('r', function(d) {
            if (
                d.id === 0 ||
                d.id === 3 ||
                d.id === 7 ||
                d.id === 8 ||
                d.id === 11 ||
                d.id === 15
            ) {
                return 30
            } else {
                return 15
            }
        })
        .style('fill', function(d) {
            return color(d.name)
        })

    selection.select('text').attr('dy', '.95em')
    // .style('transform', 'translateX(-50%,-90%')

    selection
        .select('rect')
        // .style('transform', 'translateX(-90%,-50%')
        .style('fill', function(d) {
            if (
                d.id === 0 ||
                d.id === 3 ||
                d.id === 7 ||
                d.id === 8 ||
                d.id === 11 ||
                d.id === 15
            ) {
                return 'orange'
            } else {
                return 'yellow'
            }
        })
        .attr('width', function(d) {
            console.log('hi', d)
            let width = d.name.length * 7
            return width
        })
        .attr('height', function(d) {
            return '20'
        })
}

const updateNode = selection => {
    selection.attr('transform', d => {
        // let xPos = Math.max(30, Math.min(1000 - 30, d.x))
        // let yPos = Math.max(30, Math.min(600 - 30, d.y))
        return 'translate(' + d.x + ',' + d.y + ')'
    })
}

const enterLink = selection => {
    selection
        .attr('stroke-width', 2)
        .style('stroke', 'brown')
        .style('opacity', '.2')
}

const updateLink = selection => {
    // selection
    //     .attr('x1', d => Math.max(30, Math.min(1000 - 30, d.source.x)))
    //     .attr('y1', d => Math.max(30, Math.min(600 - 30, d.source.y)))
    //     .attr('x2', d => Math.max(30, Math.min(1000 - 30, d.target.x)))
    //     .attr('y2', d => Math.max(30, Math.min(600 - 30, d.target.y)))

    selection
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
}

const updateGraph = selection => {
    selection.selectAll('.node').call(updateNode)
    selection.selectAll('.link').call(updateLink)
}

/////// App component. Hold graph data in state and renders Graph component.
/////// Graph component in turn renders Link and Node components.

class App extends React.Component {
    state = {
        data: forceData,
        lastClickedNode: null,
    }

    handleClick = currentClickedNode => {
        const { lastClickedNode } = this.state

        if (typeof lastClickedNode === 'number') {
            const newLink = {
                source: lastClickedNode,
                target: currentClickedNode,
            }

            const linkAlreadyExists = this.state.data.links.find(function(
                currentClickedNode,
            ) {
                return (
                    // Check for target -> source AND source -> target
                    (currentClickedNode.source.id === newLink.source &&
                        currentClickedNode.target.id === newLink.target) ||
                    (currentClickedNode.source.id === newLink.target &&
                        currentClickedNode.target.id === newLink.source)
                )
            })

            let newLinks
            if (linkAlreadyExists) {
                newLinks = this.state.data.links.filter(function(e) {
                    return e !== linkAlreadyExists
                })
            } else {
                newLinks = [...this.state.data.links, newLink]
            }

            const newData = { nodes: this.state.data.nodes, links: newLinks }
            this.setState({ data: newData })
            this.setState({ lastClickedNode: null })
        } else {
            this.setState({ lastClickedNode: currentClickedNode })
        }
    }

    render() {
        return (
            <div>
                <div
                    className="graphContainer"
                    style={{ position: 'fixed', 'z-index': 3000 }}
                >
                    <Graph
                        data={this.state.data}
                        lastClickedNode={this.state.lastClickedNode}
                        handleClick={this.handleClick}
                    />
                </div>

                <div
                    style={{
                        'z-index': 2000,
                        position: 'fixed',
                        width: '200px',
                        background: '#D3D3D3',
                        right: '0px',
                        height: '100%',
                    }}
                >
                    Filters
                </div>
            </div>
        )
    }
}

/////// Graph component. Holds Link and Node components

class Graph extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (prevProps.data.links.length !== this.props.data.links.length) {
        window.force
            .force('link', d3.forceLink(this.props.data.links).distance(90))
            .restart()
        // }

        const lastClicked = typeof this.props.lastClickedNode === 'number'
        if (lastClicked) {
            let self = this
            d3.selectAll('circle')
                .filter(function(d, i) {
                    return i === self.props.lastClickedNode
                })
                .style('fill', function(d) {
                    return 'red'
                })
        } else {
            d3.selectAll('circle').style('fill', function(d) {
                return color(d.name)
            })
        }
    }
    componentDidMount() {
        this.d3Graph = d3.select(ReactDOM.findDOMNode(this))

        this.d3Graph.call(d3.zoom().on('zoom', zoomed))

        function zoomed() {
            d3.select('.frameForZoom').attr('transform', d3.event.transform)
        }

        let force = d3
            .forceSimulation(this.props.data.nodes)
            .force('charge', d3.forceManyBody().strength(50))
            .force('link', d3.forceLink(this.props.data.links).distance(90))
            .force(
                'center',
                d3
                    .forceCenter()
                    .x(width / 2)
                    .y(height / 2),
            )
            .force('collide', d3.forceCollide([65]).iterations([60]))

        function dragStarted(d) {
            if (!d3.event.active) force.alphaTarget(0.3).restart()
            d.fx = d.x
            d.fy = d.y
        }

        function dragging(d) {
            d.fx = d3.event.x
            d.fy = d3.event.y
        }

        function dragEnded(d) {
            if (!d3.event.active) force.alphaTarget(0)
            d.fx = null
            d.fy = null
        }

        const node = d3.selectAll('g.node').call(
            d3
                .drag()
                .on('start', dragStarted)
                .on('drag', dragging)
                .on('end', dragEnded),
        )

        force.on('tick', () => {
            this.d3Graph.call(updateGraph)
        })

        // set force function on window object to easily access it from React's update lifecyle method
        window.force = force
    }

    render() {
        var nodes = this.props.data.nodes.map(node => {
            return (
                <Node
                    data={node}
                    name={node.name}
                    key={node.id}
                    handleClick={this.props.handleClick}
                />
            )
        })
        var links = this.props.data.links.map((link, i) => {
            return <Link key={i} data={link} />
        })
        return (
            <svg
                className="graph"
                width={width}
                height={height}
                style={{ border: '1px solid black' }}
            >
                <g className="frameForZoom">
                    <g>{nodes}</g>
                    <g>{links}</g>
                </g>
            </svg>
        )
    }
}

/////// Link component

class Link extends React.Component {
    componentDidMount() {
        this.d3Link = d3
            .select(ReactDOM.findDOMNode(this))
            .datum(this.props.data)
            .call(enterLink)
    }

    componentDidUpdate() {
        this.d3Link.datum(this.props.data).call(updateLink)
    }

    render() {
        return <line className="link" />
    }
}

/////// Node component

class Node extends React.Component {
    componentDidMount() {
        this.d3Node = d3
            .select(ReactDOM.findDOMNode(this))
            .datum(this.props.data)
            .call(enterNode)
    }

    componentDidUpdate() {
        this.d3Node.datum(this.props.data).call(updateNode)
    }

    render() {
        return (
            <g className="node">
                <circle
                    name={this.props.data.id}
                    ref="dragMe"
                    onClick={e => this.props.handleClick(this.props.data.id)}
                />
                <g>
                    <rect />
                    <text>{this.props.data.name}</text>
                </g>
            </g>
        )
    }
}

export default App
