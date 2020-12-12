import React, { Component } from "react";


class InputContainer extends Component {

    render() {
        return (
            <div>
                <div>
                    <textarea value={this.props.inputEdges} id="inputs" onChange={(e) => this.props.nodeChangeHandler(e.target.value)} className={"input"} />
                </div>

                <button BtnId="create"
                    onClick={this.props.createHandler} className="button">{"create"}</button>
                <button BtnId="clean"
                    onClick={this.props.cleanHandler} className="button">{"clean"}</button>

            </div >

        )
    }
}

export default InputContainer;