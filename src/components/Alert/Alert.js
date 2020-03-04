import React, { Component } from 'react'
import './Alert.css'

class Alert extends Component {

    constructor (props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = () => {
        alert(`Name : ${this.state.name} Age: ${this.state.age} Email: ${this.state.email}`)
    }


    render() {
        return (
                <form className="alertForm" onSubmit={this.handleSubmit}>
                    <div className="formGroup">
                        <label>Name</label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange} />
                    </div>
                    <div className="formGroup">
                        <label>Age</label>
                        <input
                            type="number"
                            min="0"
                            value={this.state.age}
                            onChange={this.handleAgeChange} />
                    </div>
                    <div className="formGroup">
                        <label>Email</label>
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
        )
    }
}

export default Alert
