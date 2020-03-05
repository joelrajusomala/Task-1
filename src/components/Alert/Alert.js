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

    handleChange = (event) => {
        this.setState({
            [event.target.name ]: event.target.value
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
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                </div>
                <div className="formGroup">
                    <label>Age</label>
                    <input
                        type="number"
                        min="0"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange} />
                </div>
                <div className="formGroup">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Alert
