import React, { Component } from 'react'
import FRinput from './FRinput'

 class FRParentinput extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    }

    clickHandler =()=>{
      this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <FRinput ref={this.inputRef}></FRinput>
        <button onClick={this.clickHandler}>focus input</button>
      </div>
    )
  }
}

export default FRParentinput
