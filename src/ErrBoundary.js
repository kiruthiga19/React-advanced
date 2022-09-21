import React, { Component } from 'react'

class ErrBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
    // to logoin the error 
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
  render() {
    if(this.state.hasError){
        return <h1>something went worng</h1>
    }
    return this.props.children
    
  }
}

export default ErrBoundary
