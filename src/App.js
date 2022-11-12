import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './Component/CakeContainer';
import HooksCakeContainer from './Component/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer></CakeContainer>
     <HooksCakeContainer></HooksCakeContainer>
    </div>
    </Provider>
  );
}

export default App;
