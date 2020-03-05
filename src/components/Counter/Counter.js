import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {

    constructor (props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    subCount = () => {
        if(this.count !== 0)
        this.setState({
            count: this.state.count -1
        })
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    


    render() {
        
        return (
            <div id='counter'>
                <button className="btn" disabled={this.state.count ===0} onClick={this.subCount}>-</button>
                <p>{this.state.count}</p>
                <button className="btn" disabled={this.state.count ===100} onClick={this.addCount}>+</button>
            </div>
        )
    }
}

export default Counter
