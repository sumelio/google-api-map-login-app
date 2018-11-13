import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidUpdate() {
    //this.props.currentItem.focus()
    console.log(this.props)
  }
  render() {  
    return ( 
          <form  className="form-signin" name="form"  onSubmit={this.props.addItem}>
          <div className={'form-group' + (this.props.submitted 
            && !this.props.direction.apiKeyGoogle ? ' has-error' : '')}>
           <label htmlFor="apiKeyGoogle">API KEY Google</label>
            <input
              input="text"
              className="form-control"
              placeholder="Enter your API KEY Google. "
              onChange={this.props.handleChange}
              name="apiKeyGoogle"
              required autoFocus
              value={this.props.direction.apiKeyGoogle} 
            />
               {this.props.submitted  && !this.props.direction.apiKeyGoogle && <div className="help-block">apiKeyGoogle is required</div>}
            </div>
          <div className={'form-group' + (this.props.submitted 
            && !this.props.direction.apiKeyGoogle ? ' has-error' : '')} >
          <label htmlFor="originAddress">Origin Address</label>
            <input
              input="text"
              className="form-control"
              placeholder="Cl. 6c, #82a25, Bogotá"
              onChange={this.props.handleChange}
              name="originAddress" 
              required autoFocus
              value={this.props.direction.originAddress}
            />
            {this.props.submitted   && !this.props.direction.originAddress && <div className="help-block">originAddress is required</div>}
           </div>
           <div className="form-group" >
           <label htmlFor="destinationAddress">Destination Address</label>
            <input
              input="text"
              className="form-control"
              placeholder="Cl. 11 #4-14, Bogotá, Cundinamarca"
              onChange={this.props.handleChange}
              name="destinationAddress" 
              required autoFocus
              value={this.props.direction.destinationAddress}
            />
            {this.props.submitted   && !this.props.direction.destinationAddress && <div className="help-block">originAddress is required</div>}
            </div>
            <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" 
             name="description"
            value={this.props.direction.description}
            required autoFocus
            onChange={this.props.handleChange}
            placeholder="Calculate duration and distance from my home to my new job"
            id="description" rows="3"></textarea>
          </div>

            <button  className="btn btn-lg btn-primary btn-block" type="submit"> Add Service </button>
          </form> 
    )
  }
}

export default TodoList