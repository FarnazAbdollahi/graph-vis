import React, { Component } from "react";
import ReactDOM from 'react-dom'
import GraphContainer from "./GraphContainer";
import InputContainer from "./InputContainer"
import '../App.css'


class App extends Component {

    state = {
        nodes: [],
        nodes_count: 0,

    }
    randomPosition = (node) => {
        return {
            x: Math.ceil(Math.random() * (500 - 100) + 100),
            y: Math.ceil(Math.random() * (500 - 100) + 100)
        }
    }
    removeDuplicates = (array) => {
        let unique = [...(new Set(array))]
        return unique
    }
    nodeChangeHandler = (input) => {
        let arr = input
        this.setState({ nodes: arr })
        // console.log(this.state.nodes)


    }
    onclick_clear_button = () => {
        // console.log(this.state.nodes)
        this.setState({ nodes: [] })
        document.getElementById("svg").innerHTML = ''
        this.setState({ node: [] })
    }

    createHandler = () => {
        let nodesWithPos = []
        let node = ''
        let pos = ''
        let newNodes = this.removeDuplicates(this.state.nodes)
        // console.log(newNodes)
        let nodes = newNodes
        newNodes = nodes.map((item) => {
            for (let i in item) {
                if (/^[a-zA-Z]+$/.test(item[i])) {
                    node = item[i]
                    pos = this.randomPosition(item[i])
                    nodesWithPos.push([node, pos])
                }
            }
            return newNodes
        })
        console.log(nodesWithPos)

        let index = 0
        let list = []
        while (index < this.state.nodes.length) {
            list.push(this.state.nodes.slice(index, index + 3))
            index = index + 4
        }
        list = list.map((item) => {
            list = item.split(",")
            return list
        }

        )
        this.setState({ listOfEdges: list })
        console.log(list)
        // //add nodes to graph

        let circles = []
        let texts = []

        nodesWithPos.forEach((item, index) => {
            circles.push(<circle cx={item[1].x} cy={item[1].y} r='30' id={item[0]} key={item[0]} className="node"></circle>)
            texts.push(<text className="labels" nodeid={item[0]} x={item[1].x} y={item[1].y} textAnchor="middle"> {item[0]}</text>)


        })
        let nodes_count = 0;
        for (let i = 0; i < nodesWithPos.length; ++i) {
            nodes_count++
        }
        this.setState({ nodes_count: nodes_count })

        let lines = []

        list.map((item, index) => {
            console.log(item[0][2])
            console.log(nodesWithPos)
            var node1 = nodesWithPos.find((node) => node[0] === item[0][0])
            var node2 = nodesWithPos.find((node) => node[0] === item[0][2])

            // console.log(node1)
            // console.log(node2)

            lines.push(<line
                className="line"
                key={index}
                id={index}
                x1={node1[1].x} x2={node2[1].x}
                y1={node1[1].y} y2={node2[1].y} >
            </line>)
            return list
        }
        )

        ReactDOM.render(
            <React.Fragment>
                {circles}
                {texts}
                {lines}
            </React.Fragment>,
            document.getElementById('svg')
        )

    }
    render() {
        return (
            <div className="App" >
                <InputContainer
                    inputEdges={this.state.nodes}
                    nodeChangeHandler={this.nodeChangeHandler}
                    cleanHandler={this.onclick_clear_button}
                    createHandler={this.createHandler} />
                <GraphContainer />
            </div>
        )
    }


}
export default App;