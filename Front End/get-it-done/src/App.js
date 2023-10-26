import './App.css';
import Daily from './components/Daily';
import Monthly from './components/Monthly';
import Weekly from './components/Weekly';

function App() {
  return (
    <div className="App">
      <h1>Get it done</h1>
      <div className='app-body'><Daily /><Weekly /><Monthly /></div>
    </div>
  );
}

export default App;
