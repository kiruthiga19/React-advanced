import logo from './logo.svg';
import './App.css';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import User from './component/User';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
    {/* <ClickCounter></ClickCounter>
    <HoverCounter></HoverCounter>
    <User render={ (isLoggedIn)=> isLoggedIn?'kiru':'guest'}></User> */}
    <Counter render={(count,incrementCount)=><ClickCounter count={count} 
    incrementCount={incrementCount}/>}></Counter>
     <Counter render={(count,incrementCount)=><HoverCounter count={count} 
    incrementCount={incrementCount}/>}></Counter>
    </div>
  );
}

export default App;
