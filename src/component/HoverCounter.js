import React, { Component } from 'react'

class HoverCounter extends Component {

  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
      </div>
    )
  }
}

export default HoverCounter
