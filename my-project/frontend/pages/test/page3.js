import Link from 'next/link'

// Using d3 v.4.x.x

var React = require('react')
var ReactFauxDOM = require('react-faux-dom')
import {withFauxDOM} from 'react-faux-dom'

var d3 = require('d3')
var { hierarchy, tree } = require('d3-hierarchy')


class FrequencyChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actualDiv: null,
            displayChart: false
        };
    }
    drawChart() {
        // const div = new ReactFauxDOM.createElement('div');

        const faux = this.props.connectFauxDOM('div', 'chart')
        // ...
        var treeData =
            {
                "name": "Top Level",
                "value": 10,
                "type": "black",
                "level": "red",
                "children": [
                    {
                        "name": "Level 2: A",
                        "value": 15,
                        "type": "grey",
                        "level": "red",
                        "children": [
                            {
                                "name": "Son of A",
                                "value": 5,
                                "type": "steelblue",
                                "level": "orange"
                            },
                            {
                                "name": "Daughter of A",
                                "value": 8,
                                "type": "steelblue",
                                "level": "red"
                            },
                            {
                                "name": "Son of A",
                                "value": 5,
                                "type": "steelblue",
                                "level": "orange"
                            },
                            {
                                "name": "Daughter of A",
                                "value": 8,
                                "type": "steelblue",
                                "level": "red"
                            },
                            {
                                "name": "Son of A",
                                "value": 5,
                                "type": "steelblue",
                                "level": "orange"
                            },
                            {
                                "name": "Daughter of A",
                                "value": 8,
                                "type": "steelblue",
                                "level": "red"
                            }
                        ]
                    },
                    {
                        "name": "Level 2: B",
                        "value": 10,
                        "type": "grey",
                        "level": "green",
                        "children": [
                            {
                                "name": "Son of A",
                                "value": 5,
                                "type": "steelblue",
                                "level": "orange"
                            },
                            {
                                "name": "Daughter of A",
                                "value": 8,
                                "type": "steelblue",
                                "level": "red",
                                "children": [
                                    {
                                        "name": "Son of A",
                                        "value": 5,
                                        "type": "steelblue",
                                        "level": "orange",
                                        "children": [
                                            {
                                                "name": "Son of A",
                                                "value": 5,
                                                "type": "steelblue",
                                                "level": "orange"
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Daughter of A",
                                        "value": 8,
                                        "type": "steelblue",
                                        "level": "red"
                                    },
                                    {
                                        "name": "Son of A",
                                        "value": 5,
                                        "type": "steelblue",
                                        "level": "orange"
                                    },
                                    {
                                        "name": "Daughter of A",
                                        "value": 8,
                                        "type": "steelblue",
                                        "level": "red"
                                    },
                                    {
                                        "name": "Son of A",
                                        "value": 5,
                                        "type": "steelblue",
                                        "level": "orange"
                                    },
                                    {
                                        "name": "Daughter of A",
                                        "value": 8,
                                        "type": "steelblue",
                                        "level": "red"
                                    }
                                ]
                            },
                            {
                                "name": "Son of A",
                                "value": 5,
                                "type": "steelblue",
                                "level": "orange"
                            },
                            {
                                "name": "Daughter of A",
                                "value": 8,
                                "type": "steelblue",
                                "level": "red"
                            },
                            {
                                "name": "Son of A",
                                "value": 5,
                                "type": "steelblue",
                                "level": "orange"
                            },
                            {
                                "name": "Daughter of A",
                                "value": 8,
                                "type": "steelblue",
                                "level": "red"
                            }
                        ]
                    }
                ]
            };

            // Set the dimensions and margins of the diagram
                    var margin = {top: 20, right: 90, bottom: 30, left: 190},
                        width = 960 - margin.left - margin.right,
                        height = 500 - margin.top - margin.bottom;

        var treemap = d3.tree()
            .size([height, width]);

//  assigns the data to a hierarchy using parent-child relationships
        var nodes = d3.hierarchy(treeData, function(d) {
            return d.children;
        });

// maps the node data to the tree layout
        nodes = treemap(nodes);

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
        var svg = d3.select(faux).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom),
            g = svg.append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

// adds the links between the nodes
        var link = g.selectAll(".link")
            .data( nodes.descendants().slice(1))
            .enter().append("path")
            .attr("class", "link")
            .style("stroke", function(d) { return d.data.level; })
            .attr("d", function(d) {
                return "M" + d.y + "," + d.x
                    + "C" + (d.y + d.parent.y) / 2 + "," + d.x
                    + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
                    + " " + d.parent.y + "," + d.parent.x;
            });

// adds each node as a group
        var node = g.selectAll(".node")
            .data(nodes.descendants())
            .enter().append("g")
            .attr("class", function(d) {
                return "node" +
                    (d.children ? " node--internal" : " node--leaf"); })
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")"; });

// adds the circle to the node
        node.append("circle")
            .attr("r", function(d) { return d.data.value; })
            .style("stroke", function(d) { return d.data.type; })
            .style("fill", function(d) { return d.data.level; });

// adds the text to the node
        node.append("text")
            .attr("dy", ".35em")
            .attr("x", function(d) { return d.children ?
                (d.data.value + 4) * -1 : d.data.value + 4 })
            .style("text-anchor", function(d) {
                return d.children ? "end" : "start"; })
            .text(function(d) { return d.data.name; });

        // return div.toReact()
        return faux
    }

    componentDidMount () {
        this.drawChart();
        // this.setState({displayChart: true})
    }

    render () {
        // return <div className="app">{this.state.displayChart && (this.drawChart())}</div>
        return <div className="app">{this.props.chart}</div>
    }
}
export default withFauxDOM(FrequencyChart);