import React, { Component } from 'react'
import './TodoList.css'
import ListItems from './ListItems'

class TodoList extends Component {

    constructor (props) {
        super(props)

        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
    }

    handleInput = (event) => {
        this.setState({
            currentItem: {
                text: event.target.value,
                key: Date.now()
            }
        })
    }

    addItem = (event) => {
        event.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== "") {
            const newItems = [...this.state.items, newItem]
            this.setState({
                items: newItems,
                currentItem: {
                    text: "",
                    key: ""
                }
            })
        }
    }

    deleteItem = (key) => {
        const filteredItems = this.state.items.filter(item => item.key !== key)
        this.setState({
            items: filteredItems
        })
    }


    render() {
        return (
            <div className="todo">
                <form className="to-do-form" onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput} />
                    <button type="submit">Add Item</button>
                </form>
                <ListItems items={this.state.items} deleteItem={this.deleteItem}></ListItems>
            </div>
        )
    }
}

export default TodoList
