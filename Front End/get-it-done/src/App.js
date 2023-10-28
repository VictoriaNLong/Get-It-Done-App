import './App.css';
import Daily from './components/Daily';
import Monthly from './components/Monthly';
import TopBar from './components/TopBar';
import Weekly from './components/Weekly';


function App() {
  return (
    <div className="App">
      <TopBar />
      <div className='app-body'><Daily /><Weekly /><Monthly /></div>
    </div>
  );
}

export default App;
