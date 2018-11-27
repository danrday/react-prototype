import Link from 'next/link'

var React = require('react')
var ReactFauxDOM = require('react-faux-dom')
import { withFauxDOM } from 'react-faux-dom'

var d3 = require('d3')
var { hierarchy, tree } = require('d3-hierarchy')

import treeData from './treeData'

import apps from './apps.js'

/*
Because of the server-side rendering (I think), rendering d3 with react-faux-dom in the render method won't work
because that method runs presumably server-side before it can find the DOM...
so we use the connectFauxDom method in the componentDidMount hook and modify an existing DOM element.
 */

class FrequencyChart extends React.Component {
    state = {
        d: null
    }

    componentDidMount() {
        console.log('HELLOOO!' )
        this.drawChart()
    }

    render() {

console.log('render')
        return <svg width="960" height="960" className="app">{this.props.chart}</svg>
    }

    // shouldComponentUpdate() {
    //     return false; // This prevents future re-renders of this component
    // }

    componentDidUpdate() {
        console.log("UPDATE COMPONENT!")

        let app = d3.selectAll(".link")

        console.log("CHART", app)

    }
    updateState = (x, y) => {


        console.log('update state')
        d3.selectAll("circle").data(apps.nodes)
            .attr("cx", function(data) {
                console.log("HI")
                return x
            })
            .attr("cy", function(data) {
                console.log("HI")
                return y
            })

        this.setState({x,y})
        // d3.selectAll(".node").remove()

    }
    drawChart = () => {

        let json = apps

        const fauxy = this.props.connectFauxDOM('svg', 'chart')

        let faux = d3.select(fauxy)

        // Set the dimensions and margins of the diagram
        var margin = { top: 20, right: 90, bottom: 30, left: 190 },
            // width = 960 - margin.left - margin.right,
            // height = 500 - margin.top - margin.bottom

            width = 960,
            height = 960;

        var forceStrength = 0.03;

        function charge(d) {
            return -Math.pow(d.connections, 4.0) * forceStrength;
        }

        var simulation = d3.forceSimulation()
        // throws errors
        // .force("link", d3.forceLink().id(function(d) { return d.id; }))

        // fixes errors
            .force("link", d3.forceLink().distance(30))

            .force('charge', d3.forceManyBody().strength(charge))
            .force("collide",d3.forceCollide( function(d){return 60 }).iterations(16) )
            .force("center", d3.forceCenter(width / 2, height / 2));


        simulation.nodes(json.nodes);

        simulation
            .force("link")
            .links(json.links);

        var link = faux.selectAll(".link")
            .data(json.links)
            .enter()
            .append("line")
            .attr("class", "link");



        // var drag = force.drag()
        //     .on("dragstart", dragstart);

        // function dragstart(d) {
        //     d3.select(this).classed("fixed", d.fixed = true);
        // }


        var node = faux.selectAll(".node")
            .data(json.nodes)
            .enter().append("g")
            .attr("class", "node")
            // .on("dblclick", releasenode)
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        node.append("circle")
            .attr("r", function(d) {
                return 5 + d.connections*1.5
            })


        node.append("text")
            .attr("dx", "2.5em")
            .attr("dy", "0.25em")
            .text(function(d) { return d.id });

        simulation.on("tick", function() {

            link.attr("x1", function(d) {
                // console.log("D", d);
                return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            node.attr("transform", function(d) {
                // console.log("D transform", d);
                return "translate(" + d.x + "," + d.y + ")"; });
        });

        let self = this

        function dragstarted (d) {
            console.log("drag started")

            self.updateState(d.x, d.y)
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            // d.fx = null;
            // d.fy = null;
        }

        function releasenode(d) {
            d.fx = null;
            d.fy = null;
        }

        // finito
        return faux
    }
}

export default withFauxDOM(FrequencyChart)
