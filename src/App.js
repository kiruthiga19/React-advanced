import logo from './logo.svg';
import './App.css';
import CounterTwo from './component/CounterTwo';
import React, {useReducer} from 'react';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import ComponentC from './component/ComponentC';
import DataFetchingOne from './component/DataFetchingOne';

export const CountContext =React.createContext()
const initialState  = 0
const reducer =(state, action) =>{
    switch(action) {
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state

    }
}


function App() {
  const [count,dispatch] = useReducer(reducer, initialState )
  return (
    // <CountContext.Provider
    // value={ {countState: count,countDispatch}}>
    // <div className="App">
    // <ComponentA></ComponentA>
    // <ComponentB></ComponentB>
    // <ComponentC></ComponentC>
    // </div>
    // </CountContext.Provider>
    <DataFetchingOne></DataFetchingOne>
  );
}

export default App;
