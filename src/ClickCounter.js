import React, { Component } from 'react'
import UpdatedComponent from './Withcounter'
 class ClickCounter extends Component {
  
    
  render() {
    const { count,incrementCount } = this.props
    return (
      <div>
       <button onClick={incrementCount}>{this.props.name} click {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent( ClickCounter,5)
