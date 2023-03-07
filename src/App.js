import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name='Martin'></Greeting>
      </header>
      <div className='todo caja1'></div>
      <div className='todo caja2'></div>
      <div className='todo caja3'></div>
    </div>
    
  );
}

export default App;
