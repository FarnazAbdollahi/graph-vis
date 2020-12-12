import React, { Component } from "react";


class GraphContainer extends Component {

    render() {

        return (

            <div>

                <svg id="svg" version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    className="graph"
                    aria-labelledby="title"
                    role="img">

                </svg>
                <h3> Simple Graph Visualizer</h3>
            </div >
        )
    }
}

export default GraphContainer;