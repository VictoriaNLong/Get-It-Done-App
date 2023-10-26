import './App.css';
import Daily from './components/Daily';
import Monthly from './components/Monthly';
import Weekly from './components/Weekly';

function App() {
  return (
    <div className="App">
      <h1>GET IT DONE</h1>
      <h2 className='header-desc'>YOUR TASK MANAGEMENT COMPANION</h2>
      <div className='top-border'/>
      <div className='app-body'><Daily /><Weekly /><Monthly /></div>
      <div className='bottom-border'/>
    </div>
  );
}

export default App;
