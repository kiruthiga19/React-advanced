import React from "react";
// syntax const NewComponent = higherOrderComponent(originalComponent)
const UpdatedComponent= (OriginalComponent,incrementNumber)=>{
    class Newcomponent extends React.Component{

        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      
          incrementCount = ()=>{
              this.setState(
               prevState =>{
                  return{
                       count:prevState.count+incrementNumber
                      }
               }
              )
          }

        render(){
            return<OriginalComponent count={this.state.count} 
            incrementCount={this.incrementCount} {...this.props}>
            </OriginalComponent>
        }
    }
    return Newcomponent
}

export default UpdatedComponent