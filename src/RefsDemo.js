import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      // 2nd method
      this.cbRef =null //call back ref 2nd
      this.setCbRef =(element) =>{
        this.cbRef = element
    }
}
    
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>

        {/* 2nd method */}
        <input type="text" ref={this.setCbRef}></input>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    )
  }
}

export default RefsDemo
