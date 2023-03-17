import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
import TaskListComponent from './components/container/task_list';
import ComponentA from './components/container/ComponentA';

function App() {

  const probando = {
    name : 'antony',
    apellido : 'LastName',
    email : 'antony@gmail.com',
    conectado : false
  };
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/*  <Greeting name='Martin'></Greeting>
      <div className='todo caja1'></div>
      <div className='todo caja2'></div>
      <div className='todo caja3'></div>
      */}
        <TaskListComponent></TaskListComponent>
        <ComponentA propsContact={probando}></ComponentA>
      </header>
    </div>
    
  );
}

export default App;
