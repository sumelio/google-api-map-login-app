import React, { Component } from 'react'
import {MyGoogleMap} from './MyGoogleMap'

class TodoItems extends Component {
  createTasks(item) {
    return <div className="card"  key={item.key} >
    <div className="card-header" id="headingOne{item.key}" key={item.key} >
          <h5 className="mb-0">
          <MyGoogleMap data={item} />
            
          </h5>
        </div>
    
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">
          <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Origin: {item.originAddress} -> Destination: {item.destinationAddress}
            </button>
           </div>
        </div>
    </div>

  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.reverse().map(this.createTasks)

    return <div >{listItems}</div>
  }
}

export default TodoItems