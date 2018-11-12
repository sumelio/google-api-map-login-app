import React, { Component } from 'react'
import {MyGoogleMap} from './MyGoogleMap'

class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.destinationAddress}
        <MyGoogleMap data={item} />
    }</li>
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <div>
         <ul className="theList">{listItems}
         
         </ul>
         
         </div>
  }
}

export default TodoItems