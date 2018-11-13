import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    //this.props.currentItem.focus()
    console.log(this.props)
  }
  render() { 
    return ( 
          <form  className="form-signin" onSubmit={this.props.addItem}>
          <div className="form-group" >
            <input
              input="text"
              placeholder="API KEY google"
              onChange={this.props.handleChange}
              name="apiKeyGoogle" 
              minlength="600"
              required="true"
            />
            
            </div>
          <div className="form-group" >
            <input
              input="text"
              placeholder="Origin address"
              onChange={this.props.handleChange}
              name="originAddress" 
            />
           </div>
           <div className="form-group" >
            <input
              input="text"
              placeholder="Destination address"
              onChange={this.props.handleChange}
              name="destinationAddress" 
            />
            </div>


            <button  className="btn btn-lg btn-primary btn-block" type="submit"> Add Service </button>
          </form> 
    )
  }
}

export default TodoList