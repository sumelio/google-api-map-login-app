import React, { Component } from 'react'
import {MyGoogleMap} from './MyGoogleMap'

class TodoItems extends Component {
  createTasks(item) {
    return <div className="card border-dark mb-3"  key={item.key} >
           <div className="card-header" id="headingOne{item.key}" >
            <h5 className="mb-1">
            <h6 className="my-0">Origin</h6>
            <small className="text-muted">{item.originAddress}</small>
            <h6 className="my-0">Destination</h6>
            <small className="text-muted">{item.destinationAddress}</small>
            <h6 className="my-0">Description</h6>
            <small className="text-muted">{item.description}</small>
          </h5>
        </div>
         <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <MyGoogleMap data={item} />
        </div>
    </div>

  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.reverse().map(this.createTasks)
    return <div>{listItems}</div>
  }
}

export default TodoItems