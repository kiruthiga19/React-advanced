import logo from './logo.svg';
import './App.css';
import RefsDemo from './RefsDemo';
import FocusInput from './FocusInput';
import FRParentinput from './FRParentinput';
import PortalDemo from './PortalDemo';
import Hero from './Hero';
import ErrBoundary from './ErrBoundary';

function App() {
  return (
    <div className="App">
      {/* <PortalDemo></PortalDemo> */}
      <ErrBoundary>
      <Hero heroname='batman'></Hero>
      </ErrBoundary>
      <ErrBoundary>
      <Hero heroname='supper man'></Hero>
      </ErrBoundary>
      <ErrBoundary>
      <Hero heroname='joker'></Hero>
      </ErrBoundary>
      {/* <FRParentinput></FRParentinput> */}
      {/* <FocusInput></FocusInput> */}
     {/* <RefsDemo></RefsDemo> */}
    </div>
  );
}

export default App;
