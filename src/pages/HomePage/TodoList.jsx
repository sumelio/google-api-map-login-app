import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    //this.props.currentItem.focus()
    console.log(this.props)
  }
  render() { 
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
          <div>
            <label htmlFor="originAddress">Origin address</label>
            <input
              input="text"
              placeholder="Origin address"
              onChange={this.props.handleChange}
              name="originAddress" 
            />
           </div>
           <div>
            <label htmlFor="destinationAddress">Destination address</label>
            <input
              input="text"
              placeholder="Destination address"
              onChange={this.props.handleChange}
              name="destinationAddress" 
            />
            </div>

           <div>
            <label htmlFor="destinationAddress">Destination address</label>
            <input
              input="text"
              placeholder="Task"
              onChange={this.props.handleChange}
              name="apiKeyGoogle" 
            />
            
            </div>
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList