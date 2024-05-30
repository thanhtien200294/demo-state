import { Component } from "react";

export default class ClassComponent extends Component {
    state = {
        count: 1
    }
    
    render() {
        console.log("class component render");
        return (
            <div>
                <h1>ClassComponent: {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Class Update</button>
            </div>
        )
    }
}
