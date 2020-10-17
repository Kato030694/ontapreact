import React, { Component } from 'react'
import Child from "./child";
export default class Parent extends Component {
    constructor(props){
        super(props);
        console.log("constructor")
        this.state ={
            state1: 1,
            state2: 2
        }
    }
    componentWillMount(){
        // Giao dien se bi giat, vi chay truoc render
        console.log("componentWillMount");
    }

    render() {
        console.log("render")
        return (
            <div>
                <h3>Parent Component</h3>
                <Child a={this.state.state1}/>
                <button onClick={()=>this.setState({state1: this.state.state1 + 1})}>Change</button>
                 <button onClick={()=>this.setState({state2: this.state.state2 + 1})}>Change</button>
            </div>
        )
    }
    componentDidMount(){
        // viet logic muon thuc hien khi component duoc khoi tao
        // ex: fech data
        // Tang hieu suat trang web, didmount chay sau render.
        // 
        console.log("componentDidMount")
    }
}
